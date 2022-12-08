
let center_loading = document.querySelector(".center");
let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let persent = document.querySelector(".inner span");
let count = 0;

let bg_body = document.querySelector("body");
let bg_bubbles = document.querySelector(".bubbles");
let bg_header = document.querySelector(".header");
let bg_item_inner = document.querySelector(".inner");
var bg_containerContent = document.querySelector(".contents");

window.addEventListener("load", () => {
    let loading = setInterval(animate, 20);
    function animate() {
        if(count == 100) {
            clearInterval();

            bg_bubbles.style.opacity = "1";
            bg_header.style.opacity = "1";
            bg_containerContent.style.opacity = "1";
            bg_body.style.backgroundColor = "#ff7979";
            bg_item_inner.style.backgroundColor = "#ff7979";
            center_loading.style.display = "none";
        } else {
            count += 1;
            persent.textContent = count + "%";
        }
    };
});