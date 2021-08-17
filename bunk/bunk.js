let table = document.getElementById("table");
let opeaningReading = document.getElementById("opeaningReading");
let closingReading = document.getElementById("closingReading");
let valueOfLiter = document.getElementById("valueOfLiter");
let sale = document.getElementById("sale");
let billNo = document.getElementById("billNo");
opeaningReading.value = localStorage.getItem("localStorageClosing");
calc.onclick = function() {
    let op = parseFloat(opeaningReading.value);
    let cl = parseFloat(closingReading.value);
    let vl = parseFloat(valueOfLiter.value);
    let sa = parseFloat(sale.textContent);
    if (cl >= op) {
        localStorage.setItem("localStorageClosing", cl);
        let reading = (cl - op) * vl;
        sale.textContent = reading;
    } else {
        alert("enter correct closing reading");
    }
};

function getTableFromLocalStorage() {
    let stringfiedTable = localStorage.getItem("finalTable");
    let parsedTable = JSON.parse(stringfiedTable);
    if (parsedTable === null) {
        return [];
    } else {
        return parsedTable;
    }
}
let tble = getTableFromLocalStorage();
let tblecount = tble.length;

function save() {
    localStorage.setItem("finalTable", JSON.stringify(tble));
}

function add() {
    let op = parseFloat(opeaningReading.value);
    let cl = parseFloat(closingReading.value);
    let vl = parseFloat(valueOfLiter.value);
    let sa = parseFloat(sale.textContent);
    let bn = parseFloat(billNo.value);
    let sle = parseFloat(cl - op);
    let newTable = {
        openread: op,
        closeread: cl,
        va: vl,
        sal: sa,
        bill: bn,
        daySale: sle,
    };
    tble.push(newTable);
    createAndAppendTodo(newTable);
    opeaningReading.value = "";
    closingReading.value = "";
    valueOfLiter.value = "";
    sale.textContent = "";
    billNo.value = "";
}

function createAndAppendTodo(tabe) {
    let tableRow = document.createElement('tr');
    let tableData1 = document.createElement('td');
    let tableData2 = document.createElement('td');
    let tableData3 = document.createElement('td');
    let tableData4 = document.createElement('td');
    let tableData5 = document.createElement('td');
    let tableData6 = document.createElement('td');
    table.appendChild(tableRow);
    tableData1.textContent = tabe.bill;
    tableRow.appendChild(tableData1);
    tableData2.textContent = tabe.openread;
    tableRow.appendChild(tableData2);
    tableData3.textContent = tabe.closeread;
    tableRow.appendChild(tableData3);
    tableData4.textContent = tabe.daySale;
    tableRow.appendChild(tableData4);
    tableData5.textContent = tabe.va;
    tableRow.appendChild(tableData5);
    tableData6.textContent = tabe.sal;
    tableRow.appendChild(tableData6);
}
for (let tab of tble) {
    createAndAppendTodo(tab);
}
// localStorage.removeItem('finalTable');