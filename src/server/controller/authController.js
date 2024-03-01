const bcrypt = require('bcrypt');
const SignUpModel = require('../models/SignUpModel');

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  SignUpModel.create(username, email, hashedPassword, (error, results) => {
    if (error) return res.status(500).json({ message: 'Internal Server Error' });
    res.status(201).json({ message: 'User successfully registered' });
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  SignUpModel.findByEmail(email, async (error, results) => {
    if (error) return res.status(500).json({ message: 'Internal Server Error' });
    if (results.length > 0) {
      const match = await bcrypt.compare(password, results[0].password);
      if (match) return res.status(200).json({ message: 'User logged in successfully' });
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
};
