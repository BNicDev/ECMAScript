const array = [1,1,2,3,4,[1,2,3,4,[1,2,3,4]]];
console.log(array.flat(3));

//flamap

const array2 =[1,2,3,4,5];
console.log(array2.flatMap(v => [v, v*2]))