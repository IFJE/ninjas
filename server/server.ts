import express = require('express');

const apiRouter = require('./routes/apiRouter');

const app = express();
console.log('hello world');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRouter);

app.use('*', (req : express.Request, res : express.Response) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});

module.exports = app;
