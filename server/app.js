const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

/* 跨域許可 */
const corsOptions = {
  origin: 'http://localhost:3002',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())

/* 連線設定 */
const db = mysql.createConnection({
  user: 'story801216' /* 帳號 */,
  host: 'localhost' /* 主機 */,
  password: '123' /* 密碼 */,
  database: 'finalproject' /* 資料庫名稱 */,
})

/* 註冊功能 */
app.post('/create', (req, res) => {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name
  const birthday = req.body.birthday
  const idNumber = req.body.idNumber
  const mobile = req.body.mobile
  const address = req.body.address

  /* 將註冊資料寫入資料庫 */
  db.query(
    `INSERT INTO users (email, password, name, birthday, idNumber, mobile, address) VALUES ('${email}', '${password}', '${name}', '${birthday}', '${idNumber}', '${mobile}', '${address}')`,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('寫入成功')
      }
    }
  )
})

/* 登入功能 */
app.post('/login', function (req, res) {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  db.query(
    `SELECT * FROM users WHERE email='${email}' AND password='${password}'`,
    function (err, rows, fields) {
      console.log(rows)
      if (rows.length === 0) {
        return res.status(500).send('登入失敗!')
      }
      return res.send('登入成功!')
    }
  )
})

/* 阜號 */
app.listen(3001, () => {
  console.log('yey, your server is running on port 3001')
})
