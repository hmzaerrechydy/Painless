const express = require("express");

const fs = require('fs');

const PORT = 3001;

const app = express();


const data = fs.readFileSync('./data.json');
const obj = JSON.parse(data);



app.get("/read", (req, res) => {
  res.json("Hello, World!"); 
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});