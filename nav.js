window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".nav-bar");
    var scrollposition = window.scrollY || document.documentElement.scrollTop;
    if (scrollposition > 500){
        navbar.style.backgroundColor = "rgb(61, 4, 61)";
    }else{
        navbar.style.backgroundColor = "transparent";
    }
})