const arr = ['', 1, 2.5, 56];

arr[10] = 'Violla';
console.log(arr[10]);

const arrObj = {
    0: '',
    1: 1,
    2: 2.5,
    abc: {
        name: 'A',
        fd: [{}, {}]
    }
};

const  b = 'b';

arrObj.b = '1234';
arrObj[b] = '1234';


// console.log(arrObj['b']);
// console.log(arrObj.b);

// const obj = {a: 1, b:2};
const obj = {
    Anna: 500,
    'Alice': 322
};

