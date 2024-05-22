window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".nav-bar");
    var scrollposition = window.scrollY || document.documentElement.scrollTop;
    if (scrollposition > 500){
        navbar.style.backgroundColor = "rgb(61, 4, 61)";
    }else{
        navbar.style.backgroundColor = "transparent";
    }
})

window.addEventListener("scroll", ()=>{
    var about = document.querySelector(".about");
    var experience = document.querySelector(".experience");
    var portfolio = document.querySelector(".porto");
    var education = document.querySelector(".education");
    var connect = document.querySelector(".concept");

    var scrollposition = window.scrollY || document.documentElement.scrollTop;

    if (scrollposition > 500 && scrollposition < 940){
        about.style.backgroundColor = "white";
        about.style.color = "black";
        about.style.borderRadius = "10px";
    }else{
        about.style.backgroundColor = "transparent";
    }
    
    if (scrollposition > 940 && scrollposition < 1400){
        experience.style.backgroundColor = "white";
        experience.style.color = "black";
        experience.style.borderRadius = "10px";
    }else{
        experience.style.backgroundColor = "transparent";
    }

    if (scrollposition > 1400 && scrollposition < 1620){
        portfolio.style.backgroundColor = "white";
        portfolio.style.color = "black";
        portfolio.style.borderRadius = "10px";
    }else{
        portfolio.style.backgroundColor = "transparent";
    }

    if (scrollposition > 1620 && scrollposition < 2000){
        education.style.backgroundColor = "white";
        education.style.Color = "black";
        education.style.borderRadius = "10px";
    }else{
        education.style.backgroundColor = "transparent";
    }


})