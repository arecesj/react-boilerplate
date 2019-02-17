/** Add new string */
const express = require('express');
const router = new express.Router();
const db = require('../db');

router.post('/', async (req, res, next) => {
  try {
    const { data } = req.body;

    const result = await db.query(
      `INSERT INTO strings (string) 
           VALUES ($1)
           RETURNING id, string`,
      [data],
    );

    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
