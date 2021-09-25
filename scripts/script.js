// JavaScript Document
var menu = document.querySelector("header nav ");
var uitklapMenu = document.querySelector("header nav ");

menu.addEventListener("click", openMenu);

function openMenu() {
    uitklapMenu.classList.toggle("open");
}

console.log('open')