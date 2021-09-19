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
		Content-Type: The type of the request: application/json, text/plain, text/html, audio/mp3, etc.
		Accept: Please send me this content type back; application/json; fyi, the server can choose to ignore this
		Content-Length: an int, which is the number of bytes in the payload/body
		User-Agent: the name of the web browser/client currently requesting to the server
		Authorization: Send your credentials to the server, usually this is JSON web token
		Location: Used with 3XX level status codes, this is where you need to go; web browser will do this automatically.
		
	
	How the server talks/responds to us:
	1. Status Code
		- See below section
	2. The payload/body of the response
	3. Headers
		Metadata of the response
		Content-Type: The type of the response: application/json, text/plain, text/html, audio/mp3, etc.
		Content-Length: an int, which is the number of bytes in the payload/body
		Date: The time of the response
	
	Status Codes
	
	2XX - 2 is the main status, and XX is the sub-status

	100 - HTTP continuation, big requests, this is automatic from the web server

	200 - OK
		201 - Created, used when data was created on the server, such as with a POST request
		202 - Accepted, work is not done yet, long running started on the server
		204 - NoContent, literally that the body/payload is empty, such as in DELETE requests
		
	300 - Redirect "The content is somewhere else"
		301 - Moved Permanently, the page is never going to be here again
		307 - Moved Temporarily, come back to this server after the cache expires
	
	400 - BadRequest, "It's YOUR fault"
		401 - Unauthorized, your credentials (username/password or JSON token) were incorrect
		403 - Forbidden, your credentials WERE accepted/correct, but you didn't have permission to do what you were trying to do
		404 - NotFound
		
	
	500 - InternalServerError, "It's the Server's fault"
		This almost always means that the server threw an exception
		503 - Service Unavailable, you sent too many requests, and I ran out of memory, Retry-After
		
	
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

