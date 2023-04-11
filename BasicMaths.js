let x =5;
let y =20;

let z= x+y;

// console.log(z)


let Value;
console.log(Value);
Value= 50;
Value= 100;  //this can be reassigned not redeclared
console.log(Value);



const Value1=25;
console.log(Value1);
const Value2=50;//this can not be reassigned or redeclared
console.log(Value2)




// let num=5;
let num=6; //cannot redeclare globally
const n=20;
var abc=7;
var i = 15 //can be redeclared or re assigned grobally or locally
a ();
b ();
console.log("x in global scope",n, num,abc,i)


function a(){
    //   x= 20;
    //  console.log(num)
      var m=10;

     let num=500; //can redeclare locally
     let number=10; //cannot redeclare locally
     console.log("inside a",num)
    console.log("inside a",x,number,m);
    // b();
    function b(){
        var x=100;
         const n=3 //const cannot be be reasigned
        console.log("inside b========",x, n, m,abc);
    }
}
function b(){
    var x=1
     const n=30 //const cannot be be reasigned
    console.log("inside b",x, n);
}
console.log("outside b",x, n);