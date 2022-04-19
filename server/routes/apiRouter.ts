import express, {Express, Request, Response} from 'express';

const router = require('express').Router();
router.get('/', (req: Request, res: Response) => {
  console.log('on api path');
  return res.status(200).json();
});

module.exports = router;
