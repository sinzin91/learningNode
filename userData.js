// global variable
var allUserData = [];

// generic logStuff function that prints to console
function logStuff (userData) {
	if (typeof userData === "string")
	{
		console.log(userData);
	}
	else if (typeof userData == "object")
	{
		for (var item in userData){
			console.log(item + ": " + userData[item]);
		}
	}
}

// a function that takes two parameters, the last one a callback
function getInput (options, callback) {
	allUserData.push (options);

	// Make sure the callback is a function
	if (typeof callback === "function") {
	// Call it, since we have confirmed it is callable
		callback(options);
	}
}


getInput({name:"Rich", specialty:"Javascript"}, logStuff);
