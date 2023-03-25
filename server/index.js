const express = require('express');
const app = express();
const csv = require('csv-parser');
const fs = require('fs');

const PORT = 5000;

app.get('/attendance', (req, res) => {
  const results = [];

  fs.createReadStream('attendance_details.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.send(results);
    });
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
