const indicatorsPerceptionCult = [
  "SG.VAW.REFU.ZS",
  "SG.VAW.REAS.ZS",
  "SG.VAW.NEGL.ZS",
  "SG.VAW.GOES.ZS",
  "SG.VAW.BURN.ZS",
  "SG.VAW.ARGU.ZS",
  "SP.M18.2024.FE.ZS"
]

function filterCountry (country) {
  const dataCountry = WORLDBANK[country]

  const indicatorsCountry = dataCountry.indicators.filter(function (indicator) {
    const indicatorCode = indicator.indicatorCode
    //console.log(indicator.data);
    //const data = indicator.data

    const isIn = indicatorsPerceptionCult.findIndex(function (val) {
      return val === indicatorCode
    })

    return isIn !== -1
  })
  //console.log(indicatorsCountry.data)
  return indicatorsCountry
}


function addIndicatorNames(indicators, parentElement) {
  for (var i = 0; i < indicators.length; i++) {
    const indicatorValue = indicators[i];
    const newP = document.createElement("p");
    const link = document.createElement("a");
    const newPID = newP.setAttribute("class", "one-indicator")
    const newPSetCode = link.setAttribute("data-code", indicatorValue.indicatorCode)
    //const newPSetCountry = link.setAttribute("data-country", indicatorValue.countryCode)
    link.href = '#'
    const content = document.createTextNode(indicatorValue.indicatorName);
    newP.appendChild(link);
    link.appendChild(content);
    parentElement.parentNode.insertBefore(newP, parentElement.nextSibling);
  }

  //evento click al indicador
  const eachIndicator = document.getElementsByClassName('one-indicator');
  const arrayEachIndicator = Object.values(eachIndicator);
  arrayEachIndicator.forEach(function(element) {
        element.addEventListener('click', linkIndicator);
      });
  function linkIndicator() {
    display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
    display([sectionIndicatorCountry]);
    //console.log(event);
    //agregar títutlo
    document.getElementById('title-indicator').innerHTML = event.target.innerText;
    //obtener años
    let result = filterCountry(country);
    const dataTable = result.map(indicator => indicator.data);
      console.log(dataTable);
      console.log(event.target);

    //console.log(result)
    //filterYearsIndicator(result)
    //const elementTable = document.getElementById('indicator-table-country');
    //filterYearsIndicator(result, elementTable);
  }
}



function filterIndicatorYear(code) {
  const pais = filterCountry("MEX")
  const data = pais.filter(indicator => indicator.indicatorCode == code)

  return data[0].data

}

console.log(filterIndicatorYear("SP.M18.2024.FE.ZS"));
