/** Get all strings */
const express = require('express');
const router = new express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`SELECT id, string FROM strings`);

    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
