var cameraProducts = [
    {
        id: 1,
        src: "../img/camera/1.jpeg",
        name: 'Sony 123',
        type: "camera",
        price: 123
    },
    {
        id: 2,
        src: "../img/camera/2.jpg",
        name: 'Sony 456',
        type: "camera",
        price: 123
    },
    {
        id: 3,
        src: "../img/camera/3.png",
        name: 'Sony 789',
        type: "camera",
        price: 123
    }
];

var microphoneProducts = [
    {
        id: 1,
        src: "../img/microphone/1.jpeg",
        name: 'Tai nghe Hyper X',
        type: "microphone"
    },
    {
        id: 2,
        src: "../img/microphone/2.jpg",
        name: 'Tai nghe Sony',
        type: "microphone"
    },
    {
        id: 3,
        src: "../img/microphone/3.jpeg",
        name: 'Tai nghe Asus',
        type: "microphone"
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
            case "microphone" :
                let inputMicrophone = `https://api.thingspeak.com/update?api_key=V6ADRDYGAL9B40SJ&field1=${inputPerson}`;
                try {
                    const res = await axios.get(inputMicrophone);
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
            case "microphone" :
                let inputMicrophone = `https://api.thingspeak.com/update?api_key=ZL34H067P0ZXOOOX&field1=${inputPerson}`;
                try {
                    const res = await axios.get(inputMicrophone);
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
                    displayProducts(microphoneProducts);
                    break;
            }
        })
    }
});