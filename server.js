const exp = require('constants');
const express = require('express');
const fs = require('fs')

const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/form/sinfo', (req, res) => {
  const filePath = './data/formData.json'; 
  const { formContent } = req.body;
  if(!formContent){
    return res.status(400).send({status: 'failed'})
  }
  const jsonString = JSON.stringify(formContent, null, 2);
  fs.appendFile(filePath, jsonString, 'utf8', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      console.log('Data saved successfully');
      res.status(200).send('Data saved');
    }
  });
})

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})