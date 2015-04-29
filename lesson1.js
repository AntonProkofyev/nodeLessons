
const fs = require("fs"),
	  spawn = require("child_process").spawn;

var filename = process.argv[2],
	instruction = process.argv[3];
	
fs.watch('tmp.txt', function () {	
	if (instruction == 'Copy') {
		let date = new Date();
		date = date.toLocaleDateString();
		let name = filename.substr(0, filename.lastIndexOf('.')) + date + filename.substr(filename.lastIndexOf('.'));
		let copy = spawn('cmd', ['/s','/c','copy', filename, name]);
		console.log('The copy of file ' + filename + ' was created. The copy name is ' + name);
	} else if (instruction == 'Del') {
		let del = spawn('cmd', ['/s','/c','del', filename]);
		console.log('File ' + filename + ' was deleted.');
	} else {
		console.log('wrong command');
	}
});

console.log('watching for ' + filename);