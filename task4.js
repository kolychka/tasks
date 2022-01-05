// 1.1. Написать функцию, которая принимает строку и возвращает еее задом на перед
// reverse('Hello!') // -> !olleH
// 1.2. Реализовать вышеописанную функцию без преобразования в массив

const task4 = (string) => {
    let str = '';
    
    for (let i = string.length; i >= 0; i--) {
        str += string.charAt(i);
    }

    return str;
};

export default task4;
