'use strict';

import{
  fib
} from './fib.js';

/**
* Возвращает дробную часть числа.
* @param {number} num - число.
* @returns {number} Дробная часть числа.
*/
export function getDecimal(num){
  return +(num >=0 ? num % 1 : 1 + (num % 1)).toFixed(2);
}
