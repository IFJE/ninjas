import express = require('express');

const { register, login, authenticate } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register, (req : express.Request, res : express.Response) => res.sendStatus(201));
router.post('/login', login, (req : express.Request, res : express.Response) => res.sendStatus(201));

router.get('/', (req: express.Request, res: express.Response) => {
  console.log('on api path');
  return res.status(200).json();
});

module.exports = router;
