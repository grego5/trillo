try {
  require('dotenv').config();
} catch (err) {
  console.log(err.message);
}

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('static'));

app.get("/", function(req, res) {
  res.sendFile('index.html');
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log(
    "Running node on address " + process.env.IP + ":" + process.env.PORT
  );
});
