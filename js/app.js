const hamburgerBtn = document.querySelector(".hamburger-btn")
const sideBar = document.querySelector(".side-bar")
const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")


hamburgerBtn.addEventListener("click", function(){
    sideBar.classList.toggle("show-side")
    closeBtn.classList.toggle("open")
    openBtn.classList.toggle("close")
})