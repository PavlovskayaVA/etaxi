/*Кастомный селект*/
const element = document.querySelector(".main-select");
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    noResultsText: 'По Вашему запросу ничего не найдено',
})

/*Show-hidden mainForm*/
const showButtonHeader = document.querySelector(".header-nav__button");
const closeButton = document.querySelector(".application-close");
const applicationForm = document.querySelector(".application-form");
const body = document.querySelector("body");
const header = document.querySelector("#header-section");

showButtonHeader.addEventListener("click", showForm)

function showForm() {
  header.style.position = "relative";
  header.style.backgroundColor =  'rgba(0, 0, 0, 0.01)';
  body.style.backgroundColor =  'rgba(0, 0, 0, 0.1)';
  applicationForm.style.display = "flex";
}

closeButton.addEventListener("click", hiddenForm)

function hiddenForm() {
  header.style.position = "sticky";
  header.style.backgroundColor =  '#FFF';
  body.style.backgroundColor =  '#FFF';
  applicationForm.style.display = "none";
}


/*Show-hidden cityForm*/
const showExpand = document.querySelector(".header-expandMore");
const showCity = document.querySelector(".header-city");
const actualCity = document.querySelector(".actual-city");
const trueButton = document.querySelector(".actual-city__button--yellow");
const falseButton = document.querySelector(".actual-city__button--white");

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

const showExpandAbout = document.querySelector(".header-cityAbout");
const showCityAbout = document.querySelector(".header-expandMoreAbout");

showExpandAbout.addEventListener("click",showPopUp)
showCityAbout.addEventListener("click",showPopUp)

/*Show-hidden popUp*/
const popUp = document.querySelector(".popUp");

function showPopUp() {
  popUp.style.display = "block";
  header.style.position = "relative";
  header.style.backgroundColor =  'rgba(0, 0, 0, 0.01)';
  body.style.backgroundColor =  'rgba(0, 0, 0, 0.1)';
}

const popUpClose = document.querySelector(".popUp-close");

popUpClose.addEventListener("click",closePopUp)

function closePopUp() {
  popUp.style.display = "none";
  header.style.position = "sticky";
  header.style.backgroundColor =  '#FFF';
  body.style.backgroundColor =  '#FFF';
}


/*Извлечение города в popUp*/
const popUpCity = document.querySelector('.popUp-city')
const popUpList = document.querySelector('.popUp-list').addEventListener('click', e => {
let content = e.target.innerHTML;
popUpCity.value = content;
});

