const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const cors = require('cors');
const connection = require('./db');


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({  
    secret: 'mySecretKey', 
    resave: false,
    saveUninitialized: false
  }));

app.use(cors({
    origin: 'http://localhost:3306',
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200, 
  }));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

connection.connect((err) => {
  if (err) {
    console.error('DB 연결 실패: ' + err.stack);
    return;
  }
  console.log('DB 연결 성공');
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public'));
  });

  
  
  const port = 8864;
  app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
  });