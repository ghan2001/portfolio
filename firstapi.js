const http=require("http");
// const data=require('./data');
const data=require('./connection.js');
console.log(JSON.stringify(data));
// const { json } = require("express/lib/response");
// const http=require("http");

const hostname = '127.0.0.1'
const port=8000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write(data)
  res.write(JSON.stringify(data));
  // res.write(JSON.stringify({'name':'ghanshyam prajapati','email':'gp841187@gmail.com','phonenumber':'96669607710'}));
  // res.write(JSON.stringify({'name':'ghanshyam prajapati','email':'gp841187@gmail.com','phonenumber':'96669607710'}));
  // res.write(JSON.stringify({'name':'ghanshyam prajapati','email':'gp841187@gmail.com','phonenumber':'96669607710'}));
 

  res.end('<h1 style="color:red">hello world neeraj</h1>\n'.error)
})


