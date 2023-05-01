const array = [1,2,[3,4],5,6]
const result = array.flat() 
console.log(result)// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
console.log(result2)// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
console.log(result3)// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
console.log(result4)// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//flap map

const numbers = [1,2, 3, 4]
console.log(numbers.map(number => [number * 2]))
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1,[2,3], 4, 5]
console.log(numbers2.flatMap(number => [number *2]))
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number