function alertButton () {
	// alert("Hello, world!");
	document.getElementById("textBox").style.fontSize = "2em";
}

function fancyButton () {
	alert("The text input style has changed. The text will appear bold!")
	document.getElementById("textBox").style.fontWeight = "bold";
	document.getElementById("textBox").style.color = "blue";
	document.getElementById("textBox").style.textDecoration = "underline";
}

function boringButton () {
	document.getElementById("textBox").style.fontWeight = "normal";
}

function mooButton() {
	let changeUppperCase = document.getElementById("textBox");

	document.getElementById("textBox").value = changeUppperCase.value.toUpperCase();

	let splitText = changeUppperCase.value.split(".");

    changeUppperCase.value = splitText.join("-Moo.");

}