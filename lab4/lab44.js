/**
 * Функция для проверки, является ли объект пустым
 * @param {Object} obj - Объект для проверки
 * @returns {boolean} Возвращает true, если объект пустой (не имеет собственных перечисляемых свойств), иначе false
 * @example
 * isEmpty({}); // true
 * isEmpty({a: 1}); // false
 * isEmpty({[Symbol()]: true}); // false
 */
function isEmpty(obj) {
    if (typeof obj !== 'object' || obj === null) return true;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return Object.getOwnPropertySymbols(obj).length === 0;
}

/**
 * Функция для подсчёта секунд, прошедших с начала текущих суток
 * @returns {number} Количество секунд, прошедших с начала дня (00:00:00)
 * @example
 * getSecondsToday(); // 45218 (зависит от времени выполнения)
 */
function getSecondsToday() {
    let now = new Date();
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - start) / 1000);
}

/**
 * Функция для форматирования даты в строку формата DD.MM.YYYY
 * @param {Date} date - Объект Date для форматирования
 * @returns {string} Отформатированная строка с датой
 * @example
 * formatDate(new Date(2024, 0, 20)); // "20.01.2024"
 * formatDate(new Date(2000, 11, 1)); // "01.12.2000"
 */
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return ${day}.${month}.${year};
}
