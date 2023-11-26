/*Закрытие формы по клику на фон*/
document.addEventListener('click', (e) => {
  const click1 = e.composedPath().includes(applicationForm);
  const click2 = e.composedPath().includes(showButtonMain);
  const click3 = e.composedPath().includes(showButtonHeader);
  const click4 = e.composedPath().includes(falseButton);
  const click5 = e.composedPath().includes(popUp);
  const click6 = e.composedPath().includes(actualCity);
  const click7 = e.composedPath().includes(headerCity);
  const click8 = e.composedPath().includes(showExpand);
  const click9 = e.composedPath().includes(catalog);
  

  if ( !click1 && !click2 && !click3 && !click4 && !click5 && !click6 && !click7 && !click8 && !click9) {
    header.style.backgroundColor =  '#FFF';
    body.style.backgroundColor =  '#FFF';
    applicationForm.style.display = 'none';
    body.style.overflow = 'auto';
    dropDownCloseMain.style.display = "none";
    dropDownOpenMain.style.display = "block";
    dropDownListMain.style.display = "none";
    applicationButton.style.display = "block";
    applicationCheckbox.style.display = "block";
    headerCity.innerHTML = popUpCity.value;
    yourCity.innerHTML = popUpCity.value;
    popUp.style.display = "none";
    actualCity.style.display = "none";

    if (headerCity.innerHTML === '') {
      headerCity.innerHTML = 'Иркутск';
      yourCity.innerHTML = 'Иркутск';
    }
  }
})

/*Открытие формы по кнопке Арендовать*/
const catalog = document.querySelector(".catalog");
const catalogButton = document.querySelectorAll(".catalog__button");
catalogButton.forEach((btnCatalog) => {
  btnCatalog.addEventListener('click',showForm)
})

const popUp = document.querySelector(".popUp");

/*Главная форма "Оставить заявку" на главной странице*/
const body = document.querySelector("body");
const showButtonHeader = document.querySelector(".header-nav__button");
const showButtonMain = document.querySelector(".main__button");
const applicationForm = document.querySelector(".application-form")
const header = document.querySelector("#header-section");
const applicationClose = document.querySelector(".application-close");


showButtonHeader.addEventListener("click", showForm);
showButtonMain.addEventListener("click", showForm);
applicationClose.addEventListener("click", hiddenForm);

function showForm() {
  body.style.overflow =  'hidden'; // заперт фоновой прокрутки
  header.style.backgroundColor =  'rgb(245,245,245)';
  body.style.backgroundColor =  'rgba(0, 0, 0, 0.05)';
  applicationForm.style.display = "flex";
}

function hiddenForm() {
  body.style.overflow =  'auto';
  header.style.backgroundColor =  '#FFF';
  body.style.backgroundColor =  '#FFF';
  applicationForm.style.display = "none";
  applicationFormBurger.style.display = "none";
}

/*Показать/скрыть dropDown в форме заявки*/
const dropDownOpenMain = document.querySelector(".dropDown-main-img-down");
const dropDownCloseMain = document.querySelector(".dropDown-main-img-up");
const dropDownListMain = document.querySelector(".dropDown-main-list");
const dropDownSelectCityMain = document.querySelector(".dropDown-main-selectCity");
const applicationButton = document.querySelector(".application-button");
const applicationCheckbox = document.querySelector(".application-checkbox");

dropDownOpenMain.addEventListener("click",openDropDown)

function openDropDown() {
  applicationButton.style.display = "none";
  applicationCheckbox.style.display = "none";
  dropDownOpenMain.style.display = "none";
  dropDownCloseMain.style.display = "block";
  dropDownListMain.style.display = "block";
  dropDownSelectCityMain.style.border = "1px solid #CBCCCE";
}

dropDownCloseMain.addEventListener("click",closeDropDown)

function closeDropDown() {
  applicationButton.style.display = "block";
  applicationCheckbox.style.display = "block";
  dropDownCloseMain.style.display = "none";
  dropDownOpenMain.style.display = "block";
  dropDownListMain.style.display = "none";
  dropDownSelectCityMain.style.border = "1px solid #CBCCCE";
}

