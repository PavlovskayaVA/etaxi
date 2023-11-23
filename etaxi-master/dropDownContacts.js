
/*Показать/скрыть dropDown в Контактах*/

const dropDownOpenContacts = document.querySelector(".dropDown-contacts-img-down");
const dropDownCloseContacts = document.querySelector(".dropDown-contacts-img-up");
const dropDownListContacts = document.querySelector(".dropDown-contacts-list");

dropDownOpenContacts.addEventListener("click",openDropDown)

function openDropDown() {
  dropDownOpenContacts.style.display = "none";
  dropDownCloseContacts.style.display = "block";
  dropDownListContacts.style.display = "block";
}

dropDownCloseContacts.addEventListener("click",closeDropDown)

function closeDropDown() {
  dropDownCloseContacts.style.display = "none";
  dropDownOpenContacts.style.display = "block";
  dropDownListContacts.style.display = "none";
}

/*Извлечение города в dropDown*/
const dropDownCityContacts = document.querySelector(".dropDown-contacts-city");
dropDownListContacts.addEventListener("click", (e) => {
    let content3 = e.target.innerHTML;
    dropDownCityContacts.innerHTML = content3;
    dropDownCloseContacts.style.display = "none";
    dropDownOpenContacts.style.display = "block";
    dropDownListContacts.style.display = "none";
  });