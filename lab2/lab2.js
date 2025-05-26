/**
 * Возвращает x в степени n (n - целое число).
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат возведения x в степень n.
 */
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

/**
    * Вычисляет сумму чисел от 1 до n включительно.
    * @param {number} n - натуральное число
    * @returns {number} Сумма чисел от 1 до n.
    */
function sumTo(n){
    return n*(n+1)/2;
}

/**
 * Проверяет год на високосность.
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

/**
 * Возвращает факториал числа n (n!).
 * @param {number} n - Число для вычисления факториала.
 * @returns {bigint} Факториал числа n в виде BigInt.
 */
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}
