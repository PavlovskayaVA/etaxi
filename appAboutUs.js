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
  if (position < (dots.length - 1) * 398) {
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
    position = (dots.length - 1) * 398;
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

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     position = 680 * index;
//     positionText = 440 * index;
//     sliderLine.style.left = -position + "px";
//     sliderLineText.style.left = -positionText + "px";
//     dotIndex = index;
//     thisSlide(dotIndex);
//     thisLink(index);
//   });
// });

// links.forEach((link, index) => {
//   link.addEventListener("click", () => {
//     position = 680 * index;
//     positionText = 440 * index;
//     sliderLine.style.left = -position + "px";
//     sliderLineText.style.left = -positionText + "px";
//     linkIndex = index;
//     thisLink(linkIndex);
//     thisSlide(index);
//   });
// });

/*Закрытие формы по клику на фон*/
document.addEventListener('click', (e) => {
  const click1 = e.composedPath().includes(applicationForm);
  const click3 = e.composedPath().includes(showButtonHeader);
  const click4 = e.composedPath().includes(falseButton);
  const click5 = e.composedPath().includes(popUp);

  if ( !click1 && !click3 && !click4 && !click5) {
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
const applicationForm = document.querySelector(".application-form")
const closeButton = document.querySelector(".application-close");
const header = document.querySelector("#header-section");

showButtonHeader.addEventListener("click", showForm)

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
