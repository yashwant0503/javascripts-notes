let a = 300;                                                                    // ***GLOBAL SCOPE

if(true){
     let a=10; // never print by outer command untill return command is given         ***BLOCK SCOPE
    // const b=20 ;
    var c=30; // never recommanded to use 
    //console.log("INNNER", a);
    
}

// console.log(a);
// console.log(b);
//console.log(c);

function one(){
    let username = "yash"
    function two(){
        let email = "yash@gmail.com"
        // console.log(username);
        
    }
    //console.log(email);
    
     two()
}
one()

if(true){
   const username = "yashwant"
   if(username === "yashwant"){
    const website = " youtube"
    console.log(username + website);
    } 
   // console.log(website);  not give o/p
    
}
// console.log(username);   not give o/p


// +++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));           // in this syntax addone position can be before or after the function
function addone(num){
     return num +1 ;
}





const addtwo = function(num){
    
    return num + 2 ;
    }
console.log(addtwo(5));      // but it can only  after function
 