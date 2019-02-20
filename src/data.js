// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };
//
// window.example = example;

const indicatorCountryPer = window.WORLDBANK.PER.indicators.map
(({
  indicatorName, indicatorCode
}) => [indicatorName, indicatorCode]);

//Filtrar datos{}
const nombre = indicatorCountryPer[0];
const result = nombre.filter(codigo => codigo.value === "SG.VAW.REFU.ZS");

//window.WORLDBANK.PER.indicators[0].indicatorCode;
console.log(result);
