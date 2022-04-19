const express = require('express');
const path = require("path");
const apiRouter = require('./routes/apiRouter');

const app = express();
console.log('hello world');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRouter);

app.use('*', (req : Request, res : Response|any)  => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});

module.exports = app;
