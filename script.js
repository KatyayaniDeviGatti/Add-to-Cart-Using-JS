let container2Element = document.getElementById("container2");
let listContainerEl = document.getElementById("listContainer");
let inputElement = document.getElementById("inputText");



function AddToCart(){
   let listElement = document.createElement("li");
   listElement.textContent = inputElement.value;
   listContainerEl.appendChild(listElement)
}