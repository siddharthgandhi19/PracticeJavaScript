let x=5;

{
    let x = 2;
    // console.log(x);
}

// console.log(x);


//----------------------------

var y =50;

{
    var y = 60;
}
// console.log(y)


//------------------------------

var  z = 90;
{
    const z = 55;
}

// console.log(z)




//----------------------

//Arrow functions allows a short syntax for writing function expressions.



var z1 = function(x1, y1) {
    return x1 * y1;
 }
 
 // ES6
 const z2 = (x1, y1) => x1 * y1;

//  console.log(z1 (5,6))
//  console.log(z2(4,6))

 //The Spread (...) Operator-------------------

 //The ... operator expands an iterable (like an array) into more elements:

 const quater1 = ["Jan", "Feb", "Mar", "Apr"]
 const quater2 = ["May", "Jun", "Jul", "Aug"]
 const quater3 = ["Sep", "Oct", "Nov", "Dec"]


const year = [...quater1,...quater2,...quater3]
console.log(year)
const year1 = [quater1,quater2,quater3]
console.log(year1)

//-------------map


const arrayOfNumbers = [1,4,6,8]

// const map1 = arrayOfNumbers.map(x => x * 2 )
// const map1 = arrayOfNumbers.map(x => x - 2 )

// console.log(map1)

//-----------------------Rest
let a, b, rest;

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);