const coding = [ 'js','py','cpp','java','ruby']

// coding.forEach(function (val){
//     console.log(val);
    
// )}

// coding.forEach((val) =>{
//    console.log(val);
   
// })
function printMe(item) {
    //console.log(item);
    
}
 coding.forEach(printMe)

 const mycoding =[
    {  langaugename :'javascript',
        languagefilename : 'Js'
    },
       {  langaugename :'java',
        languagefilename : 'Java'
    },
       {  langaugename :'python',
        languagefilename : 'py'
    }
 ]
 mycoding.forEach( (item)=> {
    console.log(item.langaugename);
    
 })