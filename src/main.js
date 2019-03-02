//let menu = document.getElementsByClassName("header");
let sectionTwo = document.getElementById("entendiendo-violencia");
let sectionFlags = document.getElementById("section-flags");
let sectionIndicator = document.getElementById("section-indicator");
let sectionCountry = document.getElementById('section-country');
let sectionIndicatorCountry = document.getElementById('indicator-country');
const sectionCategories = document.getElementById('categories');
const sectionIndicatorCountries = document.getElementById('indicator-countries');

const indicatorsPerceptionCult = [
  { indicatorCode: "SG.VAW.REFU.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)" },
  { indicatorCode: "SG.VAW.REAS.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)" },
  { indicatorCode: "SG.VAW.NEGL.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)" },
  { indicatorCode: "SG.VAW.GOES.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando sale sin avisarle (%)" },
  { indicatorCode: "SG.VAW.BURN.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando a ella se le quema la comida (%)" },
  { indicatorCode: "SG.VAW.ARGU.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella discute con él (%)" },
  { indicatorCode: "SP.M18.2024.FE.ZS",
  indicatorName: "Mujeres que se casaron por primera vez antes de los 18 (% de mujeres 10-24)" },
];

const indicatorsLiteracy = [
  { indicatorCode: 'SE.TER.CUAT.MS.FE.ZS',
   indicatorName: 'Nivel de instrucción, al menos nivel de maestría o equivalente, población de más de 25 años, mujeres (%) (acumulativo)' },
  { indicatorCode: 'SE.TER.CUAT.DO.FE.ZS',
  indicatorName: 'Nivel de instrucción, al menos nivel de doctorado o equivalente, población de más de 25 años, mujeres (%) (acumulativo)' },
  { indicatorCode: 'SE.SEC.CUAT.PO.FE.ZS',
  indicatorName: 'Nivel de instrucción, al menos escuela de nivel posterior a la secundaria completa, población de más de 25 años, mujeres (%) (acumulativo)' },
  { indicatorCode: 'SE.PRM.CUAT.FE.ZS',
  indicatorName: 'Nivel de instrucción, al menos escuela primaria completa, población de más de 25 años, mujeres (%) (acumulativo)' },
  { indicatorCode: 'SE.ADT.LITR.FE.ZS',
  indicatorName: 'Tasa de alfabetización, mujeres adultas (% de mujeres de 15 años o más)' },
];

const indicatorUnemployment = [
  { indicatorCode: "SL.UEM.INTM.FE.ZS",
    indicatorName: "Personas desempleadas con educación intermedia, mujeres"},
  { indicatorCode:  "SL.UEM.BASC.FE.ZS",
    indicatorName: "Personas desempleadas con educación básica, mujeres"},
  { indicatorCode: "SL.UEM.ADVN.FE.ZS",
    indicatorName: "Personas desempleadas con educación avanzada, mujeres"},
  { indicatorCode: "SL.UEM.NEET.FE.ZS",
    indicatorName: "Proporción de jóvenes sin educación, empleo ni capacitación, mujeres (% de la población de mujeres jóvenes)"},
];

function display (elements, display = 'inline-block') {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}

display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry, sectionIndicatorCountry, sectionCategories, sectionIndicatorCountries], "none");


document.getElementById("btn-data").addEventListener("click", buttonData);
function buttonData() {
  display([sectionTwo]);
}


document.getElementById("btn-country").addEventListener("click", buttonCountry);
function buttonCountry() {
  display([sectionTwo, sectionCategories], "none");
  display([sectionFlags]);
}

document.getElementById("btn-indicator").addEventListener("click", buttonIndicator);
function buttonIndicator() {
  display([sectionTwo, sectionFlags, sectionCategories], "none");
  display([sectionIndicator]);
}

let country = "";

