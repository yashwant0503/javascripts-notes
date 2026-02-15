// FOR

for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    //console.log(`Outter loop : ${i}`);
    
    for (let j = 0; j <= 10; j++) {
    //console.log(`Inner loop : ${j}`);
    //console.log(i +'*'+j+'='+ i*j);
     }
}

let MyArray = ["flash","spider man", "superman", "iron man"]
//console.log(MyArray.length);
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
   // console.log(element);
    
}

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`detected no. ${index}` );
        break
    }
    console.log(` value of i is ${index}`);
    }