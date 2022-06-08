//onSubmit=>form submit olduğunda ne yapacağıı söyler
//onChange=>input) value'su her değiştiğinde bu değişen
// value'yu bizim her defasında
// elde etmemize olanak sağlayan eventtir.

let submitButton = document.getElementById("submitButton");
let resetButton = document.getElementById("resetButton");
let myTable = document.getElementsByClassName("myTable");
let ul = document.createElement("ul");
ul.setAttribute("id", "theList");
myTable.appendChild(ul);


function submitFunction() {
    let inputVal = document.getElementById("inputArea").value;
    alert(inputVal);
   
}

// let myInput=document.createElement("input");
// myInput.setAttribute("id","inputumuz");
// myInput.setAttribute("type","text");
// myInput.setAttribute("value","buraya yazın");
// myDiv=document.createElement("div");

// myDiv.appendChild(myInput);
// var inputDeger = document.getElementById("inputumuz").value;
// window.alert(inputDeger) 