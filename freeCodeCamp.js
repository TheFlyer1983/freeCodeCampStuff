const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.map(i => {
     return i*i;
  })
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//Getters and Setters freeCodeCamp
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temperature){
      this.temperature = 5/9*(temperature -32)
    }
    //getter
    get temp(){
      return this.temperature;
    }

    //setter
    set temp(updatedTemperature){
      this.temperature = updatedTemperature;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
