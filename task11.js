/**
 * Функция проверяет, является ли первая строка подпоследовательностью второй
 * (нечеткий поиск — fuzzysearch или approximate string matching).
 *
 * Нужно реализовать функцию с использованием только одного прохода
 * по символам строки, без использования регулярных выражений.
 *
 *
 * Пример работы:
 *
 * fuzzysearch('car', 'cartwheel')  // true
 * fuzzysearch('cwhl', 'cartwheel') // true
 * fuzzysearch('cwhee', 'cartwheel') // true
 * fuzzysearch('cartwheel', 'cartwheel')  // true
 * fuzzysearch('cwheeel', 'cartwheel')  // false
 * fuzzysearch('lw', 'cartwheel') // false
 */

const task11 = (searchStr, str) => {

    // return str.reduceRight(() => {}, [])
    if (str.toLowerCase().includes(searchStr.toLowerCase())) return true;

    for (let i = 0; i < str.length; i++) {

    }
    
    // Надо проверять символы и порядок каждого символа с порядком текущего символа проверяемой строки

    return str.length;
}

export default task11;
