let age = 12

//To number conversion
console.log(typeof age) //Here we are age variable is of number type
console.log(age)

//But if i/p is in string format then we need to convert it to number then

let age1 = "123assd"
let numberconvserion = Number(age1)
console.log(typeof numberconvserion);
console.log(numberconvserion); //Gives Type number but of NaN type Not a number 

//"12" => 12
//"12asd" => NaN
// true => 1; false =>0
//null => 0
//undefined => NaN

//To Boolean conversion
let isLoggedIn = null
let booleanconversion = Boolean(isLoggedIn)
console.log(booleanconversion);

//To string Conversion
let number = 12
let stringconversion = String(number)
console.log(stringconversion)
console.log(typeof stringconversion)

// *********************** Operations ***********************

let str1 = "hello"
let str2 = "world"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2) //o/p 12
console.log(2+"1") //o/p 21
console.log("1"+2+2) //o/p 122
console.log(2+2+"1") //o/p 41 
//In string & number concatenation if prefix is string then whole expression is considered as string ex. "1"+2+2 => 122
//& if prefix is number then whole expresssion is considered as number ex. 2+2+"1" => 41


//Increment & Decrement Operator in JS