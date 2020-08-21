const express = require('express');
const path = require('path');
const app = express();
const port = "3000"
//const publicpath = path.join(__dirname, '..', 'public');

app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
  console.log('Server is running on ' + port);
});