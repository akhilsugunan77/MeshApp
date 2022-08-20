const hamburgerBtn = document.getElementById("hamburger-btn-js");
const hamburgerMenu = document.getElementById("hamburger-menu-js");


hamburgerBtn.addEventListener("click",function(){
    hamburgerBtn.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
    console.log("clicked");
})