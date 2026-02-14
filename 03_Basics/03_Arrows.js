const user = {
    username : " yash",
    price : 999 ,

    WelcomeMessage : function(){
        console.log(`Hello${this.username} , welcome to websit `);
        console.log(this);
        
    }
}
// user.WelcomeMessage()
// user.username = " yashwant"
// user.WelcomeMessage()

// console.log(this); // o/p = {}

// function chai() {
//     let username = "yash"
//     console.log(this.username);
//     }

// const chai = function(){
//     let username = "yash"
//     console.log(this.username);
// }   

const chai = () => {
    let username = "yash"
    console.log(this);   // o/p = {}
}   

// chai()

// const addtwo =(num1,num2) => {
//     return num1 + num2 ;                 **// o/p = 7
// }

// const addtwo = (num1 , num2) => (num1 + num2)     //o/p = 7

const addtwo = (num1 , num2) => ({username:"yash"}) // o/p = {username:'yash'} and if (username="yash") o/p is yash
console.log(addtwo(3,4));