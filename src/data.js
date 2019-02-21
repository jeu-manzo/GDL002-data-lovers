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

//Filtrar datos de indicadores culturales para Peru{}

const prueba = window.WORLDBANK.PER.indicators;
//console.log(prueba);
//Muestra los indicadores seleccionados con todos los datos
const pruebaPeru = prueba.filter(indicator => (indicator.indicatorCode == "SG.VAW.REFU.ZS" || indicator.indicatorCode =="SG.VAW.REAS.ZS"
|| indicator.indicatorCode =="SG.VAW.NEGL.ZS"
|| indicator.indicatorCode =="SG.VAW.GOES.ZS"
|| indicator.indicatorCode =="SG.VAW.BURN.ZS"
|| indicator.indicatorCode =="SG.VAW.ARGU.ZS"
|| indicator.indicatorCode =="SP.M18.2024.FE.ZS"
));
console.log(pruebaPeru);
//Muestra solo los nombres de los indicadores seleccionados
const indCulPer = pruebaPeru.map(indicator => indicator.indicatorName);
console.log(indCulPer);

//Muestra en una lista los nombres de los indicadores seleccionados
indiPer = "<ul>";
for (i = 0; i < indCulPer.length; i++) {
  indiPer += "<li>" + indCulPer[i] + "</li>";
}
indiPer += "</ul>";
document.getElementById("demo").innerHTML = indiPer;
//console.log(text);



const pruebaMex = window.WORLDBANK.MEX.indicators.filter(indicator => (indicator.indicatorCode == "SG.VAW.REFU.ZS" || indicator.indicatorCode =="SG.VAW.REAS.ZS"
|| indicator.indicatorCode =="SG.VAW.NEGL.ZS"
|| indicator.indicatorCode =="SG.VAW.GOES.ZS"
|| indicator.indicatorCode =="SG.VAW.BURN.ZS"
|| indicator.indicatorCode =="SG.VAW.ARGU.ZS"
|| indicator.indicatorCode =="SP.M18.2024.FE.ZS"
));
const indCulMex = pruebaMex.map(indicator => indicator.indicatorName);
//console.log(indCulPer);
//console.log(pruebaMex);;
indiMex = "<ul>";
for (i = 0; i < indCulMex.length; i++) {
  indiMex += "<li>" + indCulMex[i] + "</li>";
}
indiMex += "</ul>";
document.getElementById("demo1").innerHTML = indiPer;
