// Дан список интов, повторяющихся элементов в списке нет.
// Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны.
// Примеры:
// [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
// [1,4,3,2] => "1-4"
// [1,4] => "1,4"

const task3 = (array) => {
    let totalString = '';
    const temp = [];

    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++) {
            if(array[j] > (array[j + 1])) {
                const temp = array[j + 1];
                array[j + 1] = array[j]
                array[j] = temp;
            }
        }
    }

    console.log('array: ', array);
    console.log('array[array.length - 1]: ', array[array.length - 1]);

    for (let i = 0; i < array[array.length - 1]; i++) {

        const arrayMaxLength = array[array.length - 1];
        console.log('i: ', i);

        if(i === array[i]) {
            console.log('array[i]: ', array[i]);
            temp.push(i)
        }

        console.log('temp: ', temp);
    }



    return array;
}

export default task3;