/*Извлечение города в dropDown*/
const dropDownCityMain = document.querySelector(".dropDown-main-city");
dropDownListMain.addEventListener("click", (e) => {
    let content = e.target.innerHTML;
    dropDownCityMain.value = content;
    dropDownCloseMain.style.display = "none";
    dropDownOpenMain.style.display = "block";
    dropDownListMain.style.display = "none";
    applicationButton.style.display = "block";
    applicationCheckbox.style.display = "block";
  });

/*Показать/скрыть форму для выбора города*/
const showExpand = document.querySelector(".header-expandMore");
const showCity = document.querySelector(".header-city");
const actualCity = document.querySelector(".actual-city");
const trueButton = document.querySelector(".actual-city__button--yellow");
const falseButton = document.querySelector(".actual-city__button--white");
const yourCity = document.querySelector(".your-city");

showExpand.addEventListener("click",showSlectCity)
showCity.addEventListener("click",showSlectCity)

function showSlectCity() {
    actualCity.style.display = "flex";
}

trueButton.addEventListener("click",closeSlectCity)
falseButton.addEventListener("click",closeSlectCity)
falseButton.addEventListener("click",showPopUp)

function closeSlectCity() {
  actualCity.style.display = "none";
}

/*Показать/скрыть popUp*/
function showPopUp() {
  body.style.overflowY =  'hidden';
  popUp.style.display = "block";
  header.style.backgroundColor = 'rgb(245,245,245)';
  body.style.backgroundColor =  'rgba(0, 0, 0, 0.05)';
}

const popUpClose = document.querySelector(".popUp-close");

popUpClose.addEventListener("click",closePopUp)

function closePopUp() {
  body.style.overflow =  'auto';
  popUp.style.display = "none";
  header.style.backgroundColor =  '#FFF';
  body.style.backgroundColor =  '#FFF';

  if (popUpCity.value === '') {
    popUpCity.value = 'Иркутск';
    yourCity.innerHTML = popUpCity.value;
    headerCity.innerHTML = popUpCity.value;
  } else {
    yourCity.innerHTML = popUpCity.value;
    headerCity.innerHTML = popUpCity.value;
  }
}

/*Извлечение города в popUp*/
const headerCity = document.querySelector('.header-city')
const popUpCity = document.querySelector('.popUp-city')
const popUpList = document.querySelector('.popUp-list').addEventListener('click', e => {
let content2 = e.target.innerHTML;
popUpCity.value = content2;
closePopUp()
});

/*TextSlider*/
const gap = 16;

const carousel = document.getElementById("carousel"),
      content = document.getElementById("review-text__slider-container"),
      next = document.getElementById("next-button"),
      prev = document.getElementById("prev-button");

  next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);

  });
  prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);

  });

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


/*burger-menu*/
const headerLogo = document.querySelector('.header-logo');
const headerDescription = document.querySelector('.header-description');
const headerSection = document.querySelector('#header-section');
const mainSection = document.querySelector('#main-section');
const footer = document.querySelector('.footer');

const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');
const burgerList= document.querySelector('.menu-burger__list');

burgerOpen.addEventListener("click",openBurgerMenu)
burgerClose.addEventListener("click",closeBurgerMenu)

function openBurgerMenu() {
  burgerOpen.style.display = 'none';
  burgerClose.style.display = 'block';
  burgerList.style.display = 'block';

  headerLogo.style.display = 'none';
  headerDescription.style.display = 'none';
  headerSection.style.borderBottom = "none";
  mainSection.style.display = 'none';
  footer.style.display = 'none';
}

function closeBurgerMenu() {
  burgerOpen.style.display = 'block';
  burgerClose.style.display = 'none';
  burgerList.style.display = 'none';

  headerLogo.style.display = 'block';
  headerDescription.style.display = 'block';
  headerSection.style.borderBottom = "1px solid #CBCCCE";
  mainSection.style.display = 'block';
  footer.style.display = 'block';
}

const showButtonBurger = document.querySelector(".burger-nav__button");
const applicationFormBurger = document.querySelector('.application-formBurger');