document.getElementById("mexico").addEventListener("click", buttonFlagMexico);
function buttonFlagMexico() {
  display([sectionTwo, sectionFlags, sectionIndicator,sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("mexico").dataset.country;
  let result = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
  console.log(result.map(x => x.indicatorName));
  const countryNameElement = document.getElementById('country-name');
  const log = window.dataLovers.showIndicatorNamesCountry(result, countryNameElement);
  console.log(typeof(log));
  document.getElementById('title-country').innerHTML = 'Mexico';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("peru").addEventListener("click", buttonFlagPeru);
function buttonFlagPeru() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("peru").dataset.country;
  let result = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
  const countryNameElement = document.getElementById('country-name');
  window.dataLovers.showIndicatorNamesCountry(result, countryNameElement);
  document.getElementById('title-country').innerHTML = 'Perú';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("chile").addEventListener("click", buttonFlagChile);
function buttonFlagChile() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("chile").dataset.country;
  let result = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
  const countryNameElement = document.getElementById('country-name');
  window.dataLovers.showIndicatorNamesCountry(result, countryNameElement);
  document.getElementById('title-country').innerHTML = 'Chile';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("brasil").addEventListener("click", buttonFlagBrasil);
function buttonFlagBrasil() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("brasil").dataset.country;
  let result = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
  const countryNameElement = document.getElementById('country-name');
  window.dataLovers.showIndicatorNamesCountry(result, countryNameElement);
  document.getElementById('title-country').innerHTML = 'Brasil';
  getElementsforEvents('one-indicator', linkIndicator);
}

function linkIndicator() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionIndicatorCountry]);
  //agregar títutlo
  //console.log(event);
  document.getElementById('title-indicator').innerHTML = event.target.innerText;
    //obtener años por indicador por país
  const codeIndicator = event.srcElement.dataset.code;
  const countryIndicator = event.srcElement.dataset.country;
  const objData = window.dataLovers.filterIndicatorYear(codeIndicator, countryIndicator, indicatorsPerceptionCult);
  createTableYears(objData);
}

//función para crear tabla de años y sus porcentajes por país
function createTableYears(years) {
        // get the reference for the body
  const mybody = document.getElementById("indicator-table-country");

  // creates <table> and <tbody> elements
  const table = document.createElement("table");
  const tablebody = document.createElement("tbody");

  const header = document.createElement("tr");

  const cellYears = document.createElement("th");
  const cellPercent = document.createElement("th");

  header.appendChild(cellYears);
  header.appendChild(cellPercent);

  table.appendChild(header);

  // creating all cells
  for(var j = 0; j < Object.keys(years).length; j++) {
    var year = Object.keys(years)[j];
    var arrayPercent = Object.values(years);
    var percent = arrayPercent[j];
    // creates a <tr> element
    const mycurrent_row = document.createElement("tr");
    // creates a <td> element's
    const year_cell = document.createElement("td");
    const percent_cell = document.createElement("td");
    // creates a Text Node
    let currenttext2 = "";
    if (percent == "") { currenttext2 = document.createTextNode("no info.");
      } else {
        currenttext2 = document.createTextNode(percent);
      }
    let currenttext = document.createTextNode(year);
    // appends the Text Node we created into the cell <td>
    year_cell.appendChild(currenttext);
    percent_cell.appendChild(currenttext2);

    // appends the cell <td> into the row <tr>
    mycurrent_row.appendChild(year_cell);
    mycurrent_row.appendChild(percent_cell);

      // appends the row <tr> into <tbody>
      tablebody.appendChild(mycurrent_row);
  }

  const titleYears = document.createTextNode("Años");
  const titlePercents = document.createTextNode("Porcentaje %");

  cellYears.appendChild(titleYears);
  cellPercent.appendChild(titlePercents);

  // appends <tbody> into <table>
  table.appendChild(tablebody);
  // appends <table> into <body>
  mybody.appendChild(table);
  // sets the border attribute of mytable to 2;
  table.setAttribute("border","2");
}

//Ordenar de Menor a Mayor


document.getElementById('example').addEventListener('change', sortByAscendant);
function sortByAscendant() {
  //console.log(event);
  if (event.target[1]) {
    alert("mayor a menor");
    //console.log(orderDescendant(array))
  }else {
    alert('menor a mayor');
    //console.log(orderAscendant(array))
  }
}


document.getElementById("perception-cultural").addEventListener('click', linkPerceptionCultural);
function linkPerceptionCultural() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  window.dataLovers.showAllIndicators(indicatorsPerceptionCult, elementNode);
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

document.getElementById("literacy").addEventListener('click', linkLiteracy);
function linkLiteracy() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  window.dataLovers.showAllIndicators(indicatorsLiteracy, elementNode);
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

document.getElementById("unemployment").addEventListener('click', linkUnemployment);
function linkUnemployment() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  window.dataLovers.showAllIndicators(indicatorUnemployment, elementNode);
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

//// de data.js
let indicatorGrales = (code) => {
      const indiPer = WORLDBANK.PER.indicators.filter(indicator => indicator.indicatorCode == code);
      const indiMex = WORLDBANK.MEX.indicators.filter(indicator => indicator.indicatorCode == code);
      const indiBra = WORLDBANK.BRA.indicators.filter(indicator => indicator.indicatorCode == code);
      const indiChl = WORLDBANK.CHL.indicators.filter(indicator => indicator.indicatorCode == code);
      const indiGral = [indiBra,indiChl,indiMex,indiPer];
       return indiGral;
    };

