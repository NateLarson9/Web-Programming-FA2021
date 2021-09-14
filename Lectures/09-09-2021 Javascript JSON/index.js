
function parse() {
	var results = document.getElementById("results");
	results.innerHTML = "";

	displayError("");
	
	// userInput is a string
	var userInput = document.getElementById("userInput").value;
	
	try {
		// turn userInput into JSON
		var userJson = JSON.parse(userInput);
	} catch (error) {
		// this breaks rule 2, only in-page errors are allowed
		// alert(error);
		
		displayError(error);
		return;
	}
	
	if (!Array.isArray(userJson.userArray)) {
		displayError("You are missing the JSON key 'userArray'. It must be an array");
		return;
	}
	
	// from this point on in the code, we know that userJson.userArray is an array.
	
	var ul = document.createElement("ul");
	results.appendChild(ul);
	
	
	userJson.userArray.forEach(function(arrayElement) {
		var li = document.createElement("li");
		
		if (typeof arrayElement === "string") {
			li.appendChild(document.createTextNode("STRING! " + arrayElement));
		} else if (typeof arrayElement === "number") {
			li.appendChild(document.createTextNode("NUMBER! " + arrayElement));
		} else {
			if (arrayElement.name) {
				li.appendChild(document.createTextNode("OBJECT! " + arrayElement.name));
			} else {
				li.appendChild(document.createTextNode("it was an object, but didn't have a name."));
			}	
		}
		
		ul.appendChild(li);
	});
	
}

function displayError(error) {
	document.getElementById("error").innerHTML = error;
}

window.onload = function() {
	document.getElementById("parseButton").onclick = parse;
	
}