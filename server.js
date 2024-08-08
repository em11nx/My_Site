const exp = require('constants');
const express = require('express');

const app = express();

const PORT = 3000;                 

app.use(express.static('public'));
app.use('/images', express.static('images'));
 
// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})