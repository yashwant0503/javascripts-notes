const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(accumulator,currentvalue){
//     console.log(`acc : ${accumulator} and curval : ${currentvalue}`);
    
//     return accumulator + currentvalue
// }, 0)

const mytotal = mynums.reduce((acc,curval)=>acc + curval, 0)

//console.log(mytotal);

const soppingcart = [
    { course :"js",
        price: 2999
    },
     { course :"py",
        price: 1999
    },
     { course :"c++",
        price: 3999
    }
]

const totaltopay = soppingcart.reduce((acc,item) => acc + item.price,0)

console.log(totaltopay);
