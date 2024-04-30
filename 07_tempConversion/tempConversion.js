const convertToCelsius = function(f) {
  let c = (f-32)*5/9; 

  if (!Number.isInteger(c)){
    c = c.toFixed(1);
    c = Number(c);
  }

  return c;
};

const convertToFahrenheit = function(c) {
  let f = c*9/5+32;

  if (!Number.isInteger(f)){
  f = f.toFixed(1);
    f = Number(f);
}

  return f;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
