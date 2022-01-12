// Функция заполняет массив новыми значениями.
//
//
// Пример работы:
// fill([1, 2, 3], 'x');             // ['x', 'x', 'x']
// fill([2, 4, 6, 8], '*', 1, 3);    // [2, '*', '*', 8]
// fill([1, 3, 5, 7], '#', -2, 2);   // ['#', '#', 5, 7]
// fill([1, 3, 5, 7], '#', 2, 10);   // [1, 3, '#', '#']

const task18 = (arr, val, start, end) => {
    const trueStart = start && start > 0 ? start : 0;

    for (let i = trueStart; i < arr.length; i++) {
        if(i < end || !end) {
            arr[i] = val;
        }
    }

    return arr;
}

export default task18;
