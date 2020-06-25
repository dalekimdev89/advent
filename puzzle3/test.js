let obj1 = {
    a: '1',
    b: '2',
    c: '3'
};

let obj2 = {
    d: '1',
    e: '2',
    a: '1',
    c: '3'
};

let merge = {
    ...obj1,
    ...obj2
};

console.log(merge)