
const express = require('express');
const bodyParser = require('body-parser');
const questionRoutes = require('./routes/questionRoutes');
const connectDB = require('./db/dbConnection');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(bodyParser.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/questions', questionRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
