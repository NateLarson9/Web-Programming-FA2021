var mainUrl = "api/students";

function simpleSuccess(data) {
	document.getElementById("results").innerHTML = JSON.stringify(data);
}

function runGet() {
	// fetch by default is GET
	var response = fetch(mainUrl).then(response => {
		return response.json();
	}).then(responseJson => {
		simpleSuccess(responseJson);
	});
}

function runPost() {
	fetch(mainUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json" // mime-types
		},
		body: JSON.stringify({
			firstName: document.getElementById("firstNameValue").value,
			lastName: document.getElementById("lastNameValue").value
		})
	}).then(response => {
		return response.json();
	}).then(responseJson => {
		simpleSuccess(responseJson);
	});
}

function runDelete() {
	var response = fetch(mainUrl + "/" + document.getElementById("userIndex").value, {
		method: "DELETE"
	}).then(response => {
		simpleSuccess("Delete worked!");
	});
}

function runPut() {
	fetch(mainUrl + "/" + document.getElementById("userIndex").value, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json" // mime-types
		},
		body: JSON.stringify({
			firstName: document.getElementById("firstNameValue").value,
			lastName: document.getElementById("lastNameValue").value
		})
	}).then(response => {
		return response.json();
	}).then(responseJson => {
		simpleSuccess(responseJson);
	});
}

window.onload = function() {
	document.getElementById("getButton").onclick = runGet;
	document.getElementById("postButton").onclick = runPost;
	document.getElementById("putButton").onclick = runPut;
	document.getElementById("deleteButton").onclick = runDelete;
}

