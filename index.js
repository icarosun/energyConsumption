$(document).ready(function() {
    $('select').selectize();
});

const devices = [
    {
        "id": "0",
        "deviceName": "Geladeira (frost free)",
        "potency_w": 300,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "1",
        "deviceName": "Freezer horizontal/vertical",
        "potency_w": 400,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {  
        "id": "3",
        "deviceName": "Micro-ondas",
        "potency_w": 1500,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {   
        "id": "4",
        "deviceName": "Forno Elétrico",
        "potency_w": 2000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {   
        "id": "5",
        "deviceName": "Fogão Elétrico (boca)",
        "potency_w": 2000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {   
        "id": "6",
        "deviceName": "Lava-louças",
        "potency_w": 2200,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,       
    },
    {
        "id": "7",
        "deviceName": "Liquidificador",
        "potency_w": 800,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "8",
        "deviceName": "Batedeira",
        "potency_w": 500,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,  
    },
    {
        "id": "9",
        "deviceName": "Cafeteira Elétrica",
        "potency_w": 1200,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "10",
        "deviceName": "Sanduicheira/Grill",
        "potency_w": 1500,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "11",
        "deviceName": "Torradeira",
        "potency_w": 1400,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "12",
        "deviceName": "Máquina de lavar roupas",
        "potency_w": 800,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "13",
        "deviceName": "Centrífuga",
        "potency_w": 600,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "14",
        "deviceName": "Secadora de roupas",
        "potency_w": 3000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "15",
        "deviceName": "Ferro de passar",
        "potency_w": 2000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "16",
        "deviceName": "Televisão LED",
        "potency_w": 150,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "17",
        "deviceName": "Aparelho de som",
        "potency_w": 200,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "18",
        "deviceName": "Videogame",
        "potency_w": 200,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "19",
        "deviceName": "Computador de mesa (desktop)",
        "potency_w": 400,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "20",
        "deviceName": "Notebook",
        "potency_w": 100,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "21",
        "deviceName": "Carregador de celular",
        "potency_w": 15,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "22",
        "deviceName": "Ar-condicionado (janela/split)",
        "potency_w": 2500,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "23",
        "deviceName": "Ventilador de mesa/teto",
        "potency_w": 100,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "24",
        "deviceName": "Aquecedor Elétrico",
        "potency_w": 2000,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "25",
        "deviceName": "Desudimificador",
        "potency_w": 400,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "26",
        "deviceName": "Lâmpada incandescente",
        "potency_w": 100,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "27",
        "deviceName": "Lâmpada fluorescente",
        "potency_w": 40,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
        "pay": 0,
    },
    {
        "id": "28",
        "deviceName": "Lâmpada LED",
        "potency_w": 20,
        "quant": 0,
        "hour_day": 0,
        "day_months": 0,
        "consumption": 0,
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

  if (deviceSelected > 28 || deviceSelected < 0) {
      return 
  }

  console.log(deviceSelected)

  if (table.find((row) => row.id == deviceSelected)) {
      showAlertInfo(); //TODO: removeAlertInfo();
  } else {
      const teste = devices[deviceSelected];

      table.push(teste);

      // createHeaderTable();
      showTable();
  }
 }

function showAlertInfo() {
    console.log("Ele não vai não");
}

function createHeaderTable() {
  const contentHeadTable = "<caption>Tabela de Consumo de energia</caption><thead><th>Aparelho</th><th>Potência</th><th>Quantidade</th><th>Horas / Dia</th><th>Dias / Mês</th><th>Consumo (KWh/mês)</th><th>Valor a pagar (R$)</th></thead><tbody id = \'table_body\'></tbody>"

  const tableDom = document.getElementById("table")
  tableDom.innerHTML= contentHeadTable;
}

function showTable() {

    const tableBodyDom = document.getElementById("table_body")

    var contentBodyTable = ""

    console.log(table);

    console.log(table.length);

    table.forEach((object, index) => {

      contentBodyTable += `
      <tr data-index="${index}">
          <td>${object['deviceName']}</td>
          <td>${object['potency_w']}</td>
          <td><input type='number' value='${object['quant']}' class="input-quant" min='0'></td>
          <td><input type='number' value='${object['hour_day']}' class="input-hour" min='0'></td>
          <td><input type='number' value='${object['day_months']}' class="input-days" min='0'></td>
          <td class="consumption">${object.consumption.toFixed(2)}</td>
          <td class="pay">R$ ${object.pay.toFixed(2)}</td>
          <td><button class="delete-btn" data-index"${index}">🗑️</button></td>
      </tr>`;
    });

    tableBodyDom.innerHTML = contentBodyTable;

    tableBodyDom.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", handleInputChange);
    });

    tableBodyDom.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", handleDeleteRow);
    });
}

function handleInputChange(e) {
  const input = e.target;
  const row = input.closest("tr");
  const index = Number(row.dataset.index);

  const quant = Number(row.querySelector(".input-quant").value);
  const hour = Number(row.querySelector(".input-hour").value);
  const days = Number(row.querySelector(".input-days").value);
  const potency = table[index].potency_w;

  const consumption = quant * hour * days * potency / 1000;
  const pay = consumption * 0.83485;

  table[index].quant = quant;
  table[index].hour_day = hour;
  table[index].day_months = days;
  table[index].consumption = consumption;
  table[index].pay = pay;

  row.querySelector(".consumption").textContent = consumption.toFixed(2);
  row.querySelector(".pay").textContent = `R$ ${pay.toFixed(2)}`;
}

function handleDeleteRow(e) {
  const index = Number(e.target.dataset.index);
  table.splice(index, 1);
  showTable();
}
