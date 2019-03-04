window.dataLovers = {
  filterCountry: function filterCountry(country, indicatorsPerceptionCult) {
    const dataCountry = WORLDBANK[country];

    const indicatorsCountry = dataCountry.indicators.filter(function (indicator) {
      const indicatorCode = indicator.indicatorCode;
      const indicatorCodePerception = indicatorsPerceptionCult.map(ind => ind.indicatorCode);
      const isIn = indicatorCodePerception.findIndex(function (val) {
        return val === indicatorCode;
      });

      return isIn !== -1;
    });

    return indicatorsCountry;
  },


  showIndicatorNamesCountry: function showIndicatorNamesCountry(indicators, parentElement) {
    indicators.forEach(function(element) {
      const indicatorValue = element;
      const newP = document.createElement("p");
      const link = document.createElement("a");
      newP.setAttribute("class", "one-indicator");
      link.setAttribute("data-code", indicatorValue.indicatorCode);
      link.setAttribute("data-country", indicatorValue.countryCode);
      link.href = '#';
      const content = document.createTextNode(indicatorValue.indicatorName);
      newP.appendChild(link);
      link.appendChild(content);
      parentElement.parentNode.insertBefore(newP, parentElement.nextSibling);
    });

  },


  filterIndicatorYear: function filterIndicatorYear(code, country, indicatorsPerceptionCult) {
    const countryInd = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
    const dataYear = countryInd.filter(indicator => indicator.indicatorCode == code);
    console.log(dataYear);

    return countryInd[0].data;
  },


  //Mostrar en pantalla Indicadores por categoria
  showAllIndicators: function showAllIndicators(category, parentElement) {
    category.forEach(function(element) {
      const indicatorValue = element;
      const newP = document.createElement("p");
      const link = document.createElement("a");
      link.setAttribute("class", "each-indicator");
      link.setAttribute("data-code", indicatorValue.indicatorCode);
      // const newPSetCountry = link.setAttribute("data-country", indicatorValue.countryCode)
      link.href = '#';
      const content = document.createTextNode(indicatorValue.indicatorName);
      newP.appendChild(link);
      link.appendChild(content);
      parentElement.parentNode.insertBefore(newP, parentElement.nextSibling);

    });

  },
};

// const arrayExample = [5.0, 8.4, 3, 2 , 6];
//
function orderAscendant(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  return array;
}

function orderDescendant(array) {
  array.sort(function(a, b) {
    return b.percent - a.percent;
  });
  return array;
}
//
// console.log(orderAscendant(arrayExample));

//Trabajar despues
// //Filtrar información de cada indicadores por categoría de todos los países
// function filterIndicatorCategory(categories, code) {
  //   const dataCountry = WORLDBANK;
  //   const arrayData = Object.values(dataCountry);
  //   arrayData.forEach(function(element) {
    //     const indicatorCountry = element.indicators
    //     const filterIndicator = indicatorCountry.filter(function (indicator) {
      //       const indicatorCode = indicator.indicatorCode
      //       //console.log(indicatorCode);
      //       const indicatorsCode = categories.map(ind => ind.indicatorCode);
      //       const isIn = indicatorsCode.findIndex(function (val) {
        //         return val === indicatorCode
        //       })
        //
        //       return isIn !== -1
        //     })
        //
        //     filterIndicator.forEach(function(element) {
          //       console.log(element);
          //     });
          //   });
          // }
