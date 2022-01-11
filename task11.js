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

const task11 = (searchStr, string) => {
    let counter = -1;

    for (let i = 0; i < string.length; i++) {
        counter = string.indexOf(searchStr.charAt(i), counter + 1);

        if(counter === -1) return false;
    }

    return true;
}

export default task11;
