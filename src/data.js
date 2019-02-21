// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


//Obtener en un array los valores de indicatorName y indicatorCode
const indicatorCountryPer = window.WORLDBANK.PER.indicators.map
(({
  indicatorName, indicatorCode
}) => [indicatorName, indicatorCode]);

const indicatorsPerceptionCult = ["SG.VAW.REFU.ZS",
"SG.VAW.REAS.ZS",
"SG.VAW.NEGL.ZS",
"SG.VAW.GOES.ZS",
"SG.VAW.BURN.ZS",
"SG.VAW.ARGU.ZS",
"SP.M18.2024.FE.ZS"
]

//Iterar
indicatorCountryPer.forEach(function(element) {
  const name = element[0]
  const code = element[1]

  const isIn = indicatorsPerceptionCult.findIndex(function (indicatorCode) {
    return indicatorCode === code
  })

  if (isIn !== -1) {
    // values.push(element[1]);
    console.log(name)
  }
})
