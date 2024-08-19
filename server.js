const exp = require('constants');
const express = require('express');

const app = express();

const PORT = 3000;                 

app.use(express.static('public'));
app.use(express.json())

app.post('/form/sinfo', (req, res) => {
  const { formContent } = req.body;
  if(!formContent){
    return res.status(400).send({status: 'failed'})
  }
  res.status(200).send({status: 'recived'});
  console.log(formContent)
})

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})