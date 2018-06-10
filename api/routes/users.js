const express = require('express');

const router = express.Router();
const db = require('../../connectDB');

router.route('/').get((req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
});

router.route('/:Iduser').get((req, res) => {
  const findById = req.params.Iduser;
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, findById, (err, results) => {
    if (err) throw res.end('404');
    res.status(200).json(results);
  });
});
router.route('/').post((req, res) => {
  const data = Object.values(req.body).map(key => key);
  const sql = 'INSERT INTO users(id,fullname,email,password,phone,address,avatar,role,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?)';
  db.query(sql, [...data], (err, row) => {
    if (err) throw res.end('404');
    res.status(200).json({ message: 'Them Thanh Cong', adduser: row.fullname });
  });
});

router.route('/:Iduser').patch((req, res) => {
  const data = Object.values(req.body).map(key => key);
  const temp = Object.keys(req.body).map(key => key);
  const sonSql = [...temp].join('=?,');
  const findById = req.params.Iduser;
  const sql = `UPDATE users SET ${sonSql}=? WHERE id = ${findById}`;
  db.query(sql, [...data], (err, row) => {
    if (err) throw res.end('404');
    res.status(200).json({ message: 'Sua Thanh Cong', adduser: row.fullname });
  });
});

router.route('/:Iduser').delete((req, res) => {
  const findById = req.params.Iduser;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, findById, (err, row) => {
    if (err) throw res.end(404);
    res.status(200).json({ message: 'Xoa Thanh Cong', adduser: row.fullname });
  });
});

module.exports = router;
