const Calculator = require('../../app/calculator');
const assert = require('assert');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('Calculator unit tests', function() {
  let calculator;
  let spy;
  describe('Add method', function() {
    beforeEach(function() {
      calculator = new Calculator();
      spy = chai.spy.on(calculator, 'add');
    });
    afterEach(function() {
      calculator = null;
    });
    it('sums parametres', function() {
      assert.equal(calculator.add(2, 5, 0, 0.3, -4), 3.3);
    });
    it('throws an error if the parameter is not a number', function() {
      const callWithError = () => calculator.add(-1, 'str');
      expect(spy).to.be.a.spy;
      // eslint-disable-next-line max-len
      expect(callWithError).to.throw(`Parameters are not an array of "Numbers"`);
    });
  });
  describe('Multiply method', function() {
    beforeEach(function() {
      calculator = new Calculator();
      spy = chai.spy.on(calculator, 'multiply');
    });
    afterEach(function() {
      calculator = null;
    });
    it('multiplies parameters', function() {
      assert.equal(calculator.multiply(2, 5, 0.3, -4), -12);
    });
    it('should return 0 when multiplied by zero', function() {
      expect(calculator.multiply(1, 5, 0)).to.be.equal(0);
    });
    it('throws an error if the parameter is not a number', function() {
      const callWithError = () => calculator.multiply(-1, 'str');
      expect(spy).to.be.a.spy;
      // eslint-disable-next-line max-len
      expect(callWithError).to.throw(`Parameters are not an array of "Numbers"`);
    });
  });
});

