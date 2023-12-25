const convertToCelsius = function(fahrenheit) {
      let celsius = Number(((5/9 * (fahrenheit-32))).toFixed(1));
      return celsius;

};

const convertToFahrenheit = function(celsius) {
   let fahrenheit = Number(((celsius * 9/5) + 32).toFixed(1));
   return fahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
