/*
Написать fill, заменяет элементы символом начиная со start по end
fill([1, 2, 3], '*') // ['*', '*', '*']
fill([1, 2, 3, 4, 5], '*', 1, 3) // [1, '*', '*', '*', 5]
fill([1, 2, 3, 4, 5], '*', -2, 2) // ['*', '*, '*', 4, 5] // если отрицательный start, просто начинаем с 0
*/

function task13(arr, val, start, end) {
    const trueStart = start > 0 ? start : 0;

    console.log('end', end);

    for (let i = trueStart; i < arr.length; i++){
        if(!end || i <= end) {
            arr[i] = val;
        }
    }

    return arr;
}

export default task13;
