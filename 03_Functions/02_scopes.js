var c =300 //Global scope
let a =300
if (true) 
//Block scope
{
    let a = 10
    const b = 20
    var c = 30
    console.log("Block scope",a)
}


// console.log(a);  //Give error becaz let declare locally
// console.log(b);  //Give error becaz let declare locally
console.log(c); //Give o/p
console.log("Global scope",a)   

//Nested function - child function can access parent variable
function one(){
    const name = "ndfg"
    function two(){
        const id = 434
        console.log(name)
    }
    // console.log(id)
    // two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); error becaz out of scope
}

// console.log(username); gives error becaz out of scope

//

//addone(5) declared here will give o/p
function addone(num) {
    return num + 1
}

addone(5)
//In JS variable can hold any thing JSON, function etc
//addtwo(3) declared here will not give o/p becaz function is stored in variable & also becaz of hoisting 
const addtwo = function (num) {
    return num + 2
}
addtwo(5)