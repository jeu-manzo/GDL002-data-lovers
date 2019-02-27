//let menu = document.getElementsByClassName("header");
let sectionTwo = document.getElementById("entendiendo-violencia");
let sectionFlags = document.getElementById("section-flags");
let sectionIndicator = document.getElementById("section-indicator");
let sectionCountry = document.getElementById('section-country');
let sectionIndicatorCountry = document.getElementById('indicator-country');

function display (elements, display = 'inline-block') {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}

display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry, sectionIndicatorCountry], "none");


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
let codeCountry = "";

document.getElementById("mexico").addEventListener("click", buttonFlagMexico);
function buttonFlagMexico() {
  display([sectionTwo, sectionFlags, sectionIndicator], "none");
  display([sectionCountry]);
  country = document.getElementById("mexico").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  addIndicatorNames(result, countryNameElement)
  document.getElementById('title-country').innerHTML = 'Mexico';
}

document.getElementById("peru").addEventListener("click", buttonFlagPeru);
function buttonFlagPeru() {
  display([sectionTwo, sectionFlags, sectionIndicator], "none");
  display([sectionCountry]);
  country = document.getElementById("peru").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  addIndicatorNames(result, countryNameElement)
  document.getElementById('title-country').innerHTML = 'Perú';
}

document.getElementById("chile").addEventListener("click", buttonFlagChile);
function buttonFlagChile() {
  display([sectionTwo, sectionFlags, sectionIndicator], "none");
  display([sectionCountry]);
  country = document.getElementById("chile").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  addIndicatorNames(result, countryNameElement)
  document.getElementById('title-country').innerHTML = 'Chile';
  codeCountry = event.toElement.dataset.country;
}

document.getElementById("brasil").addEventListener("click", buttonFlagBrasil);
function buttonFlagBrasil() {
  display([sectionTwo, sectionFlags, sectionIndicator], "none");
  display([sectionCountry]);
  country = document.getElementById("brasil").dataset.country
  let result = filterCountry(country);
  const countryNameElement = document.getElementById('country-name');
  addIndicatorNames(result, countryNameElement);
  document.getElementById('title-country').innerHTML = 'Brasil';
  console.log(event.toElement.dataset.country)
}

//función para crear tabla de años y sus porcentajes por país
function createTableYears(years) {
        // get the reference for the body
  const mybody = document.getElementById("indicator-table-country");

  // creates <table> and <tbody> elements
  table     = document.createElement("table");
  tablebody = document.createElement("tbody");

  const header = document.createElement("tr");

  const cellYears = document.createElement("th");
  const cellPercent = document.createElement("th");

  header.appendChild(cellYears);
  header.appendChild(cellPercent);

  table.appendChild(header);

  // creating all cells
  for(var j = 0; j < Object.keys(years).length; j++) {
    var year = Object.keys(years)[j];
    var percent = Object.values(years)[j];
    // creates a <tr> element
      mycurrent_row = document.createElement("tr");
          // creates a <td> element's
          year_cell = document.createElement("td");
          percent_cell = document.createElement("td");
          // creates a Text Node
    if (percent == "") { currenttext2 = document.createTextNode("no info.");
      } else {
        currenttext2 = document.createTextNode(percent);
      }
          currenttext = document.createTextNode(year);
          // appends the Text Node we created into the cell <td>
          year_cell.appendChild(currenttext);
          percent_cell.appendChild(currenttext2);

          // appends the cell <td> into the row <tr>
          mycurrent_row.appendChild(year_cell);
          mycurrent_row.appendChild(percent_cell);

      // appends the row <tr> into <tbody>
      tablebody.appendChild(mycurrent_row);
  }


          titleYears = document.createTextNode("Años");
          titlePercents = document.createTextNode("Porcentaje %");

          cellYears.appendChild(titleYears);
          cellPercent.appendChild(titlePercents);


  // appends <tbody> into <table>
  table.appendChild(tablebody);
  // appends <table> into <body>
  mybody.appendChild(table);
  // sets the border attribute of mytable to 2;
  table.setAttribute("border","2");
}
