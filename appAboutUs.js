const sliderLine = document.querySelector(".slider-line");
// const sliderLineText = document.querySelector(".slider-line-text");

const nextButton = document.querySelector(".button-next");
const prevButton = document.querySelector(".button-prev");
const dots = document.querySelectorAll(".dot");
// const links = document.querySelectorAll(".link");

let position = 0;
let positionText = 0;
let dotIndex = 0;
let linkIndex = dotIndex;

const nextSlide = () => {
  if (position < (11 - 1) * 398) {
    position += 398;
  } else {
    position = 0;
  }
  sliderLine.style.left = -position + "px";
};

const nextSlideText = () => {
  if (positionText < 880) {
    positionText += 440;
    dotIndex++;
    linkIndex++;
  } else {
    positionText = 0;
    dotIndex = 0;
    linkIndex = 0;
  }
  sliderLineText.style.left = -positionText + "px";
  thisSlide(dotIndex);
  thisLink(linkIndex);
};

const prevSlide = () => {
  if (position > 0) {
    position -= 398;
  } else {
    position = (11 - 1) * 398;
  }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
  thisLink(linkIndex);
};

const prevSlideText = () => {
  if (positionText > 0) {
    positionText -= 440;
    dotIndex--;
    linkIndex--;
  } else {
    positionText = 880;
    dotIndex = dots.length - 1;
    linkIndex = links.length - 1;
  }
  sliderLineText.style.left = -positionText + "px";
  thisSlide(dotIndex);
  thisLink(linkIndex);
};

const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("active-dot");
  }
  dots[index].classList.add("active-dot");
};

const thisLink = (index) => {
  for (let link of links) {
    link.classList.remove("active-link");
  }
  links[index].classList.add("active-link");
};

nextButton.addEventListener("click", nextSlide);
nextButton.addEventListener("click", nextSlideText);

prevButton.addEventListener("click", prevSlide);
prevButton.addEventListener("click", prevSlideText);

// слайдер для страницы О нас, версия tablet
const sliderLineTablet = document.querySelector(".slider-line-tablet");

const nextButtonTablet = document.querySelector(".button-next-tablet");
const prevButtonTablet = document.querySelector(".button-prev-tablet");
const dotsTablet = document.querySelectorAll(".dot-tablet");

let positionTablet = 0;
let positionTextTablet = 0;
let dotIndexTablet = 0;
let linkIndexTablet = dotIndexTablet;

const nextSlideTablet = () => {
  if (position < (11 - 1) * 229) {
    position += 229;
  } else {
    position = 0;
  }
  sliderLineTablet.style.left = -position + "px";
};

const nextSlideTextTablet = () => {
  if (positionTextTablet < 880) {
    positionTextTablet += 440;
    dotIndexTablet++;
    linkIndexTablet++;
  } else {
    positionTextTablet = 0;
    dotIndexTablet = 0;
    linkIndexTablet = 0;
  }
  sliderLineTextTablet.style.left = -positionText + "px";
  thisSlide(dotIndexTablet);
  thisLink(linkIndexTablet);
};

const prevSlideTablet = () => {
  if (position > 0) {
    position -= 229;
  } else {
    position = (11 - 1) * 229;
  }
  sliderLineTablet.style.left = -position + "px";
  thisSlide(dotIndexTablet);
  thisLink(linkIndexTablet);
};

const prevSlideTextTablet = () => {
  if (positionText > 0) {
    positionText -= 440;
    dotIndexTablet--;
    linkIndexTablet--;
  } else {
    positionTextTablet = 880;
    dotIndexTablet = dotsTablet.length - 1;
    linkIndexTablet = links.length - 1;
  }
  sliderLineText.style.left = -positionText + "px";
  thisSlide(dotIndex);
  thisLink(linkIndex);
};

const thisSlideTablet = (index) => {
  for (let dotTablet of dotsTablet) {
    dotTablet.classList.remove("active-dot");
  }
  dotsTablet[index].classList.add("active-dot");
};

// const thisLink = (index) => {
//   for (let link of links) {
//     link.classList.remove("active-link");
//   }
//   links[index].classList.add("active-link");
// };

nextButtonTablet.addEventListener("click", nextSlideTablet);
nextButtonTablet.addEventListener("click", nextSlideTextTablet);

prevButtonTablet.addEventListener("click", prevSlideTablet);
prevButtonTablet.addEventListener("click", prevSlideTextTablet);
/*Закрытие формы по клику на фон*/
document.addEventListener('click', (e) => {
  const click1 = e.composedPath().includes(applicationForm);
  const click3 = e.composedPath().includes(showButtonHeader);
  const click4 = e.composedPath().includes(falseButton);
  const click5 = e.composedPath().includes(popUp);
  const click6 = e.composedPath().includes(actualCity);
  const click7 = e.composedPath().includes(headerCity);
  const click8 = e.composedPath().includes(showExpand);

  if ( !click1 && !click3 && !click4 && !click5 && !click6 && !click7 && !click8) {
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


const popUp = document.querySelector(".popUp");

/*Главная форма "Оставить заявку" на главной странице*/
const body = document.querySelector("body");
const showButtonHeader = document.querySelector(".header-nav__button");
const applicationForm = document.querySelector(".application-form")
const closeButton = document.querySelector(".application-close");
const header = document.querySelector("#header-section");

const applicationClose = document.querySelector(".application-close");

showButtonHeader.addEventListener("click", showForm);
applicationClose.addEventListener("click", hiddenForm);

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
const dropDownSelectCityMainBurger = document.querySelector(".dropDown-main-selectCity");
const applicationButtonBurger = document.querySelector(".application-button-burger");
const applicationCheckboxBurger = document.querySelector(".application-checkboxBurger");

dropDownOpenMainBurger.addEventListener("click",openDropDownBurger)

function openDropDownBurger() {
  applicationButtonBurger.style.display = "none";
  applicationCheckboxBurger.style.display = "none";
  dropDownOpenMainBurger.style.display = "none";
  dropDownCloseMainBurger.style.display = "block";
  dropDownListMainBurger.style.display = "block";
  //dropDownSelectCityMain.style.border = "none";
}

dropDownCloseMainBurger.addEventListener("click",closeDropDownBurger)

function closeDropDownBurger() {
  applicationButtonBurger.style.display = "block";
  applicationCheckboxBurger.style.display = "block";
  dropDownCloseMainBurger.style.display = "none";
  dropDownOpenMainBurger.style.display = "block";
  dropDownListMainBurger.style.display = "none";
  //dropDownSelectCityMain.style.border = "1px solid #CBCCCE";
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


/*Переход по ссылкам-якорям из формы*/
let menuBurgerItems = document.querySelector('.menu-burger__items');
menuBurgerItems.addEventListener('click', closeBurgerMenu);
