$(document).ready(function() {
    $('select').selectize();
});

const devices = [
    {
        "id": "1",
        "deviceName": "Geladeira (frost free)",
        "potency_w": 300,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "2",
        "deviceName": "Freezer horizontal/vertical",
        "potency_w": 400,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {  
        "id": "3",
        "deviceName": "Micro-ondas",
        "potency_w": 1500,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {   
        "id": "4",
        "deviceName": "Forno Elétrico",
        "potency_w": 2000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {   
        "id": "5",
        "deviceName": "Fogão Elétrico (boca)",
        "potency_w": 2000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {   
        "id": "6",
        "deviceName": "Lava-louças",
        "potency_w": 2200,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,       
    },
    {
        "id": "7",
        "deviceName": "Liquidificador",
        "potency_w": 800,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "8",
        "deviceName": "Batedeira",
        "potency_w": 500,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,  
    },
    {
        "id": "9",
        "deviceName": "Cafeteira Elétrica",
        "potency_w": 1200,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "10",
        "deviceName": "Sanduicheira/Grill",
        "potency_w": 1500,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "11",
        "deviceName": "Torradeira",
        "potency_w": 1400,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "12",
        "deviceName": "Máquina de lavar roupas",
        "potency_w": 800,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "13",
        "deviceName": "Centrífuga",
        "potency_w": 600,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "14",
        "deviceName": "Secadora de roupas",
        "potency_w": 3000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "15",
        "deviceName": "Ferro de passar",
        "potency_w": 2000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "16",
        "deviceName": "Televisão LED",
        "potency_w": 150,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "17",
        "deviceName": "Aparelho de som",
        "potency_w": 200,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "18",
        "deviceName": "Videogame",
        "potency_w": 200,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "19",
        "deviceName": "Computador de mesa (desktop)",
        "potency_w": 400,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "20",
        "deviceName": "Notebook",
        "potency_w": 100,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "21",
        "deviceName": "Carregador de celular",
        "potency_w": 15,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "22",
        "deviceName": "Ar-condicionado (janela/split)",
        "potency_w": 2500,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "23",
        "deviceName": "Ventilador de mesa/teto",
        "potency_w": 100,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "24",
        "deviceName": "Aquecedor Elétrico",
        "potency_w": 2000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "25",
        "deviceName": "Desudimificador",
        "potency_w": 400,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "26",
        "deviceName": "Lâmpada incandescente",
        "potency_w": 100,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "27",
        "deviceName": "Lâmpada fluorescente",
        "potency_w": 40,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
    {
        "id": "28",
        "deviceName": "Lâmpada LED",
        "potency_w": 20,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "pay": 0,
    },
]

const table = []

function addDevice() {
    inputDevice = document.getElementById("device");

    //TODO: removeAlertInfo();

    if (inputDevice.value == "") {
        return
    }

    const deviceSelected = parseInt(inputDevice.value);

    if (deviceSelected > 2 || deviceSelected < 0) {
        return 
    }

    console.log(deviceSelected)

    if (table.find((row) => row.id == deviceSelected)) {
        showAlertInfo(); //TODO: removeAlertInfo();
    } else {
        const teste = devices[deviceSelected];
        console.log(teste);

        table.push(teste);
        console.log(table);
        console.log(table.length)
        //showTable();
    }
 }

function showAlertInfo() {
    console.log("Ele não vai não");
}

function showTable() {
    const contentHeadTable = "<caption>Tabela de Consumo de energia</caption><thead><th>Aparelho</th><th>Potência</th><th>Quantidade</th><th>Horas / Dia</th><th>Dias / Mês</th><th>Consumo (KWh/mês)</th><th>Valor a pagar (R$)</th></thead><tbody id = \'table_body\'></tbody>"

    const tableDom = document.getElementById("table")
    tableDom.innerHTML= contentHeadTable;

    const tableBodyDom = document.getElementById("table_body")

    var contentBodyTable = ""

    console.log(table);

    console.log(table.length);

    for (const object of table) {

        const consumption = object['quant'] * object['hour_day'] * object['day_months']

        const pay = consumption * 0.83485

        contentBodyTable += `<tr>
            <td>${object['deviceName']}</td>
            <td>${object['potency_w']}</td>
            <td><input type='number' value='${object['quant']}' min='0'></td>
            <td><input type='number' value='${object['hour_day']}' min='0'></td>
            <td><input type='number' value='${object['day_months']}' min='0'></td>
            <td>${consumption}</td>
            <td>R$ ${pay}</td>
        </tr>` 
    }

    tableBodyDom.innerHTML = contentBodyTable;
}

function changeObjectToRowTable(object) {

}

/*<tr>
                <td>Geladeira (frost free)</td>
                <td>300</td>
                <td><input type='number' value='12' min='0'></td>
                <td><input type='number' value='12' min='0'></td>
                <td><input type='number' value='12' min='0'></td>
                <td>216</td>
                <td>R$ 180,33</td>
            </tr>*/