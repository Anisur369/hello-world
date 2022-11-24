"use strict"
/* //
function toCelsius(fahrenheit){
    return (5/9)*(fahrenheit-32);
};
// console.log(toCelsius(77));
// console.log(typeof toCelsius());




let funexption=function(){
    console.log("Hi! I am ther?")
}
funexption();

let arrayfun=()=>{console.log("array function")};
arrayfun();

let result={
    y:"bmw",
    z:"hagis",
    i:function (color){
        let a=color;
        return a;
    }
};
console.log(result["i"](10));
 */


//------------string mathort-------------
// slice
// substring
// substr
// replace
// toUpperCase
// toLowerCase
// concat
// trim
// padStart
// padEnd
// indexOf
// charAt
// []
// split
// search
// match(/lo/gi)
// includes(),true/false
// startsWith
// endsWith
// toString(10/32/16/8/2)
//----numbermethods and properties---
// toString
// toExponential
// toPrecision
// push
// pop
// new array()
// Array.isArray()
// instanceof
// tostring
// join
// shift
// unshift
// splice
// concat
// sort
// reverse
// Array.from()
// keys()
// console.log(fruits instanceof Object);
/* 
function Octal(fastNumber,lastNumber){
    let x=fastNumber;
    let y=lastNumber;
    let bagful=x/y;
    return bagful;
};
console.log(Octal(384,8));
  */
/* 
const fruits=[`Apple`,`Orang`,`Banana`,`Mango`];
let radi=fruits.substr();
let fLen=fruits.length;

let text=`<ul>`;

for(let i=0;i<fLen;i++){
    text+=`<li>`+fruits[i]+`</li>`;
};
text+=`</ul>`;
document.querySelector(`.lop`).innerHTML=text;

 */



//problem
/* const points=[40,100,1]; 
points.sort(function(a,b){
    return 0.5-Math.random();
});
let po=[40,100,1]
if(points==po){
    alert("true");
}else{
    console.log(points)
} */




/*  
let anis=points.map( function ask(valu,index){
    if(valu<20){
        console.log(valu)
    }
    
 })

console.log(anis); */
/* const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction2(){
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("demo").innerHTML = points;
}; */
/* function
let x=22*Math.random();
console.log(x*Math.floor); */

/* const strs = "dynamic coding with amit";
 
let output =strs.split(" ").map(str =>{
    return str[0].toUpperCase()+ str.slice(1)
}).join(" ");
console.log(output)  */
/* let vowels=["a","e","i","o","u","A","E","I","O","U"];
let meter="How are you doing today? ";
let hello="kjfkdhfea";
let text=meter+hello;

function result(sentence){
    let count=0;
    let makeArray=Array.from(sentence);
    makeArray.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    })
    return count
}
console.log(result(text))
 */

/* const number =[1,4,5,5,6,7,6,8,9,10,4];
const duplicates = number.filter(function(value, index, array){
    return array.indexOf(value) !== index;
})
console.log(duplicates) */

const number =[4,45,25,36,5,25,45,74,25,36,85,95,14,74,36,25];
const Object = {fname: "John", lname: "Doe", age: 25};
let person="hello"
for(let x of number){
    console.log(number[x]);   
};