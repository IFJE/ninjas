import express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const apiRouter = require('./routes/apiRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);

app.use('*', (req : express.Request, res : express.Response) => {
  res.status(404).send('Not Found');
});

app.use((
  err : Error,
  req : express.Request,
  res : express.Response,
  next : express.NextFunction,
) : void => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign(err, defaultErr);
  console.log(errObj.log);
  console.error(err.stack);
  res.status(errObj.status).send(errObj.message);
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});

module.exports = app;
