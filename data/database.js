const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: 'Preto2210!!'
})


module.exports = pool