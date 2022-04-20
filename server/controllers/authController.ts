import express = require('express');

const bcrypt = require('bcrypt');
const db = require('../models/ninjaModels');

const saltRounds : number = 10;

module.exports = {
  async register(req : express.Request, res : express.Response, next : express.NextFunction) {
    try {
      const hash : Promise<string> = await bcrypt.hash(req.body.password, saltRounds);
      await db.query('INSERT INTO users(username, password) values($1, $2);', [req.body.username, hash]);
      return next();
    } catch (e) {
      return next({
        status: 401,
        log: 'registration failed',
      });
    }
  },
  async login(req : express.Request, res : express.Response, next : express.NextFunction) {
    try {
      const user : any = await db.query('SELECT * FROM users WHERE username = $1;', [req.body.username]).then((result : any) => result.rows[0]);
      console.log(user);
      const loggedIn : Awaited<Promise<boolean>> = await bcrypt.compare(
        req.body.password,
        user ? user.password : '',
      );
      if (loggedIn) {
        await db.query('DELETE FROM sessions WHERE user_id = $1;', [user.id]);
        const session : any = await db.query('INSERT INTO sessions(user_id) VALUES($1) RETURNING *;', [user.id]).then((result : any) => result.rows[0]);
        res.cookie('ssid', session.ssid, { httpOnly: true });
      }
      res.locals.loggedIn = loggedIn;
      return next();
    } catch (e) {
      return next(e);
    }
  },
  async authenticate(req : express.Request, res : express.Response, next : express.NextFunction) {
    try {
      if (Object.hasOwn(req.cookies, 'ssid')) {
        const session : any = await db.query('SELECT * FROM sessions WHERE ssid = $1;', [req.cookies.ssid]).then((result : any) => result.rows[0]);
        if (session) {
          res.locals.userId = session.user_id;
        }
      }
      if (!res.locals.userId) {
        return res.sendStatus(401);
      }
      return next();
    } catch (e) {
      return next(e);
    }
  },
};
