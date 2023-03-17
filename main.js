function addToResult(value) {
	document.getElementById("display").value += value;
}

function calculateResult() {
	var result = eval(document.getElementById("display").value);
	document.getElementById("display").value = result;
}

function reset(){
	document.getElementById("display").value = "";
}