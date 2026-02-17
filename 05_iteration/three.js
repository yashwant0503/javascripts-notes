// for of 

// ["","",'']
// [{}.{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
    }
const greeting = "Hello World!"
for (const greet of greeting) {
    //console.log(greet);
    continue
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

//console.log(map);

for (const key of map) {
   // console.log(key);
    }
for (const [key,value] of map) {
    //console.log(key, ':-', value);
    }

const myobject = {
   ' game1' : 'gta5 ',          //** NOT ITERATABLE
    'game2' : 'nta'
}
for (const [key,value] of myobject) {
    //console.log(key,':-',value);
    
}