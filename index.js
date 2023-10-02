const express = require('express');
const session = require('express-session');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});



express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended:false}))
  .use(session({secret:'Hello World', resave:false,saveUninitialized:false}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/login', (req,res)=> res.render("pages/login"))
  .post('/login/auth', async (req,res)=>{
    const {username, password} = req.body;
    try {
      const values = [username,password];
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users WHERE username = $1 AND password= $2', values)
      if (result.rows.length===1){
        req.session.user = username;
        //res.send('Logged In!');
        res.redirect('/?message=Login%20Successful');
      } else {
       //res.send('Login failed. Please make sure you have entered the correct username and password');
        res.redirect('/login?message=Login Failed')
      }
    } catch (error) {
      console.error('Login error', error);
      res.status(500).send('Database Connection Failed')
    }
  })
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
