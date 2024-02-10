//it is fixed set of procedures that perform tasks which are listed in scope

function name() {
    console.log("hello");
}

name //Used to reference function
name() //Used for execution

// function addnumber(num1, num2){
//     // num1 + num2
//     // console.log(num1 + num2) These code just print console not return any value
    
// }
addnumber() //Gives NaN becaz no num i/p

function addnumber(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addnumber(3,4)
console.log(result);

function loginUserMessage(username) {
    if (username === undefined) //also use !username
    {
        console.log("Enter username");
        return
    }
    return `${username} logged in`
}
loginUserMessage("Dishant") //Here argument is passed but not printed becaz of no log instruction
console.log(loginUserMessage("Dishant"))
//console.log(loginUserMessage()) //Undeined o/p for that use if else

//Functions with objects & arrays


// function calculatecartPrice(num1){
//     return num1
// }
// console.log(calculatecartPrice(200,400,500)); //Here function will return only 200 as o/p to return all o/p use rest & spread operator (...)

// function calculatecartPrice(val1, val2, ...num1)//o/p [ 400, 500 ] becaz 200&300 are assigned to val1 & val2
// {
//     return num1
// }
// console.log(calculatecartPrice(200,300,400,500)) 

function calculatecartPrice(...num1) //return all values of argument in array format
{
    return num1
}
console.log(calculatecartPrice(200,300,400,500));

//passing objects in function

const user = {
    name: "dfv",
    id : 233
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} & id is ${anyObject.id}`);
}
handleObject(user)
handleObject//also pass like these
({
    name: "dbf",
    id: 345
})

//passing arrays in function

const newArray = [200,300,400,500]

function returnvalue (getArray)//instead of getarray we can use any name but same name must be used in scope
{
    console.log(getArray)
}
returnvalue(newArray)
returnvalue(
    [47,6,7,65]
)


