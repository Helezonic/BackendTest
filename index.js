require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
//For CSS
app.use('/public', express.static(process.cwd() + '/public')); 

app.get('/', (_, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
