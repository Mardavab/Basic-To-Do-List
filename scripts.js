const inputBox = document.getElementById("input-box");
const listContainer  = document.getElementById("list-container");
let numPendiente = document.getElementById("num-Pendiente");
let numTareasCom = 0;
let numTareasPen = 0;
let numTareas = localStorage.getItem("numTareas");

if (numTareas === null) {
    numTareas = 0;
} else {
    numTareas = parseInt(numTareas);
}

function addTask() {
    if (inputBox.value == '') {
        alert('You must write something!');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        numTareas = numTareas + 1;
        numPendiente.innerHTML = numTareas;
        
    }
    inputBox.value =  '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("checked")) {
        numTareasPen = numTareasPen + 1;
        numTareas = numTareas + 1;
        numPendiente.innerHTML = numTareas;

        
    }else{
        numTareasCom = numTareasCom + 1;
        numTareas = numTareas - 1;
        numPendiente.innerHTML = numTareas;

    }
}, false);

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("numTareas", numPendiente.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    numPendiente.innerHTML = localStorage.getItem("numTareas");
}
function clearData() {
    localStorage.removeItem("data");
    localStorage.removeItem("numTareas");
    listContainer.innerHTML = "";
    numPendiente.innerHTML = "";
}

showTask();
