import express from "express";

const port = 3001;
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello World from Express - ${port} !!!`);
});

app.get('/123', (req, res) => {
  res.send(`123`);
});

// Start the server
app.listen(port, function () {
  console.log('Server is running on port http://localhost:' + port);
});
