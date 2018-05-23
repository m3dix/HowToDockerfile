"use strict";

const app = require('express')();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello ' + process.argv[2]);
});

app.listen(port, err => {
	if(err){
		console.log(err);
	}
	else{
		console.log('NodeJS started on port ' + port);
	}
})
