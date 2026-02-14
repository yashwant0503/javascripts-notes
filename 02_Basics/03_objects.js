//singleton
// object.create

//object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Yash",
    "full name": "Yashwant pathondiya",
    [mySym]: "mykey1",
    age : 18,
    location: "indore",
    email:"yashwant@sgsits.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// //console.log(JsUser.full name); // not useful
// console.log(JsUser["full name"]);
// //console.log(typeof JsUser.mySym); //string
// console.log(typeof JsUser[mySym]); // symbol

//Object.freeze(JsUser) // ristrict the change after freez command
location: "Bhopal"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingtwo = function() {
     console.log(`Hello JS User,${this.name}`);
     
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


