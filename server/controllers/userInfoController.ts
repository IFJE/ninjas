import express = require('express');

const db = require('../models/ninjaModels');

const getDataQuery : string = `
SELECT * FROM interested_in
JOIN jobs ON interested_in.job_id = jobs.id
JOIN company ON jobs.company_id = company.id
JOIN applications ON applications.interested_id = interested_in.id
JOIN interviews ON interviews.application_id = applications.id
JOIN offers ON offers.interview_id = interviews.id         
WHERE interested_in.user_id = $1;`;

module.exports = {
  async getData(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    const data : any = await db.query(
      getDataQuery,
      [res.locals.userId],
    ).then((result : any) => result.rows);
    res.locals.data = data;
    return next();
  },
};
