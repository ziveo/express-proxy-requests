import express from "express";
import proxy from "express-http-proxy";

const port = 3000;
const app = express();

app.use('/proxy', proxy('http://localhost:3001'));

app.get('/', (req, res) => {
  res.send(`Hello World from Express - ${port}`);
});


// Start the server
app.listen(port, function () {
  console.log('Server is running on port http://localhost:' + port);
});
