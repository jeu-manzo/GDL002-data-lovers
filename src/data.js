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

    const isIn = indicatorsPerceptionCult.findIndex(function (val) {
      return val === indicatorCode
    })

    return isIn !== -1
  })
  return indicatorsCountry
}

function addIndicatorNames(indicators, parentElement) {
  for (var i = 0; i < indicators.length; i++) {
    const indicatorValue = indicators[i];
    const newP = document.createElement("p");
    const content = document.createTextNode(indicatorValue.indicatorName);
    newP.appendChild(content);
    parentElement.parentNode.insertBefore(newP, parentElement.nextSibling);
  }
}
