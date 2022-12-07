var URLAPI_ImportProduct_Camera = `https://api.thingspeak.com/channels/1972647/fields/1.json?api_key=M8AWL9N40QHYYFYF&results=1000`;
var URLAPI_ExportProduct_Camera = `https://api.thingspeak.com/channels/1972649/fields/1.json?api_key=TN13WAIA1DWJDRXD&results=1000`;

var URLAPI_ImportProduct_Microphone = `https://api.thingspeak.com/channels/1972648/fields/1.json?api_key=H7F8LUVME2LJWNHT&results=1000`;
var URLAPI_ExportProduct_Microphone = `https://api.thingspeak.com/channels/1972650/fields/1.json?api_key=W5BCYX22ZEDROK6I&results=1000`;

// Tính tổng số lượng nhập xuất camera
var sum_ImportProduct_Camera = 0;
var sum_ExportProduct_Camera = 0;

// Tính tổng số lượng nhập xuất tai nghe
var sum_ImportProduct_Microphone = 0;
var sum_ExportProduct_Microphone = 0;

var table_main = document.querySelector(".table_main");
var listNavButton = document.querySelectorAll(".list > ul > li > a");

var box_Chart1 = document.querySelector(".box_chart1");
var box_Chart2 = document.querySelector(".box_chart2");

async function Fetch_ImportProduct_Camere() {
    const res = await axios.get(URLAPI_ImportProduct_Camera);
    res.data.feeds.forEach((value,index) => {
        sum_ImportProduct_Camera += Number(value.field1);
    });
    return sum_ImportProduct_Camera;
}

async function Fetch_ExportProduct_Camera() {
    const res = await axios.get(URLAPI_ExportProduct_Camera);
    res.data.feeds.forEach((value,index) => {
        sum_ExportProduct_Camera += Number(value.field1);
    });
    return sum_ExportProduct_Camera;
}

async function Fetch_ImportProduct_Microphone() {
    const res = await axios.get(URLAPI_ImportProduct_Microphone);
    res.data.feeds.forEach((value,index) => {
        sum_ImportProduct_Microphone += Number(value.field1);
    });
    return sum_ImportProduct_Microphone;
}

async function Fetch_ExportProduct_Microphone() {
    const res = await axios.get(URLAPI_ExportProduct_Microphone);
    res.data.feeds.forEach((value,index) => {
        sum_ExportProduct_Microphone += Number(value.field1);
    });
    return sum_ExportProduct_Microphone;
}

async function fetch_AllAPI() {
    await Fetch_ImportProduct_Camere();
    await Fetch_ExportProduct_Camera();
    await Fetch_ImportProduct_Microphone();
    await Fetch_ExportProduct_Microphone();
}

function defaultStart() {
    table_main.innerHTML =
    `
        <tr>
            <th>Số lượng nhập</th>
            <th>Số lượng xuất</th>
        </tr>
        <tr>
            <td>${sum_ImportProduct_Camera}</td>
            <td>${sum_ExportProduct_Camera}</td>
        </tr>
    `;

    box_Chart1.innerHTML = 
    `
        <iframe 
            width="450" 
            height="260" 
            style="border: 1px solid #cccccc;" 
            src="https://thingspeak.com/channels/1972647/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=30&title=Nh%E1%BA%ADp+m%C3%A1y+%E1%BA%A3nh&type=line">
        </iframe>
    `;

    box_Chart2.innerHTML = 
    `
        <iframe 
            width="450" 
            height="260" 
            style="border: 1px solid #cccccc;" 
            src="https://thingspeak.com/channels/1972649/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">
        </iframe>
    `;
}

function ClickListProducts() {
    listNavButton.forEach((btn,index) => {
        btn.addEventListener("click", async (event) => {
            // Set to start
            table_main.innerHTML = ``;
            box_Chart1.innerHTML = ``;
            box_Chart2.innerHTML = ``;

            if(index === 0) {
                listNavButton[0].style.color = "red";
                listNavButton[1].style.color = "black";
            
                table_main.innerHTML =
                `
                    <tr>
                        <th>Số lượng nhập</th>
                        <th>Số lượng xuất</th>
                    </tr>
                    <tr>
                        <td>${sum_ImportProduct_Camera}</td>
                        <td>${sum_ExportProduct_Camera}</td>
                    </tr>
                `;

                box_Chart1.innerHTML = 
                `
                    <iframe 
                        width="450" 
                        height="260" 
                        style="border: 1px solid #cccccc;" 
                        src="https://thingspeak.com/channels/1972647/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=30&title=Nh%E1%BA%ADp+m%C3%A1y+%E1%BA%A3nh&type=line">
                    </iframe>
                `;

                box_Chart2.innerHTML = 
                `
                    <iframe 
                        width="450" 
                        height="260" 
                        style="border: 1px solid #cccccc;" 
                        src="https://thingspeak.com/channels/1972649/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">
                    </iframe>
                `;
            } else {
                listNavButton[0].style.color = "black";
                listNavButton[1].style.color = "red";
        
            
                table_main.innerHTML =
                `
                    <tr>
                        <th>Số lượng nhập</th>
                        <th>Số lượng xuất</th>
                    </tr>
                    <tr>
                        <td>${sum_ImportProduct_Microphone}</td>
                        <td>${sum_ExportProduct_Microphone}</td>
                    </tr>
                `;

                box_Chart1.innerHTML = 
                `
                    <iframe 
                        width="450" 
                        height="260" 
                        style="border: 1px solid #cccccc;" 
                        src="https://thingspeak.com/channels/1972648/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">
                    </iframe>

                `;

                box_Chart2.innerHTML = 
                `
                    <iframe 
                        width="450" 
                        height="260" 
                        style="border: 1px solid #cccccc;" 
                        src="https://thingspeak.com/channels/1972650/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">
                    </iframe>

                `;
            }
        })
    });
}


window.addEventListener("load", async (event) => {
    // Default load
    listNavButton[0].style.color = "red";

    await fetch_AllAPI();

    defaultStart();

        
    // When user click button
    ClickListProducts();
});