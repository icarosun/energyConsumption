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