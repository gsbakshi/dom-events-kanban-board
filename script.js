var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");
// var deleteBtn = document.getElementById("delete");


function inputLength() {
	return input.value.length;
}

function itemsLength() {
	return items.length;
}

function removeParent(event){
	event.target.parentNode.remove();
}

function deleteButton() {
	var del= document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	items[i].appendChild(btn);
	btn.onclick = removeParent;
}

for(var i = 0 ; i < itemsLength; i++) {
	deleteButton();
}

function strikeThrough(event) {
	if(event.target.tagName === "li") {
		target.classList.toggle("done");	
	}
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML=li.innerHTML + "  ";
	li.appendChild(btn);
	
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);