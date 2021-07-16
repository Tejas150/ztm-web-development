var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addListElements(div, li, delButton) {
	div.classList.add("wrapper");
	ul.appendChild(div);
	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	delButton.innerText = "Delete";
	div.appendChild(delButton);
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	addListElements(div, li, delButton);
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

function changeStatus(element) {
	if(element.target.tagName === "LI") {
		element.target.classList.toggle("done");
	}	

	if(element.target.tagName === "BUTTON") {
		element.target.parentElement.remove();
	}

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", changeStatus);



