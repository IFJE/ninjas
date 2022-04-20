import express = require('express');

const { register, login, authenticate } = require('../controllers/authController');
const { getData } = require('../controllers/userInfoController');

const router = express.Router();

router.post('/register', register, (req : express.Request, res : express.Response) => res.sendStatus(201));
router.post('/login', login, (req : express.Request, res : express.Response) => {
  if (res.locals.loggedIn === true) {
    return res.sendStatus(201);
  }
  return res.sendStatus(401);
});

router.get('/data', authenticate, getData, (req: express.Request, res: express.Response) => res.status(200).json(res.locals.data));

module.exports = router;
