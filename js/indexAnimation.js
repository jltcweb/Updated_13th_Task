/*window.addEventListener("scroll", ()=> {
    let content = document.querySelector(".first-animation");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.7;
    if(contentPosition < screenPosition) {
        content.classList.add("active");
    }
    else {
        content.classList.remove("active");
    }
});*/

window.addEventListener("scroll", ()=> {
    let content1 = document.querySelector(".second-animation");
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight /1.7;
    if(contentPosition1 < screenPosition1) {
        content1.classList.add("second-animation-activated");
    }
    else {
        content1.classList.remove("second-animation-activated");
    }
});

window.addEventListener("scroll", ()=> {
    let content1 = document.querySelector(".second-animation1");
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight /1.7;
    if(contentPosition1 < screenPosition1) {
        content1.classList.add("second-animation1-activated");
    }
    else {
        content1.classList.remove("second-animation1-activated");
    }
});

