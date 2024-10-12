let down = document.querySelector("#down");
let down_div = document.querySelector("#down_div");
let input = document.querySelector("input");
let text = document.querySelector("h1");
let enter = document.querySelector("button");
let inp2 = document.querySelector("#inp2");

down.addEventListener("click", function() {
    down_div.classList.toggle("show");
    

    if(down_div.style.background !== ""){
        down.classList.toggle("show");
    }else{
        down.classList.toggle("no-background");
    }
});

enter.addEventListener("click", function(e) {
    e.preventDefault();
    let main = input.value;
    text.textContent = main;
    input.value = "";

    let img = inp2.value; 
    down_div.style.background = `url(${img})`; 
    down_div.style.backgroundSize = 'cover';  
    down_div.style.backgroundPosition = 'center';
    inp2.value ="";

});
