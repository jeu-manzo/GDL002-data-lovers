//let menu = document.getElementsByClassName("header");
let sectionTwo = document.getElementById("entendiendo-violencia");
let sectionFlags = document.getElementById("section-flags");
let sectionIndicator = document.getElementById("section-indicator");
let sectionPeru = document.getElementById("country-per");
let sectionMex = document.getElementById("country-mex");

function display (elements, display = 'inline-block') {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}

display([sectionTwo, sectionFlags, sectionIndicator,sectionPeru,sectionMex], "none");


document.getElementById("btn-data").addEventListener("click", buttonData);
function buttonData() {
  display([sectionPeru,sectionFlags,sectionIndicator,sectionMex], "none");
  display([sectionTwo]);
}

document.getElementById("btn-country").addEventListener("click", buttonCountry);
function buttonCountry() {
  display([sectionTwo,sectionPeru,sectionMex], "none");
  display([sectionFlags]);
}

document.getElementById("peru").addEventListener("click", buttonCountryPeru);
function buttonCountryPeru() {
  display([sectionTwo,sectionFlags], "none");
  display([sectionPeru]);
}

document.getElementById("mexico").addEventListener("click", buttonCountryMex);
function buttonCountryMex() {
  display([sectionTwo,sectionFlags,sectionPeru], "none");
  display([sectionMex]);
}

document.getElementById("btn-indicator").addEventListener("click", buttonIndicator);
function buttonIndicator() {
  display([sectionTwo, sectionFlags,sectionPeru], "none");
  display([sectionIndicator]);
}
