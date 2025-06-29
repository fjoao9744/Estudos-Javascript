// spread

const arr = [10, 25, 40];
const arr2 = [...arr, ...[1, 2, 3, ...[0, 2, 3], ...[9, 90, [1, 4]]]]

console.log(arr2)