showButtonBurger.addEventListener("click", showFormBurger)

function showFormBurger() {
  burgerOpen.style.display = 'none';
  burgerClose.style.display = 'none';
  burgerList.style.display = 'none';
  applicationFormBurger.style.display = 'flex';
}

const applicationCloseBurger = document.querySelector(".application-closeBurger");

applicationCloseBurger.addEventListener("click", hiddenForm)
applicationCloseBurger.addEventListener("click", closeBurgerMenu)

const dropDownOpenMainBurger = document.querySelector(".dropDown-main-img-downBurger");
const dropDownCloseMainBurger = document.querySelector(".dropDown-main-img-upBurger");
const dropDownListMainBurger = document.querySelector(".dropDown-main-listBurger");
const applicationButtonBurger = document.querySelector(".application-button-burger");
const applicationCheckboxBurger = document.querySelector(".application-checkboxBurger");

dropDownOpenMainBurger.addEventListener("click",openDropDownBurger)

function openDropDownBurger() {
  applicationButtonBurger.style.display = "none";
  applicationCheckboxBurger.style.display = "none";
  dropDownOpenMainBurger.style.display = "none";
  dropDownCloseMainBurger.style.display = "block";
  dropDownListMainBurger.style.display = "block";
}

dropDownCloseMainBurger.addEventListener("click",closeDropDownBurger)

function closeDropDownBurger() {
  applicationButtonBurger.style.display = "block";
  applicationCheckboxBurger.style.display = "block";
  dropDownCloseMainBurger.style.display = "none";
  dropDownOpenMainBurger.style.display = "block";
  dropDownListMainBurger.style.display = "none";
}

/*Извлечение города в dropDown Burger*/
const dropDownCityMainBurger = document.querySelector(".dropDown-main-cityBurger");
dropDownListMainBurger.addEventListener("click", (e) => {
    let content5 = e.target.innerHTML;
    dropDownCityMainBurger.value = content5;
    dropDownCloseMainBurger.style.display = "none";
    dropDownOpenMainBurger.style.display = "block";
    dropDownListMainBurger.style.display = "none";
    applicationButtonBurger.style.display = "block";
    applicationCheckboxBurger.style.display = "block";
  });


/**Slider Advantages*/
const images = document.querySelectorAll('.advantages__items');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);

/*Slider Catalog*/
const imagesCatalog = document.querySelectorAll('.catalog__item');
const controllsCatalog = document.querySelectorAll('.catalog-controlls');
let imageIndexCatalog = 0;

function showCatalog(indexCatalog) {
    imagesCatalog[imageIndexCatalog].classList.remove('active-catalog');
    imagesCatalog[indexCatalog].classList.add('active-catalog');
    imageIndexCatalog = indexCatalog;
}

controllsCatalog.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev-catalog')) {
            let indexCatalog = imageIndexCatalog - 1;

            if (indexCatalog < 0) {
                indexCatalog = imagesCatalog.length - 1;
            }

            showCatalog(indexCatalog);
        } else if (event.target.classList.contains('next-catalog')) {
            let indexCatalog = imageIndexCatalog + 1;
            if (indexCatalog >= imagesCatalog.length) {
                indexCatalog = 0;
            }
            showCatalog(indexCatalog);
        }
    })
})

showCatalog(imageIndexCatalog);

/*Воспроизведение видео по клику*/
let videoActive = document.querySelectorAll('.video-item')
let videoStop = document.querySelector('.gallery-controls')

videoActive.forEach ((activeVideo) => {
  activeVideo.addEventListener('click', playVideo)

  function playVideo(){
    activeVideo.removeEventListener('click',playVideo);
    activeVideo.addEventListener('click',pauseVideo);
    activeVideo.play();
}

  function pauseVideo(){
    activeVideo.removeEventListener('click',pauseVideo);
    activeVideo.addEventListener('click',playVideo);
    activeVideo.pause();
  }

  videoStop.addEventListener('click', stopVideo)

  function stopVideo(){
    activeVideo.pause();
  }

})

