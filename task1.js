// Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
// Надо вернуть [1, 2, 2, 3] (порядок неважен)

const task1 = (firstArray, secondArray) => {
    const newArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if(firstArray[i] === secondArray[j + 1]) {
                newArray[i] = firstArray[i]
            }
        }
    }

    return newArray;
};

export default task1;
