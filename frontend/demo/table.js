let id = document.querySelector('#empId');
let name = document.querySelector("#empName");
let loc = document.querySelector("#empLoc");
let sal = document.querySelector("#empSal");
let dept = document.querySelector("#empDept");

let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");

let table = document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];

submit.addEventListener("click", () => {
    let row = table.insertRow();
    row.insertCell().textContent = id.value;
    row.insertCell().textContent = name.value;
    row.insertCell().textContent = dept.value;
    row.insertCell().textContent = loc.value;
    row.insertCell().textContent = sal.value;    
})

reset.addEventListener("click", () => {
    id.value = "";
    name.value = "";
    loc.value = "";
    sal.value = "";
    dept.value = "#";
})
