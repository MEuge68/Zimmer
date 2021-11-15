
const toggleButton = document.querySelector(".toggle-btn");
const header = document.querySelector(".header");
const spanToggle = document.querySelector(".header .toggle-btn span");


let isActive = false;

console.log(toggleButton);
console.log(header);
console.log(spanToggle);


toggleButton.addEventListener("click",() => {
    header.classList.toggle("active");

    isActive = !isActive;

    if(isActive){
        spanToggle.innerHTML = "<span> <  </span>"
    }else{
        spanToggle.innerHTML = "<span> >  </span>"
    }
})