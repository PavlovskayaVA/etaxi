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

/*Кастомный селект*/

const element = document.querySelector(".main-select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  noResultsText: "По Вашему запросу ничего не найдено",
});

/*Show-hidden mainForm*/
const showButtonHeader = document.querySelector(".header-nav__button");
const closeButton = document.querySelector(".application-close");
const applicationForm = document.querySelector(".application-form");
const body = document.querySelector("body");
const header = document.querySelector("#header-section");

showButtonHeader.addEventListener("click", showForm);

function showForm() {
  header.style.position = "relative";
  header.style.backgroundColor = "rgba(0, 0, 0, 0.01)";
  body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  applicationForm.style.display = "flex";
}

closeButton.addEventListener("click", hiddenForm);

function hiddenForm() {
  header.style.position = "sticky";
  header.style.backgroundColor = "#FFF";
  body.style.backgroundColor = "#FFF";
  applicationForm.style.display = "none";
}

/*Show-hidden cityForm*/
const showExpand = document.querySelector(".header-expandMore");
const showCity = document.querySelector(".header-city");
const actualCity = document.querySelector(".actual-city");
const trueButton = document.querySelector(".actual-city__button--yellow");
const falseButton = document.querySelector(".actual-city__button--white");

showExpand.addEventListener("click", showSlectCity);
showCity.addEventListener("click", showSlectCity);

function showSlectCity() {
  actualCity.style.display = "flex";
}

trueButton.addEventListener("click", closeSlectCity);
falseButton.addEventListener("click", closeSlectCity);
falseButton.addEventListener("click", showPopUp);

function closeSlectCity() {
  actualCity.style.display = "none";
}

/*Show-hidden popUp*/
const popUp = document.querySelector(".popUp");

function showPopUp() {
  popUp.style.display = "block";
  header.style.position = "relative";
  header.style.backgroundColor = "rgba(0, 0, 0, 0.01)";
  body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

const popUpClose = document.querySelector(".popUp-close");

popUpClose.addEventListener("click", closePopUp);

function closePopUp() {
  popUp.style.display = "none";
  header.style.position = "sticky";
  header.style.backgroundColor = "#FFF";
  body.style.backgroundColor = "#FFF";
}

/*Извлечение города в popUp*/
const popUpCity = document.querySelector(".popUp-city");
const popUpList = document
  .querySelector(".popUp-list")
  .addEventListener("click", (e) => {
    let content = e.target.innerHTML;
    popUpCity.value = content;
  });

/*Скрытие кнопки*/
/*
const activeVideoAboutUs = document.querySelector(".video-aboutUs");
const btnPlay = document.querySelector(".btn-play");

activeVideoAboutUs.addEventListener("click", toggleStateVideo)

function toggleStateVideo() {
  btnPlay.style.display = btnPlay.style.display === 'none' ? 'block' : 'none';
}
*/
