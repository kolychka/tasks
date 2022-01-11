// "* Нужно написать функцию get. На вход функция принимает объект и путь до поля объекта.
// * Путь – это строка, разделенная точкой. Функция должна вернуть соответствующее поле объекта.
// * Запрашиваемого поля в объекте может не быть.
// */

// function get(obj, path) {
//     // your code here
// }
//
// const obj = {
//     a: {
//         b: {
//             c: 'd'
//         },
//         e: 'f'
//     },
// };

// get(obj, 'a.b');   // { c : 'd' }
// get(obj, 'a.b.c'); // 'd'
// get(obj, 'a.e');   // 'f'
// get(obj, 'a.x.e'); // undefined"

const task10 = (obj, path) => {
    const pathDepth = path.split('.');
    let arr = pathDepth;
    let val = obj;

    for (let i = 1; i <= pathDepth.length; i++) {
        if (val && val.hasOwnProperty(arr[0])) {
            val = val[arr[0]] ? val[arr[0]] : undefined;
            arr = arr.slice(1);
        } else {
            val = undefined;
        }
    }

    return val;
}

export default task10;
