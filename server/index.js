const express = require('express'); 

const app = express();
const port = 3005; 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// app.get('/api/listing/:id', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
//   })


app.listen(port, () => console.log(`App listening on port ${port}`));