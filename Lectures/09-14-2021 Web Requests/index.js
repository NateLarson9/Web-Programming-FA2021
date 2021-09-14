/*

	REST
	REpresentational State Transfer
	
	1. Convention over Configuration
	2. Stateless
	
	CRUD
		Create - Read - Update - Delete

	HTTP Verbs == HTTP Methods
	
	GET - Read data from the server
	POST - Create data on the server, without knowing where it goes yet
	PUT - Replace (or create) data on the server, but you need to know where
	PATCH - Update data on the server, but you need to know where
	DELETE - Delete data from the server, but you do need to know where
	
	
	OPTIONS - Preflight request for Cross-Origin-Resource-Sharing (CORS)
	
	
	How we talk/request to the server:
	1. URL
		WHERE do I want to go?
		e.g. all students? a specific student?
	2. Body == Payload
		WHAT do we want to create or update?
		e.g. The name of a person, an address of a business
	3. Headers
		Metadata of the request
		e.g. the current time of the request, the size of the request
	
	
	How the server talks/responds to us:
	1. Status Code
		200 - OK
		204 - NoContent
		404 - NotFound
	2. The payload/body of the response
	3. Headers
		Metadata of the response
		e.g. the current time on the server, the size of the response, etc.
	
	
*/

var mainUrl = "https://simpleserverbethel.azurewebsites.net/values";

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
			Value: document.getElementById("userValue").value
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
			Value: document.getElementById("userValue").value
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

