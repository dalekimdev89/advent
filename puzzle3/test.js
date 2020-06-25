
let arr = [[1,2],[3,4],[1,2],[3,4],[1,2],3,4];
let obj = {};

const newArr = arr.reduce((acc, num, i) => {
    acc[[num]] = 1;
    return acc;
}, {})

console.log(newArr)
console.log(Object.keys(newArr).length)