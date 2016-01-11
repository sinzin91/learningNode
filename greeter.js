function Greeter (lang) {
	this.language = lang;
	this.greet() = function () {
		switch (this.language) {
			case "en": return "Hello!";
			case "de": return "Hallo!";
			case "jp": return "Konichiwa!";
			default: return "No speaka that language";
		}
	}
}

exports.hello_world = function () {
	console.log("Hello World");
}

exports.goodbye = function () {
	console.log("Bye bye!");
}

exports.create_greeter = function (lang) {
	return new Greeter(lang);
}