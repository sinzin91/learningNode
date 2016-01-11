// Define an object with some properties and a method
// We will later pass the method as a callback function to another function

var clientData = {
	id: 094545,
	fullName: "Not Set",
	// setUserName is a method on the clientData object
	setUserName: function (firstName, lastName) {
		// this refers to the fullName property in this object
		this.fullName = firstName + " " + lastName;
	}
}

function getUserInput(firstName, lastName, callback, callbackObj) {
	// Do other stuff to validate firstName/lastName here

	// The use of the Apply function below will set the this object 
	// to be callbackObj
	callback.apply(callbackObj, [firstName, lastName]);
}

// We pass the clientData.setUserName method and the clientData object
// as parameters.  The clientData object will be used by the Apply
// function to set the this object
getUserInput("Barack", "Obama", clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set
console.log(clientData.fullName); // Barack Obama


