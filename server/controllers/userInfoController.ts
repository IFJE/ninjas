import express = require('express');

const db = require('../models/ninjaModels');

const getUsersQuery : string = 'SELECT * FROM public."Users"';

module.exports = {
  async getInterested(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    const users : Awaited<Promise<object[]>> = await db.query(getUsersQuery).rows;
    console.log(users, 'USERS QUERY');
    res.locals.users = users;
    return next();
  },
};