//retorna nombre paises
const indicatorTableCountry = (code) => {
  const pruebas21=[];
  indicatorGrales(code).forEach(function(e) {
    pruebas21.push(e[0]);
  });
   let fullNames = pruebas21.map(inventor => inventor.countryName);
   return fullNames;
  };

//retorna data
const indicatorTableData = (code) => {
  const pruebas12=[];
  indicatorGrales(code).forEach(function(e) {
    pruebas12.push(e[0]);
  });
   let fullData = pruebas12.map(inventor => inventor.data);
   return fullData;
  };

//
function linkIndicatorsAllContries() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry, sectionCategories], "none");
  display([sectionIndicatorCountries]);
  // console.log(filterIndicatorCategory(event.srcElement.dataset.code));
  //console.log(event);
  const codeIndicator = event.srcElement.dataset.code;
  // filterIndicatorCategory(indicatorsLiteracy, 'SE.TER.CUAT.MS.FE.ZS');
  const contries = indicatorTableCountry(codeIndicator);
  start(contries);
  indicatorTableData(codeIndicator);
  //console.log(data);
  // console.log(filterYearAllContries("1980"));
}

function start(codigo) {
               // get the reference for the body
               const mybody = document.getElementById("table-years");


               // creates <table> and <tbody> elements
               const table = document.createElement("table");
               const tablebody = document.createElement("tbody");

              const header = document.createElement("tr");

             const cellYears = document.createElement("th");
             const cellPercent = document.createElement("th");

             header.appendChild(cellYears);
             header.appendChild(cellPercent);

             table.appendChild(header);

           //console.log(auxiliar)

               // creating all cells
               for(var j = 0; j < 4; j++) {
                let year = codigo[j];
                   //var percent = Object.values(data)[j];
                   //year = 5;
                  var percent = 2;
                 // creates a <tr> element
                  const mycurrent_row = document.createElement("tr");


                       // creates a <td> element's
                       const year_cell = document.createElement("td");
                       const percent_cell = document.createElement("td");
                       // creates a Text Node
                       let currenttext2 = "";
                 if (percent == "") { currenttext2 = document.createTextNode("no info.");
                   } else {
                     currenttext2 = document.createTextNode(percent);
                   }
                       const currenttext = document.createTextNode(year);
                       // appends the Text Node we created into the cell <td>
                       year_cell.appendChild(currenttext);
                       percent_cell.appendChild(currenttext2);

                       // appends the cell <td> into the row <tr>
                       mycurrent_row.appendChild(year_cell);
                       mycurrent_row.appendChild(percent_cell);

                   // appends the row <tr> into <tbody>
                   tablebody.appendChild(mycurrent_row);
               }


                      const years = document.createTextNode("Anos");
                      const percents = document.createTextNode("Porcentaje %");

                       cellYears.appendChild(years);
                       cellPercent.appendChild(percents);


               // appends <tbody> into <table>
               table.appendChild(tablebody);
               // appends <table> into <body>
               mybody.appendChild(table);
               // sets the border attribute of mytable to 2;
               table.setAttribute("border","2");
             }

//iterar elementos por clase para los eventos click
function getElementsforEvents(className, functionName) {
  const eachIndicator = document.getElementsByClassName(className);
  const arrayEachIndicator = Object.values(eachIndicator);
  arrayEachIndicator.forEach(function(element) {
        element.addEventListener('click', functionName);
      });
}



 // //// de data.js
 // let indicatorGrales = (code) => {
 //       indiPer = WORLDBANK.PER.indicators.filter(indicator => indicator.indicatorCode == code);
 //       indiMex = WORLDBANK.MEX.indicators.filter(indicator => indicator.indicatorCode == code);
 //        indiBra = WORLDBANK.BRA.indicators.filter(indicator => indicator.indicatorCode == code);
 //        indiChl = WORLDBANK.CHL.indicators.filter(indicator => indicator.indicatorCode == code);
 //        indiGral = [indiBra,indiChl,indiMex,indiPer];
 //        return indiGral;
 //     };
 //
 // //retorna nombre paises
 // indicatorTableCountry = (code) => {
 //   const pruebas21=[];
 //   indicatorGrales(code).forEach(function(e) {
 //     pruebas21.push(e[0]);
 //   });
 //    fullNames = pruebas21.map(inventor => inventor.countryName);
 //    return fullNames;
 //   };
 //
 // //retorna data
 // indicatorTableData = (code) => {
 //   const pruebas12=[];
 //   indicatorGrales(code).forEach(function(e) {
 //     pruebas12.push(e[0]);
 //   });
 //    fullData = pruebas12.map(inventor => inventor.data);
 //    return fullData;
 //   };
