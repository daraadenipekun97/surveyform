


let toggle = document.querySelector("#bars");
let menujs = document.querySelector("#menu");
let linkjs = document.querySelector("#link");
let childlink = document.querySelector("#child_link");
let canceljs = document.querySelector(".cancel")


if (window.innerWidth <1350) {
    childlink.style.display = "block"; 
 }


// on hover of link product
// =================================================
linkjs.addEventListener('mouseover', show );
function show() {


childlink.style.display = "block";

   
}

childlink.addEventListener('mouseout', hide);
function hide() {
    
    childlink.style.display = "none";
    if (window.innerWidth <1350) {
   childlink.style.display = "block"; 
}
}

//on click of bars

toggle.addEventListener('click', action);
function action() {
    menujs.classList.toggle('showul');
    
   
    
    
}
