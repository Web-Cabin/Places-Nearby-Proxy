const express = require('express'); 
const axios = require('axios')

const app = express();
const port = 4000; 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.listen(port, () => console.log(`App listening on port ${port}`));