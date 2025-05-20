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
