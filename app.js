var addCounter = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var result = document.querySelector('.result');
var count = 0;


addCounter.addEventListener("click", function(){
    if (count >= 0 && count < 50){
        count++
    }
    display();
})



minus.addEventListener('click', function(){
    if (count > 0 && count <= 50 ){
    count--;
    }
    display();
})

function display(){
    result.innerHTML = count;
};



