const db = require('../db');

const handleQuery = (res, sql, params, successMessage) => {
  db.query(sql, params, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(successMessage ? { message: successMessage, ...result } : result);
  });
};

exports.getRegister = (req, res) => {
  const sql = 'SELECT * FROM tbl_fitness';
  handleQuery(res, sql, [], null);
};

exports.addRegister = (req, res) => {
  const { name, phone_number, email, btc, best_time } = req.body;

  const missingFields = [];
  if (!name) missingFields.push('name');
  if (!phone_number) missingFields.push('phone_number');
  if (!email) missingFields.push('email');
  if (!btc) missingFields.push('btc');
  if (!best_time) missingFields.push('best_time');

  if (missingFields.length > 0) {
    return res.status(400).json({ error: `Please fill in the following fields: ${missingFields.join(', ')}` });
  }

  const sql = `
    INSERT INTO tbl_fitness (name, phone_number, email, btc, best_time) 
    VALUES (?, ?, ?, ?, ?)`;

  handleQuery(res, sql, [name, phone_number, email, btc, best_time], 'Registration Successful!');
};
