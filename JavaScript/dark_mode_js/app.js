const btn = document.querySelectorAll("button");
const header = document.querySelectorAll("header");
const section = document.querySelectorAll("section");
let test = document.body;
let mode = localStorage.getItem("mode");




let darkmode =()=> {
    test.classList.toggle("dark");
    localStorage.setItem("mode", "on");
}
let lightmode= ()=> {
    test.classList.remove("dark");
    localStorage.setItem("mode", "off");
}

document.addEventListener("DOMContentLoaded", check);
function check(){
    if(mode==="off"){lightmode()}else{darkmode()}
}
function style() {
    if (mode==="off"){
        darkmode()

    }else{
        lightmode()
    }
}
for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener("click", style);
}
console.log(mode);

