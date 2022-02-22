var arr=[1,2,3,4,5]
var arr2=[6,7]
console.log(arr);
arr.pop();
console.log('array after pop():');
console.log(arr);
arr.push(6);
console.log('array after push():');
console.log(arr);
arr.shift();
console.log('array after shift():');
console.log(arr);
arr.unshift(7);
console.log('array after unshift():');
console.log(arr);
arr[0]=8;
console.log('array after changing element:');
console.log(arr);
let length=arr.length;
console.log('array length:');
console.log(length);
var arr3=arr.concat(arr2);
console.log('array after merging 1 and 2');
console.log(arr3);
