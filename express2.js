const express=require('express');
const app=express();
app.get("", (req, res) => {
  res.send(`
  
       <input type='text' placeholder='Enter your name'>
       <input type='button' name='submit' value= 'submit'>
  
  
  `);
});

app.get('/about',(req,res)=>{
          res.send(`
          <div> name: ghanshyam prajapati</div>
          <div> name: ghanshyam prajapati</div>
          <div> name: ghanshyam prajapati</div>
          <div> name: g
          <div> name: ghanshyam prajapati</div>hanshyam prajapati</div>
          <a href="/about">abiout us </a>
          `)
});
app.get('/help',(req,res)=>{
  res.send(`
  <h1>if have any thlout  so please call me 9669607710</h1>
  `);
})


app.get('/help/massage',(req,res)=>{
          res.send(`
          <h1>if have any thlout  so please call me 9669607710  use my whatsapp  number </h1>
          <marquee style="color:red">hello mr. Ghanshyam prajapati village nand2 sarwai district  chhatarpur mp </marquee>
         
          <button> <a href="/about">about us </a></button>
          `);
        })


app.get('/1',(req,res)=>{


res.send([{
          'name':'ghanshyam',
          'village':'nand'
}]) 
})       

app.listen(8000);