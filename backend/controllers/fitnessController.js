
const db = require('../db'); 


exports.getStudents = (req, res) => {
  const sql = 'SELECT * FROM tbl_fitness'; 
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
};


exports.addRegister = (req, res) => {
  const { name, phone_number, email, btc, best_time } = req.body; 

  if (!name || !phone_number || !email || !btc || !best_time) {
    return res.status(400).json({ error: 'Please fill up the forms.' });
  }


  const sql = `
    INSERT INTO tbl_fitness (name, phone_number, email, btc, best_time) 
    VALUES (?, ?, ?, ?, ?)`;
  
  db.query(sql, [name, phone_number, email, btc, best_time], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ message: 'Registration Successful!', studentId: result.insertId });
  });
};
