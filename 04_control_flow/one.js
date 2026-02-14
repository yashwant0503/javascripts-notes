const temperature = 41 

if( temperature < 50 ){
    //console.log("temperature is less then 50");
    }
    else{
        //console.log("temperature is greater then 50");
        }
//console.log("41"); // this will print definetly not worry about any condition
//  == , === , != ,!== , <= ,>= < ,>

const score = 200 
if( score > 100) {
    const power = "fly"
    //console.log(`user power: ${power}`);
    }
   // console.log(`user power: ${power}`); // error

const balance = 1000
//  if( balance < 500){
//     console.log("less then 500");
//     }
//     else if(balance < 750){
//         console.log("less then 750");
        
//     }
//     else if(balance < 900){
//         console.log("less then 900");
//     }
//     else{
//         console.log("less then 1200");
        
//     }

const userloggedIn = true
const debitCard = true
const loggedFromGoogle = false
const loggedFromEmail = true

if(userloggedIn && debitCard && loggedFromGoogle && loggedFromEmail){          // AND Command
    console.log("Allow to buy ");
    }
    else if (loggedFromGoogle || loggedFromEmail){                             // OR Command
        console.log("user Logged In");
        
    }