var cameraProducts = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/7947303/pexels-photo-7947303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Sony 123',
        type: "camera",
        price: 123
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/9374148/pexels-photo-9374148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Sony 456',
        type: "camera",
        price: 123
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/7961670/pexels-photo-7961670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Sony 789',
        type: "camera",
        price: 123
    }
];

var headphoneProducts = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Tai nghe Hyper X',
        type: "headphone"
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Tai nghe Sony',
        type: "headphone"
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Tai nghe Asus',
        type: "headphone"
    }
];

var displayProduct = [];
var indexDisplayProduct = 0;

var main = document.querySelector('.main');
var listNavButton = document.querySelectorAll(".item-btn");

async function InputProducts(product) {
    let inputPerson = Number(prompt("Nhập số lượng",0));
    let typeProduct = product.type;

    if(inputPerson != null && inputPerson != 0) {
        switch(typeProduct) {
            case "camera" :
                let inputCamera =  `https://api.thingspeak.com/update?api_key=6I6TSGX5TP7VBMAK&field1=${inputPerson}`;
                try {
                    const res = await axios.get(inputCamera);
                } catch(err) {
                    throw err;
                }
                break;
            case "headphone" :
                let inputHeadphone = `https://api.thingspeak.com/update?api_key=V6ADRDYGAL9B40SJ&field1=${inputPerson}`;
                try {
                    const res = await axios.get(inputHeadphone);
                } catch(err) {
                    throw err;
                }
                break;
        }
    } else {
        alert("Số lượng nhập không hợp lệ");
    }
}

async function OutputProducts(product) {
    inputPerson = Number(prompt("Nhập số lượng",0));
    let typeProduct = product.type;

    if(inputPerson != null && inputPerson != 0) {
        switch(typeProduct) {
            case "camera" :
                let inputCamera =  `https://api.thingspeak.com/update?api_key=A2MS5ORQ70FQDDLF&field1=${inputPerson}`;
                try {
                    const res = await axios.get(inputCamera);
                } catch(err) {
                    throw err;
                }
                break;
            case "headphone" :
                let inputHeadphone = `https://api.thingspeak.com/update?api_key=ZL34H067P0ZXOOOX&field1=${inputPerson}`;
                try {
                    const res = await axios.get(inputHeadphone);
                } catch(err) {
                    throw err;
                }
                break;
        }
    } else {
        alert("Số lượng nhập không hợp lệ");
    }
}

function displayProducts(listProducts) {
    displayProduct = listProducts;
    for(let i = 0 ; i < displayProduct.length ; ++i) {
        main.innerHTML += `
        <div class="card" style="width: 33%;">
            <img style="width: 90%;height: 300px;max-height: 300px;max-width: 100%" src="${displayProduct[i].src}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${displayProduct[i].name}</p>
            </div>
            <div class="card-button">
                <div id="btn"></div>
                <button id=${displayProduct[i].id} onClick="InputProducts(displayProduct[${i}])" class="btn_inputProduct toggle-btn">Nhập hàng</button>
                <button id=${displayProduct[i].id} onClick="OutputProducts(displayProduct[${i}])" class="btn_outputProduct toggle-btn">Xuất hàng</button>
            </div>
        </div>
        `;
    }
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
            bg_list.style.opacity = "1";

            bg_body.style.backgroundColor = "#ff7979";
            bg_item_inner.style.backgroundColor = "#ff7979";
            center_loading.style.display = "none";
        } else {
            count += 1;
            persent.textContent = count + "%";
        }
    };

    displayProducts(cameraProducts);

    var cardButton = document.querySelectorAll(".card_list_button")[0];
    for(let j = 0 ; j < cardButton.children.length ; ++j) {
        cardButton.children[j].addEventListener("click", (event) => {
            if(j==1) {
                cardButton.children[0].style.left = "0";
            } else if(j==2) {
                cardButton.children[0].style.left = "150px";
            }
        })
    }


    for(let i = 0 ; i < listNavButton.length ; ++i) {
        listNavButton[i].addEventListener("click", () => {
            main.innerHTML = ``;
            indexDisplayProduct = i;
            switch(indexDisplayProduct) {
                case 0 :
                    displayProducts(cameraProducts);
                    break;
                case 1 :
                    displayProducts(headphoneProducts);
                    break;
            }
        })
    }
});

// Loading
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
let bg_list = document.querySelector(".list");