// spread

const arr = [10, 25, 40];

// mesclando arrays
const arr2 = [...arr, 2, 3, 4]
const arr3 = [...arr, [2, 3, 4]]
const arr4 = [...arr, ...[2, 3, 4]]

console.log(arr2)
console.log(arr3)
console.log(arr4)
