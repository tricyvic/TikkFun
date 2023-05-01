let box = document.querySelector("div"),
    input = document.querySelector("input"),
    button = document.querySelector("button"),
    buttonS = document.querySelector("#button");

input.addEventListener("input",()=>{
    box.style.borderRadius = input.value;
    box.style.background = input.value;
})

console.log(button);

button.addEventListener("mouseover",()=>{
    buttonS.style.border = "3px solid rgb(0, 115, 255)"
})
button.addEventListener('mouseleave',()=>{
    buttonS.style.border = "3px white solid "
})
