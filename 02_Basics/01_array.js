// array

const MyArr = [0,1,2,3,4,5]
const MyHeroes = ["iron man","spider man"]

const MyArr2 = new Array(1,2,3,4)

console.log(MyArr[1]);

//Array Methods
MyArr.push(7) // to add new element at last
MyArr.pop()  // to remove last element
MyArr.unshift(9) // add new element at starting
MyArr.shift() // remove element from starting
console.log(MyArr);

const newArr = MyArr.join() // convert aaray to string
console.log(newArr); 


//slice and splice

console.log("A",MyArr);

const myn1 = MyArr.slice(1,3) // print the intrerval[1,2] without changing main array
 console.log("B",myn1);
 console.log("B",MyArr);
 

 const myn2 = MyArr.splice(1,3) // print the interval[1,2,3] with removing this elements from main array
 console.log("C",myn2);
 console.log("C",MyArr);
 
 
 



