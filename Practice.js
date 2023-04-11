
prev.addEventListner('click', function(){
    Title.innerHTML = document.getElementById('inputData').values;

    console.log(document.getElementById('inputData').values)
    
    
})


document.getElementById('inputData').addEventListener('keyup', function(){
    Title.innerHTML = document.getElementById('inputData').values;
    console.log(document.getElementById('inputData').values)
    
})