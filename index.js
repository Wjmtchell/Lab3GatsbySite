const express = require('express');
const session = require('express-session');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const i18next = require('i18next');
const Backend = require('i18next-locize-backend');
const i18nextMiddleware= require('i18next-http-middleware');
const PORT = process.env.PORT || 5001;
i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        lng:'en',
        fallbackLng: 'en',
        debug: true,
        saveMissing: true,
        backend:{
            projectId: '3cc31e1c-db80-4280-a832-13111693710a',
            apiKey: '640ced37-c6a4-49ce-8d31-4be7f1879971',
            referenceLng: 'en',
            version:'latest'
        },
    });
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

function getOrdinal(n) {
  var s = ["th", "st", "nd", "rd"];
  var v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

express()
  .use(i18nextMiddleware.handle(i18next))
  .use((req, res, next) => {
    // Pass i18next instance to the template
    res.locals.i18next = i18next;
    console.log('i18next in locals:', res.locals.i18next); // Add this line for debuggin
    next();
  })
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended:false}))
  .use(session({secret:'Hello World', resave:false,saveUninitialized:false}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/change-language', async(req, res) => {
    const { lng } = req.query;
    if (lng) {
      i18next.changeLanguage(lng);
    }
    await i18next.reloadResources();
    res.redirect('back'); // Redirect back to the previous page
  })
  .get('/', (req, res) => {
    const message = req.query.message || '';
    const user = req.session.user;
    res.render('pages/index', {user, message});})
  .get('/login', (req,res)=> {
    const message = req.query.message || '';
    const user = req.session.user;
    res.render("pages/login", {user, message});})
  .get('/main_menu', (req,res)=> {
    const message = req.query.message || '';
    const user = req.session.user;
    res.render("pages/main_menu", {user, message});})
  .get('/student_list', (req,res)=> {
    const message = req.query.message || '';
    const user = req.session.user;
    res.render("pages/student_list", {user, message});})
  .get('/student_info', (req,res)=> {
    const message = req.query.message || '';
    const user = req.session.user;
    res.render("pages/student_info", {user, message});})
  .get('/student_edit', (req,res)=> {
    const message = req.query.message || '';
    const user = req.session.user;
    res.render("pages/student_edit", {user, message});})
  .get('/employee_list', async (req,res)=> {
    const message = req.query.message || '';
    const user = req.session.user;
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users WHERE type = 2');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/employee_list', results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }})
  .get('/employee_info', (req,res)=> {
    const message = req.query.message || '';
    const user = req.session.user;
    res.render("pages/employee_info", {user,message});})
  .get('/employee_edit', (req,res)=> {
    const message = req.query.message || '';
    const user = req.session.user;
    res.render("pages/employee_edit", {user,message});})
  .post('/login/auth', async (req,res)=>{
    const {username, password} = req.body;
    try {
      const values = [username,password];
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users WHERE username = $1 AND password= $2', values);
      if (result.rows.length===1){
        req.session.user = username;
        req.session.type = result.rows[0].type;
        if(result.rows[0].type ==1){ 
          res.redirect('/admin?message=Login%20Successful.%20Welcome%20Admin');
          client.release();
        } else{ 
        
          res.redirect('/?message=Login%20Successful.%20Welcome.');
          client.release();
        }
      } else {
       
       //res.send('Login failed. Please make sure you have entered the correct username and password');
        res.redirect('/login?message=Login Failed');
        
      }
    } catch (error) {
      console.error('Login error', error);
      res.status(500).send('Database Connection Failed');
    }
  })
  .get('/admin', async (req, res) => {
    const user = req.session.user;
    if(req.session.type != 1){
      res.redirect('/?message=You%20are%20not%20authorized%20to%20access%20that%20page.')
    }else{
      try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        const results = { 'results': (result) ? result.rows : null};
        res.render('pages/db', results);
        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
    }})
  .post('/admin/add', async (req,res)=>{
    const {username,password,type}=req.body;
    try {
      const client = await pool.connect();
      await client.query('INSERT INTO users (username,password,type) VALUES ($1,$2,$3)',[username,password,type]);

      res.redirect('/admin');
      client.release();
    } catch(error) {
      res.redirect('/admin?message=Error%20Adding%20User');
    }
  })
  .get('/student/:id', async (req,res)=>{
    const id= req.params.id;
    const values = [id];
    const user = req.session.user;
     try {
       const client = await pool.connect();
       const result = await client.query('SELECT * FROM student_info WHERE uid=($1)',values);
       const studentInfo = result.rows[0];
       res.render('pages/student_info', {studentInfo,user});
       client.release();
     } catch(error) {
       res.redirect('/?message=Failed%20To%20Find%20StudentInfo')
     }
  })
  .get('/employee/:id', async(req,res)=>{
    const id= req.params.id;
    const values = [id];
    const user = req.session.user;
     try {
       const client = await pool.connect();
       const result = await client.query('SELECT * FROM employee_info WHERE uid=($1)',values);
       const employeeInfo = result.rows[0];
       res.render('pages/employee_info', {employeeInfo,user});
       client.release();
     } catch(error) {
       res.redirect('/?message=Failed%20To%20Find%20EmployeeInfo')
     }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
