// Дана строка (возможно, пустая), состоящая из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно написать функцию RLE (функция сжатия), которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
// И сгенерирует ошибку, если на вход пришла невалидная строка.
// Пояснения: Если символ встречается 1 раз, он остается без изменений; Если символ повторяется более 1 раза, к нему добавляется количество повторений.

const task2 = (string) => {
    const regex = new RegExp('[A-Z]');

    if (!regex.test(string)) throw 'String is not valid!';

    let resultString = '';
    let symbolLength = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i + 1)) symbolLength++;
        else {
            resultString += string.charAt(i) + (symbolLength ? symbolLength + 1 : '');
            symbolLength = 0;
        }
    }

    return resultString;
};

export default task2;
