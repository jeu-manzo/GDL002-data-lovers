// // esta es una función de ejemplo
// // puedes ver como agregamos la función a nuestro objeto global window
//
//
// //Obtener en un array los valores de indicatorName y indicatorCode
// let countries = Object.values(window.WORLDBANK);
// let countryPer = countries[0];
// let indicatorsCountry = countryPer.indicators;
//
// let array = [];
//
// for (var i = 0; i < countries.length; i++) {
//   let countryPer = countries[i]
//   let indicatorsCountry = countryPer.indicators;
//   const indicatorCountryPer = indicatorsCountry.map
//   (({
//     indicatorName, indicatorCode
//   }) => [indicatorName, indicatorCode]);
//
//   array.push(indicatorCountryPer);
// }
//
// console.log(array);
//
//
//
// // countries.forEach(function(element) {
// //   console.log(element);
// // });
//
//
// // const indicatorCountryPer = countries.map
// // (({
// //   indicatorName, indicatorCode
// // }) => [indicatorName, indicatorCode]);
// //
// // console.log(indicatorCountryPer);
// // const country = PER;
// //
// // const indicatorCountryPer = indicatorsCountry.map
// // (({
// //   indicatorName, indicatorCode
// // }) => [indicatorName, indicatorCode]);
//
//
//
// const indicatorsPerceptionCult = ["SG.VAW.REFU.ZS",
// "SG.VAW.REAS.ZS",
// "SG.VAW.NEGL.ZS",
// "SG.VAW.GOES.ZS",
// "SG.VAW.BURN.ZS",
// "SG.VAW.ARGU.ZS",
// "SP.M18.2024.FE.ZS"
// ]
//
// //Iterar
// indicatorCountryPer.forEach(function(element) {
//   const name = element[0]
//   const code = element[1]
//
//   const isIn = indicatorsPerceptionCult.findIndex(function (indicatorCode) {
//     return indicatorCode === code
//   })
//
//   if (isIn !== -1) {
//     console.log(name)
//   }
// })

window.WORLDBANK

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
