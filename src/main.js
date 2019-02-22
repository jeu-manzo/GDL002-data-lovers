//let menu = document.getElementsByClassName("header");
let sectionTwo = document.getElementById("entendiendo-violencia");
let sectionFlags = document.getElementById("section-flags");
let sectionIndicator = document.getElementById("section-indicator");
let sectionCountry = document.getElementById('section-country');

function display (elements, display = 'inline-block') {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}

display([sectionTwo, sectionFlags, sectionIndicator], "none");


document.getElementById("btn-data").addEventListener("click", buttonData);
function buttonData() {
  display([sectionTwo]);
}


document.getElementById("btn-country").addEventListener("click", buttonCountry);
function buttonCountry() {
  display([sectionTwo], "none");
  display([sectionFlags]);
}

document.getElementById("btn-indicator").addEventListener("click", buttonIndicator);
function buttonIndicator() {
  display([sectionTwo, sectionFlags], "none");
  display([sectionIndicator]);
}

let country = "";

document.getElementById("mexico").addEventListener("click", buttonFlagMexico);
function buttonFlagMexico() {
  display([sectionTwo, sectionFlags, sectionIndicator], "none");
  display([sectionCountry]);
  country = document.getElementById("mexico").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  addIndicatorNames(result, countryNameElement)
}

document.getElementById("peru").addEventListener("click", buttonFlagPeru);
function buttonFlagPeru() {
  display([sectionTwo, sectionFlags, sectionIndicator], "none");
  display([sectionCountry]);
  country = document.getElementById("peru").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  addIndicatorNames(result, countryNameElement)
}

document.getElementById("chile").addEventListener("click", buttonFlagChile);
function buttonFlagChile() {
  display([sectionTwo, sectionFlags, sectionIndicator], "none");
  display([sectionCountry]);
  country = document.getElementById("chile").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  addIndicatorNames(result, countryNameElement)
}

document.getElementById("brasil").addEventListener("click", buttonFlagBrasil);
function buttonFlagBrasil() {
  display([sectionTwo, sectionFlags, sectionIndicator], "none");
  display([sectionCountry]);
  country = document.getElementById("brasil").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  addIndicatorNames(result, countryNameElement)
}
