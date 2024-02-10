//Object declaration with constructor 
const User = new Object() //Created using constructor & it is singleton object
const User2 = {} //Created using literals & it is not singleton object

User2.id = "fse2"
User2.name = "fhd"

//Object declaration in object

const User3 = {
    email: "fjs@mail.com",
    fullname: {
        userfullname: {
            firstname: "Dishant",
            lastname: "Shah"
        }
    }
}

console.log(User3.fullname.userfullname.firstname.lastname)

//Optional chaining 

//Objects merge
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1, obj2} //Merge objects but merge objects in nested format { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4); //Merge in single object { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1,...obj2} //Spread operator use
console.log(obj5)


//Array of Objects
const users = [
    {
        id: 1,
        email: "asd@.com"
    },
    {
        id: 1,
        email: "asd@.com"
    },
    {
        id: 1,
        email: "asd@.com"
    }
]

//Access Array of objects
users[1].email

console.log(User2);
//Print keys object
console.log(Object.keys(User2)) //Gives o/p in array format
console.log(Object.values(User2)) 

console.log(User2.hasOwnProperty('name')); //Checks whether these property is available or not

//Object de-structuring
const course = {
    name: "hbjf",
    price: "23",
    instructor: "sgb"
}

//See again