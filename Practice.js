
// prev.addEventListner('click', function(){
//     Title.innerHTML = document.getElementById('inputData').values;

//     console.log(document.getElementById('inputData').values)
    
    
// })


// document.getElementById('inputData').addEventListener('keyup', function(){
//     Title.innerHTML = document.getElementById('inputData').values;
//     console.log(document.getElementById('inputData').values)
    
// })


function myFunction(){
    document.getElementById("demo").innerHTML = "Hello World"
}


// var x =5;
// var x=7;

// console.log(x)


// let x=5;
// x=20; // reassigned value
// let y=50;
// console.log(x,y);

// const x=20;
// const y=50;

//not  reassigned not redeclared x=? anything XX

// console.log(x,y)


// let s = myFunction1(5,3);

// function myFunction1(a,b){
//     return a*b
// }
// console.log(s)



//---------------------------

// function temperature(f){
//     return (5/9) * (f-32);
// }

// document.getElementById("demo").innerHTML = temperature(-40)

//------------------------------



const person = [
    {firstName:"Sid", 
lastName:"Doe", 
age:50,
 eyeColor:"blue"},
 {
    firstName:"Lal", 
lastName:"Doe", 
age:50,
 eyeColor:"blue"
 },
 {
    firstName:"Sur", 
lastName:"Doe", 
age:50,
 eyeColor:"blue"
 }
]

//  document.getElementById("demo").innerHTML= person[2].firstName

//  console.log(person[0].firstName)

// document.getElementById("demo").innerHTML = Date();


let text = "Please visit Microsoft!";

function demoFunction(){
    document.getElementById("demo").innerHTML = text.replace("Microsoft", "W3Schools");

}