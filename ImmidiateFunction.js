var myFunc = function(){
    console.log('I am a simple function');
}

(function(){
    console.log('hello, I am an immediate function');
}())

var myName = 'Siddharth Gandhi';
 
(function(thisName){
    console.log( 'hello, my name is: ' + thisName );
}(myName))