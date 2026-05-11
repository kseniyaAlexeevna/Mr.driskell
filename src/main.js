import './style.scss';

const windowW = document.documentElement.clientWidth;
const catalogMenu = document.querySelector('.header__catalog-menu.bottom')
const catalogMenuMobile = document.querySelector('.header__catalog-menu.mobile')
const headerMenu = document.querySelector('.header__menu')
const headerMenuCatalog = document.querySelector('.header__menu-item.ctg')
const headerMenuCatalogList = document.querySelector('.header__menu-catalog-list')
const overlay = document.querySelector('.overlay')
const catalogFilter = document.querySelector('.header__catalog-filter')
const catalogFilterCategory = document.querySelector('.header__catalog-filter-top-category')
const catalogFilterBrand = document.querySelector('.header__catalog-filter-top-brand')
const catalogListCategory = document.querySelector('.header__catalog-filter-bottom-category')
const catalogListBrand = document.querySelector('.header__catalog-filter-bottom-brand')

catalogMenu.addEventListener('click', () => {
  if (catalogFilter.classList.contains('active')) {
    catalogFilter.classList.remove('active')
  } else {
    catalogFilter.classList.add('active')
  }
})
catalogFilterCategory.addEventListener('click', () => {
  if (!catalogFilterCategory.classList.contains('active') && catalogFilterBrand.classList.contains('active')) {
    catalogFilterCategory.classList.add('active')
    catalogFilterBrand.classList.remove('active')
  }
  if (!catalogListCategory.classList.contains('active') && catalogListBrand.classList.contains('active')) {
    catalogListCategory.classList.add('active')
    catalogListBrand.classList.remove('active')
  }
})
catalogFilterBrand.addEventListener('click', () => {
  if (!catalogFilterBrand.classList.contains('active') && catalogFilterCategory.classList.contains('active')) {
    catalogFilterBrand.classList.add('active')
    catalogFilterCategory.classList.remove('active')
  }
  if (!catalogListBrand.classList.contains('active') && catalogListCategory.classList.contains('active')) {
    catalogListBrand.classList.add('active')
    catalogListCategory.classList.remove('active')
  }
})

catalogMenuMobile.addEventListener('click', () => {
  if (headerMenu.classList.contains('active')) {
    headerMenu.classList.remove('active')
    catalogMenuMobile.classList.remove('active')
    overlay.classList.remove('active')
  } else {
    headerMenu.classList.add('active')
    catalogMenuMobile.classList.add('active')
    overlay.classList.add('active')
  }
})

overlay.addEventListener('click', () => {
  if (headerMenu.classList.contains('active')) {
    headerMenu.classList.remove('active')
    catalogMenuMobile.classList.remove('active')
    overlay.classList.remove('active')
  } else {
    headerMenu.classList.add('active')
    catalogMenuMobile.classList.add('active')
    overlay.classList.add('active')
  }
})

headerMenuCatalog.addEventListener('click', () => {
  if (headerMenuCatalogList.classList.contains('active')) {
    headerMenuCatalogList.classList.remove('active')
  } else {
    headerMenuCatalogList.classList.add('active')
  }
})

const heroBg = document.querySelectorAll('.hero__background')
const heroBgImg = document.querySelectorAll('.hero__background-img')
const heroPagItem = document.querySelectorAll('.hero__pag-item')
const heroPagItemMobile = document.querySelectorAll('.hero__pag-item.mobile')
const heroPagBtn = document.querySelectorAll('.hero__pag-button')
const filterItem = document.querySelectorAll(".filter__item")
const filterCatalog = document.querySelectorAll(".filter__catalog")
const filterCardTabs = document.querySelectorAll(".filter__card-tabs")
const filterCardImgs = document.querySelectorAll(".filter__card-images")
const filterCardBtn = document.querySelectorAll(".filter__card-button")
let currentPag = 0
let currentTab = 0
let filterCurrentItem = 2

