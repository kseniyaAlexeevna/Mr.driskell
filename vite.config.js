import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: getHtmlEntries(),
      output: {
        entryFileNames: 'assets/[name].js',  // для JS-файлов — сохраняем оригинальное имя
        chunkFileNames: 'assets/[name].js',   // для чанков — сохраняем оригинальное имя
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extType)) {
            return 'assets/images/[name].[ext]';
          }
          if (['ico', 'svg'].includes(extType)) {
            return 'assets/images/icons/[name].[ext]';
          }
          if (['woff', 'woff2', 'ttf', 'otf'].includes(extType)) {
            return 'assets/fonts/[name].[ext]';
          }
          else {
            return 'assets/[name].[ext]';  // для остальных статических файлов
          }
        }
      }
    }
  },
  base: "./"
});

// Функция для поиска всех .html файлов в src
function getHtmlEntries() {
  const inputDir = path.resolve(__dirname);
  const entries = {};

  function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        if (file !== 'node_modules' && file !== 'dist') {
          walk(filePath);
        }
      } else if (file.endsWith('.html')) {
        // Вычисляем относительный путь от src
        const relativePath = path.relative(inputDir, filePath);
        
        // Ключом для Rollup будет имя файла БЕЗ расширения .html
        // Например: src/about.html -> ключ 'about', выход: dist/about.html
        const key = relativePath.replace(/\.html\$/, '');
        
        entries[key] = filePath;
      }
    });
  }

  walk(inputDir);
  
  // Если HTML не найдено, возвращаем дефолт, чтобы сборка не упала
  return Object.keys(entries).length > 0 ? entries : { main: './index.html' };
}