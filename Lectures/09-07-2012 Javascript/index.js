
function doStuff() {
	
	// debugger;
	
	var fixedDiv = document.getElementById("fixedDiv");
	
	// fixedDiv.style = "bottom: 60%";
	
	/*
	if (fixedDiv.classList.contains("fixedMove")) {
		fixedDiv.classList.remove("fixedMove");
	} else {
		fixedDiv.classList.add("fixedMove");
	}
	*/
	
	fixedDiv.classList.toggle("fixedMove");
	
	var newDiv = document.createElement("div");
	newDiv.appendChild(document.createTextNode("Steven"));
	
	fixedDiv.appendChild(newDiv);
}

window.onload = function () {
	

	var doStuffButton = document.getElementById("doStuffButton");
	
	// NOTE!
	// there are no parens on doStuff here!
	doStuffButton.onclick = doStuff;
}