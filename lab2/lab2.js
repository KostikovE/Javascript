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

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n - Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи в виде BigInt.
 */
function fib(n) {
    let a = 0n;
    let b = 1n;
    if (n === 0) return a;
    
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}