if (windowW <= 1280) {
  heroPagItemMobile.forEach((el, index) => {
    el.addEventListener('click', () => {
      if (heroPagItemMobile[currentPag].classList.contains('active')) {
        heroBg[currentPag].classList.remove('active')
        heroPagItemMobile[currentPag].classList.remove('active')
      }

      currentPag = index;

      if (!heroPagItemMobile[currentPag].classList.contains('active')) {
        heroBg[currentPag].classList.add('active')
        heroPagItemMobile[currentPag].classList.add('active')
      }
    })
  })

  filterCatalog.forEach((el) => {
    Array.from(el.children).forEach((card, ind) => {
      if (ind > 5) {
        el.children[ind].style.display = "none"
      }
    })
  })
} else {
  heroPagBtn[0].addEventListener('click', () => {
    if (heroPagItem[currentPag].classList.contains('active')) {
      heroBg[currentPag].classList.remove('active')
      heroPagItem[currentPag].classList.remove('active')
    }

    currentPag -= 1;
    if (currentPag < 0) {
      currentPag = heroPagItem.length - 1
    }

    if (!heroPagItem[currentPag].classList.contains('active')) {
      heroBg[currentPag].classList.add('active')
      heroPagItem[currentPag].classList.add('active')
    }
    btnUpdate()
  })
  heroPagBtn[1].addEventListener('click', () => {
    if (heroPagItem[currentPag].classList.contains('active')) {
      heroBg[currentPag].classList.remove('active')
      heroPagItem[currentPag].classList.remove('active')
    }

    currentPag += 1;
    if (currentPag == heroPagItem.length) {
      currentPag = 0
    }

    if (!heroPagItem[currentPag].classList.contains('active')) {
      heroBg[currentPag].classList.add('active')
      heroPagItem[currentPag].classList.add('active')
    }
    btnUpdate()
  })

  heroPagItem.forEach((el, index) => {
    el.addEventListener('click', () => {
      if (heroPagItem[currentPag].classList.contains('active')) {
        heroBg[currentPag].classList.remove('active')
        heroPagItem[currentPag].classList.remove('active')
      }

      currentPag = index;

      if (!heroPagItem[currentPag].classList.contains('active')) {
        heroBg[currentPag].classList.add('active')
        heroPagItem[currentPag].classList.add('active')
      }

      heroPagBtn.forEach((el) => {
        if (currentPag == 0) {
          heroPagBtn[1].classList.add('active')
        } else if (currentPag == heroPagItem.length - 1) {
          heroPagBtn[0].classList.add('active')
        } else {
          el.classList.remove('active')
        }
      })
      btnUpdate()
    })
  })
}

if (windowW <= 400) {
  heroBgImg.forEach((el) => {
    el.src = "./src/assets/images/hero-bg-mob.jpg"
  })
}

function btnUpdate() {
  heroPagBtn.forEach((el) => {
    if (currentPag == 0) {
      heroPagBtn[1].classList.add('active')
    } else if (currentPag == heroPagItem.length - 1) {
      heroPagBtn[0].classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
}

filterItem.forEach((el, index) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    if (filterItem[filterCurrentItem].classList.contains('active')) {
      filterItem[filterCurrentItem].classList.remove('active')
      filterCatalog[filterCurrentItem].classList.remove('active')
    }

    filterCurrentItem = index;

    if (!filterItem[filterCurrentItem].classList.contains('active')) {
      filterItem[filterCurrentItem].classList.add('active')
      filterCatalog[filterCurrentItem].classList.add('active')
    }
  })
})

let cardInd = 0
let imgClindren = null
let imgFilter = null

filterCardTabs.forEach((el, index) => {
  Array.from(el.children).forEach((tab, ind) => {
    tab.addEventListener("click", () => {
      filterCardImgs.forEach((image, indexImg) => {
        Array.from(image.children).forEach((img, indImg) => {
          if ((indexImg == index) && (indImg == ind)) {
            imgClindren = image.children
            imgFilter = filterCardImgs[cardInd]
          }
        })
      })

      if (cardInd != index) {
        if (Array.from(filterCardTabs[cardInd].children)[currentTab].classList.contains('active')) {
          Array.from(filterCardTabs[cardInd].children)[currentTab].classList.remove('active')
          Array.from(imgFilter.children)[currentTab].classList.remove('active')
        }

        currentTab = 0;

        if (!Array.from(filterCardTabs[cardInd].children)[currentTab].classList.contains('active')) {
          Array.from(filterCardTabs[cardInd].children)[currentTab].classList.add('active')
          Array.from(imgFilter.children)[currentTab].classList.add('active')
        }
        cardInd = index
      }
      if (Array.from(el.children)[currentTab].classList.contains('active')) {
        Array.from(el.children)[currentTab].classList.remove('active')
        Array.from(imgClindren)[currentTab].classList.remove('active')
      }

      currentTab = ind;

      if (!Array.from(el.children)[currentTab].classList.contains('active')) {
        Array.from(el.children)[currentTab].classList.add('active')
        Array.from(imgClindren)[currentTab].classList.add('active')
      }
      cardInd = index
    })
  })
})

if (windowW <= 1000) {
  filterCatalog.forEach((el) => {
    Array.from(el.children).forEach((card, ind) => {
      if (ind > 2) {
        el.children[ind].style.display = "none"
      }
    })
  })
  filterCardBtn.forEach((el) => {
    el.textContent = "В корзину"
  })
}

if (windowW <= 760) {
  filterCatalog.forEach((el) => {
    Array.from(el.children).forEach((card, ind) => {
      if (ind > 0) {
        el.children[ind].style.display = "none"
      }
    })
  })
}

const feedbackArrowLeft = document.querySelector(".feedback__button.left")
const feedbackArrowRight = document.querySelector(".feedback__button.right")
const feedbackList = document.querySelector(".feedback__list")
const feedbackSlides = document.querySelectorAll(".feedback__item")
const feedbackDots = document.querySelectorAll(".feedback__dot")
const slideWidth = feedbackSlides[0].clientWidth;
let currentSlider = 0;
let currentSliderSecond = 1;

if (windowW > 1400) {
  feedbackSlides[currentSliderSecond].classList.add('active')
}

