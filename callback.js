var fs = require('fs');

fs.readFile('./test.txt', function(err, data) {
	if (err) {
		if (err.fileNotFound) {
			console.log('File Doesn\'t Exist');
			return;
		}
		if (err.noPermission) {
			console.log('No Permission');
			return;
		}
		console.log('Unknown Error');
		return;
	}
	console.log(data);
});