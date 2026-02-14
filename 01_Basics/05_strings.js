let name = "yashwant"
let repoCount = "50"

//console.log(name + repoCount + value);


console.log( `Hello my name is  ${name} and my repo count is ${repoCount}`);

const gameName = new String('yash-want')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
console.log(gameName.toUpperCase());


const newString = gameName.substring(0,4)
console.log(newString);


anotherString = gameName.slice(-8,4)
console.log(anotherString);

console.log(gameName.replace('a','e' ));
console.log(gameName.includes('yashwant'));
console.log(gameName.includes('harish'));

console.log(gameName.split('-'));


