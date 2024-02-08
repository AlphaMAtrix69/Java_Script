//array

//Array declaration methods
const myArr = [1,2,4,3,] //In JS array we can store an elements of any data type
const myArr2 = ["Lorem","ipsum"]
const myArr3 = new Array(1,2,3)

console.log(myArr[1]);

//Array Methods
myArr2.push(3)
myArr3.pop
myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//In splice original array is maniputlated ,mentioned array portion is printed differently  