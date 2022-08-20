const hamburgerMenu = document.getElementById("hamburger-menu-js");

hamburgerMenu.addEventListener("click",function(){
    hamburgerMenu.classList.toggle("active");
    console.log("clicked");
})