//Object declaration two methods i)Literals ii)Constructor
//Object is creted with constructor object will be created of singleton type(only of one type) 
// Constructor method object.create

//Literal method
const mysym = Symbol("key1")//Symbol Declaration 
const User = {
    name: "Dishant", //Key = Vlaue Here key value treated as string
    age: 18,
    [mysym]: "key1", //Symbol usage as key in object [] used to represent symbols
    "Full Name": "Dishant Shah",
    location: "Jaipur",
    email: "Dishant@dsgff.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Object access
//console.log(User.isLoggedIn)
//console.log(User["email"])
//console.log(User["Full Name"])
//console.log(typeof User.mysym)
//console.log(User[mysym])

//Objects value change
User.email = "dis@sdfv.com"
Object.freeze(User)//It will restrict changes in Object but will not give error
User.Full_Name = "Shah Dishant"
//console.log(User);

//Function adding in object

User.greeting=function(){
    console.log("Hello User");
}
User.greetingtwo=function(){
    console.log(`Hello User, ${this.name}`); //String Interpletation Used``, This used for same referencing to object & accessing its property
}

console.log(User.greeting);
console.log(User.greetingtwo);