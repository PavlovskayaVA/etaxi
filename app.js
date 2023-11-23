/*Закрытие формы по клику на фон*/
document.addEventListener('click', (e) => {
  const click1 = e.composedPath().includes(applicationForm);
  const click2 = e.composedPath().includes(showButtonMain);
  const click3 = e.composedPath().includes(showButtonHeader);
  const click4 = e.composedPath().includes(falseButton);
  const click5 = e.composedPath().includes(popUp);

  if ( !click1 && !click2 && !click3 && !click4 && !click5) {
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
    popUp.style.display = "none";
    yourCity.innerHTML = popUpCity.value;

    if (headerCity.innerHTML === '') {
      headerCity.innerHTML = 'Иркутск';
      yourCity.innerHTML = 'Иркутск';
    }
  }
})

const popUp = document.querySelector(".popUp");

/*Главная форма "Оставить заявку" на главной странице*/
const body = document.querySelector("body");
const showButtonHeader = document.querySelector(".header-nav__button");
const showButtonMain = document.querySelector(".main__button");
const showButtonBurger = document.querySelector('.burger-nav__button');
const applicationForm = document.querySelector(".application-form")
const closeButton = document.querySelector(".application-close");
const header = document.querySelector("#header-section");

showButtonBurger.addEventListener("click", showFormBurger)
showButtonHeader.addEventListener("click", showForm)
showButtonMain.addEventListener("click", showForm)


function showFormBurger() {
  closeBurgerMenu();
}

function showForm() {
  body.style.overflow =  'hidden'; // заперт фоновой прокрутки
  header.style.backgroundColor =  'rgb(245,245,245)';
  body.style.backgroundColor =  'rgba(0, 0, 0, 0.05)';
  applicationForm.style.display = "flex";
}

closeButton.addEventListener("click", hiddenForm)

function hiddenForm() {
  body.style.overflow =  'auto';
  header.style.backgroundColor =  '#FFF';
  body.style.backgroundColor =  '#FFF';
  applicationForm.style.display = "none";
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
  dropDownSelectCityMain.style.border = "1px solid #FDB913";
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
  body.style.overflow =  'hidden';
  body.style.backgroundColor = 'red';
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
  headerCity.innerHTML = popUpCity.value;
  yourCity.innerHTML = popUpCity.value;
}

/*Извлечение города в popUp*/
const headerCity = document.querySelector('.header-city')
const popUpCity = document.querySelector('.popUp-city')
const popUpList = document.querySelector('.popUp-list').addEventListener('click', e => {
let content2 = e.target.innerHTML;
popUpCity.value = content2;
});


/*Скрытие кнопки*/
/*
const activeVideo = document.querySelector(".active-video");
const btnPlay = document.querySelector(".btn-play");

activeVideo.addEventListener("click", toggleStateVideo)

function toggleStateVideo() {
  btnPlay.style.display = btnPlay.style.display === 'none' ? 'block' : 'none';
}
*/

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
const headerGeo = document.querySelector('.header-geo');
const mainSection = document.querySelector('#main-section');
const footer = document.querySelector('.footer');


const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');

const burgerList= document.querySelector('.menu-burger__list');
const burgerItems= document.querySelector('.menu-burger__items');
const callBurger= document.querySelector('.call-burger');
const numberBurger= document.querySelector('.number-burger');
//showButtonHeader;


burgerOpen.addEventListener("click",openBurgerMenu)

function openBurgerMenu() {
  burgerOpen.style.display = 'none';
  burgerClose.style.display = 'block';
  
  burgerList.style.display = 'block';

  showButtonBurger.style.display = 'block';
  burgerItems.style.display = 'block';
  callBurger.style.display = 'block';
  numberBurger.style.display = 'block';
  //showButtonHeader.style.display = 'block';


  headerLogo.style.display = 'none';
  burgerOpen.style.display = 'none';
  headerGeo.style.display = 'none';
  showCity.style.display = 'none';
  showExpand.style.display = 'none';
  mainSection.style.display = 'none';
  footer.style.display = 'none';

}

burgerClose.addEventListener("click",closeBurgerMenu)

function closeBurgerMenu() {
  burgerOpen.style.display = 'block';
  burgerClose.style.display = 'none';

  showButtonBurger.style.display = 'none';
  burgerItems.style.display = 'none';
  callBurger.style.display = 'none';
  numberBurger.style.display = 'none';
  //showButtonHeader.style.display = 'none';

  headerLogo.style.display = 'block';
  burgerOpen.style.display = 'block';
  headerGeo.style.display = 'block';
  showCity.style.display = 'block';
  showExpand.style.display = 'block';
  mainSection.style.display = 'block';
  footer.style.display = 'block';
}
