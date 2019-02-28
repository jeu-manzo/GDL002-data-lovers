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
]

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

function filterCountry(country) {
  const dataCountry = WORLDBANK[country]

  const indicatorsCountry = dataCountry.indicators.filter(function (indicator) {
    const indicatorCode = indicator.indicatorCode
    const indicatorCodePerception = indicatorsPerceptionCult.map(ind => ind.indicatorCode);
    const isIn = indicatorCodePerception.findIndex(function (val) {
      return val === indicatorCode
    })

    return isIn !== -1
  })
  return indicatorsCountry
}


function showIndicatorNames(indicators, parentElement) {
  indicators.forEach(function(element) {
    const indicatorValue = element;
    const newP = document.createElement("p");
    const link = document.createElement("a");
    const newPID = newP.setAttribute("class", "one-indicator")
    const newPSetCode = link.setAttribute("data-code", indicatorValue.indicatorCode)
    const newPSetCountry = link.setAttribute("data-country", indicatorValue.countryCode)
    link.href = '#'
    const content = document.createTextNode(indicatorValue.indicatorName);
    newP.appendChild(link);
    link.appendChild(content);
    parentElement.parentNode.insertBefore(newP, parentElement.nextSibling);
  });

}


function filterIndicatorYear(code, country) {
  const countryInd = filterCountry(country)
  const dataYear = countryInd.filter(indicator => indicator.indicatorCode == code)

  return dataYear[0].data

}


//Mostrar en pantalla Indicadores por categoria
function showAllIndicators(category, parentElement) {
  category.forEach(function(element) {
    const indicatorValue = element;
    const newP = document.createElement("p");
    const link = document.createElement("a");
    const newPClass = link.setAttribute("class", "each-indicator")
    newPSetCode = link.setAttribute("data-code", indicatorValue.indicatorCode)
    // const newPSetCountry = link.setAttribute("data-country", indicatorValue.countryCode)
    link.href = '#'
    const content = document.createTextNode(indicatorValue.indicatorName);
    newP.appendChild(link);
    link.appendChild(content);
    parentElement.parentNode.insertBefore(newP, parentElement.nextSibling);

  });

}


//Filtrar información de cada indicadores por categoría de todos los países
function filterIndicatorCategory(categories) {
  const dataCountry = WORLDBANK;
  const arrayData = Object.values(dataCountry);
  arrayData.forEach(function(element) {
    const indicatorCountry = element.indicators
    const filterIndicator = indicatorCountry.filter(function (indicator) {
      const indicatorCode = indicator.indicatorCode
      console.log(indicatorCode);
      const indicatorsCode = categories.map(ind => ind.indicatorCode);
      const isIn = indicatorsCode.findIndex(function (val) {
        return val === indicatorCode
      })

      return isIn !== -1
    })
    console.log(filterIndicator);
  });
}
