var button = document.getElementById("add-task");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var checkbox = document.querySelectorAll(".checkbox");
var li = document.querySelectorAll("li");
var item = document.querySelectorAll(".item");
var deleteBtn = document.getElementById(".delete");

// <!-- var items = document.getElementsByTagName("li"); -->
// <!-- var deleteBtn = document.getElementById("delete"); -->

function updateInput() {
	return checkbox = document.querySelectorAll(".checkbox");
}

function updateLi() {
	return li = document.querySelectorAll("li");
}

function updateItem() {
	return item = document.querySelectorAll(".item");
}

function updateDelete() {
	return deleteBtn = document.querySelectorAll(".delete");
}

function updateAll() {
	updateDelete();
	updateInput();
	updateItem();
	updateLi();
	deleteList();
	toggleList();
}

function deleteList() {
	for(i=0; i<deleteBtn.length; i++) {
		deleteBtn[i].addEventListener("click", removeListItem);
	}
}

function removeListItem() {
	this.parentNode.remove();
}

function toggleList()	{
	for (let i = 0; i < checkbox.length; i++) {
		checkbox[i].addEventListener("click", toggle);
	}
}

function toggle()	{
	this.parentNode.children[1].classList.toggle("done");
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var createCheck = document.createElement("input");
	var createDelete = document.createElement("button");
	var li = document.createElement("li");
	div.classList.add("item");
	createCheck.classList.add("checkbox");
	createDelete.classList.add("delete");
	createCheck.type = "checkbox";
	div.appendChild(createCheck);
	div.appendChild(li);
	div.appendChild(createDelete);
	li.appendChild(document.createTextNode(input.value));
	createDelete.appendChild(document.createTextNode("Delete"));
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		updateAll();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		updateAll();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

updateAll();

// <!-- Original Code -->
// <!-- function itemsLength() {
// 	return items.length;
// }

// function removeParent(event){
// 	event.target.parentNode.remove();
// }

// function deleteButton() {
// 	var del= document.createElement("button");
// 	btn.appendChild(document.createTextNode("Delete"));
// 	items[i].appendChild(btn);
// 	btn.onclick = removeParent;
// }

// for(var i = 0 ; i < itemsLength; i++) {
// 	deleteButton();
// }

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode('Delete'));
// 	btn.setAttribute("class", "btn btn-dark");

// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	li.appendChild(document.createTextNode(" "));
// 	li.appendChild(btn);

// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 	createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 	createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress); -->
