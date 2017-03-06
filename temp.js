window.onload = function() {
	document.getElementById("startDate").oninput = log;
}

function log() {
	console.log(document.getElementById("startDate").value);
}