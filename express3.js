const express=require('express');
const app2=express();
app2.get('',(req,res)=>{
res.send('hello ghanshyam');
});
app2.listen(8080);