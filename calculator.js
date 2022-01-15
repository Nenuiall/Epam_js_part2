/**
 *
 *A class containing method for summing and multiplying parameters.
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {
  };
  /**
   *
   *
   * @param {Array<Number>} theArgs array of numbers for summing
   * @return {Number} sum of numbers
   * @memberof Calculator
   */
  add(...theArgs) {
    if (theArgs.every((item) => typeof item === 'number')) {
      let result = 0;
      for (let i = 0; i < theArgs.length; i++) {
        result += theArgs[i];
      }

      return result;
    } else {
      throw new Error(`Parameters are not an array of "Numbers"`);
    };
  };
  /**
   *
   *
   * @param {Array<Number>} theArgs array of numbers for multiplication
   * @return {Number}
   * @memberof Calculator
   */
  multiply(...theArgs) {
    if (theArgs.every((item) => typeof item === 'number')) {
      let result = 1;
      for (let i = 0; i < theArgs.length; i++) {
        result = result * theArgs[i];
      }

      return result;
    } else {
      throw new Error(`Parameters are not an array of "Numbers"`);
    };
  };
};

module.exports = Calculator;
