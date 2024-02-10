//Arrow function & This keyword
const user = {
    name: "vjdnf",
    id: 23,
    welcomemsg: function () {
        console.log(`${user.name} welcome & id is ${user.id}`);
        console.log(this)//returns whole object current context
    }
}
// user.welcomemsg()
// user.name = "ffndpspd" //Here we changed context & value
// user.id = 655
user.welcomemsg()

console.log(this); //returns empty object becaz we are in node env. but in browser returns window object

function one(params) {
    console.log(this);
}
one()




