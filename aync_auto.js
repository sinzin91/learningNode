var async = require('async');

async.auto({
	numbers: function (callback) {
		setTimeout(function () {
			callback(null, [ 1, 2, 3, ]);
		}, 1500);
	},
	strings: function (callback) {
		setTimeout(function () {
			callback(null, [ "a", "b", "c" ]);
		}, 2000);
	},
	// do not execute this function until numbers and strings are done
	// thus_far is an object with numbers and strings as arrays
	assemble: [ 'numbers', 'strings', function (callback, thus_far) {
		callback(null, {
			numbers: thus_far.numbers.join(", "),
			strings: "'" + thus_far.strings.join("', '") + "'"
		});
	}]
},
// this is called at the end when all other functions have executed. Optional.
function (err, results) {
	if (err) 
		console.log(err);
	else
		console.log(results);
});