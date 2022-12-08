var container_slides = document.querySelectorAll(".slides-div");
var image_slides = document.querySelector(".image-slider");
var imgUser_slides = document.querySelectorAll(".img");
var btnUser_slides = document.querySelectorAll(".button");
var intro_slides = document.querySelectorAll(".intro");
var introContent_slides = document.querySelectorAll(".intro p");
var indexClickImage = -1;

function setValuable_containerSlides(position) {
    image_slides.style.left = position;
}

function setValuable_imagebutton(index,width,height,saturate) {
    btnUser_slides[index].style.width = width;
    btnUser_slides[index].style.height = height;
    btnUser_slides[index].style.filter = saturate;
    imgUser_slides[index].style.width = width;
    imgUser_slides[index].style.height = height;
    imgUser_slides[index].style.filter = saturate;
}

function setValuable_intro(index,width,height,opacity,bottom) {
    intro_slides[index].style.width = width;
    intro_slides[index].style.height = height;
    intro_slides[index].style.bottom = bottom;
    introContent_slides[index].style.opacity = opacity;
}

window.addEventListener("load", (event) => {
    // Logic Loading
    let loading = setInterval(animate, 20);
    function animate() {
        if(count == 100) {
            clearInterval();
            bg_bubbles.style.opacity = "1";
            bg_header.style.opacity = "1";
            bg_main.style.opacity = "1";
            image_slides.style.opacity = "1";

            bg_body.style.backgroundColor = "#ff7979";
            bg_item_inner.style.backgroundColor = "#ff7979";
            center_loading.style.display = "none";
        } else {
            count += 1;
            console.log(count);
            persent.textContent = count + "%";
        }
    };


    // When user click slides It change to position img
    for(let i = 0 ; i < container_slides.length ; ++i) {
        container_slides[i].addEventListener("click", (event) => {
            
            if(indexClickImage != -1) {
                setValuable_imagebutton(indexClickImage,"240px","370px","saturate(10%)");
                setValuable_intro(indexClickImage,"240px","60px",0,"-5px");
            }

            switch(i) {
                case 0 :
                    indexClickImage = 0;
                    setValuable_containerSlides("55%");
                    setValuable_imagebutton(0,"300px","450px","saturate(100%)");
                    setValuable_intro(0,"300px","120px",1,"-45px");
                    break;
                case 1 :
                    indexClickImage = 1;
                    setValuable_containerSlides("35%");
                    setValuable_imagebutton(1,"300px","450px","saturate(100%)");
                    setValuable_intro(1,"300px","120px",1,"-45px");
                    break;
                case 2 :
                    indexClickImage = 2;
                    setValuable_containerSlides("10%");
                    setValuable_imagebutton(2,"300px","450px","saturate(100%)");
                    setValuable_intro(2,"300px","120px",1,"-45px");
                    break;
                case 3 :
                    indexClickImage = 3;
                    setValuable_containerSlides("-10%");
                    setValuable_imagebutton(3,"300px","450px","saturate(100%)");
                    setValuable_intro(3,"300px","120px",1,"-45px");
                    break;
                case 4 :
                    indexClickImage = 4;
                    setValuable_containerSlides("-35%");
                    setValuable_imagebutton(4,"300px","450px","saturate(100%)");
                    setValuable_intro(4,"300px","120px",1,"-45px");
                    break;
                case 5 :
                    indexClickImage = 5;
                    setValuable_containerSlides("-55%");
                    setValuable_imagebutton(5,"300px","450px","saturate(100%)");
                    setValuable_intro(5,"300px","120px",1,"-45px");
                    break;
            }
        });
    }
});

let center_loading = document.querySelector(".center");
let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let persent = document.querySelector(".inner span");
let count = 0;

let bg_body = document.querySelector("body");
let bg_bubbles = document.querySelector(".bubbles");
let bg_header = document.querySelector(".header");
let bg_item_inner = document.querySelector(".inner");
let bg_main = document.querySelector(".main");