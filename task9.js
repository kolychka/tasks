/**
 * Дана последовательность интервалов.
 * Нужно объединить те, которые имеют пересечения.
 */

// mergeIntervals([[4, 8], [3, 5], [1, 2], [7, 12]]) // [[3, 12], [1, 2]] => [[3, 12], [1, 2]]
// mergeIntervals([[3, 4], [1, 2], [4, 5], [2, 3]]) // [[1, 5]]
// [1, 2], [3, 5], [4, 8], [7, 12]
const Task9 = (array) => {
    array.sort((a, b) => a[0] - b[0]);

    const newArray = [];

    // for (let i = 0; i < array.length; i++){
    //     if(array[i][1] - 1 === array[i][0]) {
    //         newArray.push(array[i]);
    //     }
    //     for(let j = 0; j < array.length; j++){
    //         console.log('array[i]: ', array[i]);
    //     }
    // }

    const newA = array.reduceRight((initialArr, nextItem, i, array) => {
        console.log('i: ', i);
        console.log('nextItem: ', nextItem);
        console.log('(nextItem[1] - 1) === nextItem[0]: ', (nextItem[1] - 1) === nextItem[0]);
        if (initialArr && initialArr.length && (nextItem[1] - 1) === nextItem[0]) {
            // return [...initialArr, nextItem];

            return [...initialArr, nextItem];
        } else if (initialArr && initialArr.length && nextItem[1] > nextItem[0]) {
            return [...initialArr, nextItem[0]]
        }
        else { return [...initialArr, nextItem] }

        // if (initialArr[i][1] < nextItem[1]) {
        //     return nextItem;
        // }
    }, []);

    console.log('newA: ', newA);
    // console.log(array);
}

export default Task9;
