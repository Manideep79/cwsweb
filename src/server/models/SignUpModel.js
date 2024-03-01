const pool = require('../config/db');

class SignUpModel {
  static create(username, email, password, callback) {
    pool.query('INSERT INTO signup (username, email, password) VALUES (?, ?, ?)', [username, email, password], callback);
  }

  static findByEmail(email, callback) {
    pool.query('SELECT * FROM signup WHERE email = ?', [email], callback);
  }
}

module.exports = SignUpModel;