feedbackArrowLeft.addEventListener('click', () => {
  if (feedbackSlides[currentSlider].classList.contains('active')) {
    feedbackSlides[currentSlider].classList.remove('active')
    feedbackDots[currentSlider].classList.remove('active')
    if (windowW > 1400) {
      feedbackSlides[currentSliderSecond].classList.remove('active')
    }
  }

  currentSlider = (currentSlider - 1 + feedbackSlides.length) % feedbackSlides.length;
  console.log(currentSlider)
  if (windowW > 1400) {
    currentSliderSecond = (currentSliderSecond - 1 + feedbackSlides.length) % feedbackSlides.length;
  }

  if (!feedbackSlides[currentSlider].classList.contains('active')) {
    feedbackSlides[currentSlider].classList.add('active')
    feedbackDots[currentSlider].classList.add('active')

    if (windowW > 1400) {
      feedbackSlides[currentSliderSecond].classList.add('active')
    }
  }
  updateSlider()
})

feedbackArrowRight.addEventListener('click', () => {
  if (feedbackSlides[currentSlider].classList.contains('active')) {
    feedbackSlides[currentSlider].classList.remove('active')
    feedbackDots[currentSlider].classList.remove('active')
    if (windowW > 1400) {
      feedbackSlides[currentSliderSecond].classList.remove('active')
    }
  }

  currentSlider = (currentSlider + 1) % feedbackSlides.length;
  if (windowW > 1400) {
    currentSliderSecond = (currentSliderSecond + 1) % feedbackSlides.length;
  }

  if (!feedbackSlides[currentSlider].classList.contains('active')) {
    feedbackSlides[currentSlider].classList.add('active')
    feedbackDots[currentSlider].classList.add('active')
    if (windowW > 1400) {
      feedbackSlides[currentSliderSecond].classList.add('active')
    }
  }
  updateSlider()
});

feedbackDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (feedbackSlides[currentSlider].classList.contains('active')) {
      feedbackSlides[currentSlider].classList.remove('active')
      if (windowW > 1400) {
        feedbackSlides[currentSliderSecond].classList.remove('active')
      }
      feedbackDots[currentSlider].classList.remove('active')
    }

    currentSlider = index;
    if (windowW > 1400) {
      currentSliderSecond = (currentSlider + 1) % feedbackSlides.length;
    }

    if (!feedbackSlides[currentSlider].classList.contains('active')) {
      feedbackSlides[currentSlider].classList.add('active')
      feedbackDots[currentSlider].classList.add('active')

      if (windowW > 1400) {
        feedbackSlides[currentSliderSecond].classList.add('active')
      }
    }
    updateSlider()
  })
});

function updateSlider() {
  if (windowW > 1400) {
    feedbackList.style.transform = `translateX(${(-currentSlider * (slideWidth + 20)) + (windowW - (slideWidth * 2)) / 2}px)`
  } else if (windowW > 1000) {
    feedbackList.style.transform = `translateX(${(-currentSlider * (slideWidth + 20)) + (windowW - (slideWidth)) / 2}px)`
  } else {
    feedbackList.style.transform = `translateX(${(-currentSlider * slideWidth) + (windowW - (slideWidth)) / 2}px)`
  }
}

updateSlider()

const upButton = document.querySelector(".upArrow.container")
let windowHeight = window.document.body.scrollHeight

window.addEventListener("scroll", () => {
  let windowlocate = window.scrollY
  if (windowlocate >= (windowHeight - 2000)) {
    upButton.style.opacity = 1
  } else {
    upButton.style.opacity = 0
  }
})


const brandsButtonLeft = document.querySelector(".brands__button.left")
const brandsButtonRight = document.querySelector(".brands__button.right")
const brandsList = document.querySelector(".brands__place-list")
const brandsItem = document.querySelectorAll(".brands__place-item")
let currentBrands = 0;
const brands = Math.ceil(brandsItem.length / 2);

if (windowW <= 1280) {
  brandsList.style.transform = `translateX(${(-currentBrands * 768) + (windowW - (768)) / 2}px)`
}

if (windowW <= 700) {
  brandsList.style.transform = `translateX(${(-currentBrands * 440) + (windowW - (440)) / 2}px)`
}
if (windowW <= 400) {
  brandsList.style.transform = `translateX(${(-currentBrands * 320) + (windowW - (320)) / 2}px)`
}

brandsButtonLeft.addEventListener("click", () => {
  currentBrands = (currentBrands - 1 + brands) % brands;
  brandsItem.forEach((el) => {
    console.log(currentBrands)
    el.style.transform = `translateX(${(-currentBrands * (brandsItem[0].clientWidth + 40))}px)`;
  })
})
brandsButtonRight.addEventListener("click", () => {
  currentBrands = (currentBrands + 1) % brands;
  brandsItem.forEach((el) => {
    console.log(currentBrands)
    el.style.transform = `translateX(${(-currentBrands * (brandsItem[0].clientWidth + 40))}px)`;
  })
})

brandsList.style.gridTemplateColumns = `repeat(${brands}, auto)`