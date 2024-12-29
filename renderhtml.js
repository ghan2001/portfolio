const express=require('express');
const data=require('./data');
const bodyParser = require('body-parser');

const cors = require('cors');



// Middleware
// app.use(bodyParser.json());
// app.use(cors());



const app=express();
const path=require('path');
const public_path=path.join(__dirname,'/public');
//for static web pages
// app.use(express.static(public_path));
app.set('view engine','ejs');


app.get('',(req,resp)=>{
     resp.sendFile(`${public_path}/contact.html`);     
})

const retrunarr={
          name:'ghanshyam',
          age:'24',
          phone:'9669607710',
          skills:['html','css','javascript','databasemkysql']
}
app.get('/profile',(req,resp)=>{
     
          resp.render('profile',{data});
     })



app.get('/about',(req,resp)=>{
          resp.sendFile(`${public_path}/about.html`);     
     })
app.get('/contact',(req,resp)=>{
          resp.sendFile(`${public_path}/contact.html`);     
     })
app.get('/service',(req,resp)=>{
          resp.sendFile(`${public_path}/service.html`);     
     })
app.get('/main',(req,resp)=>{
          resp.sendFile(`${public_path}/main.html`);  
          resp.sendFile(`${public_path}/footer.html`);   
     })       
app.get('*',(req,resp)=>{
          resp.sendFile(`${public_path}/notepage.html`);     
     })     
app.listen(5000);
