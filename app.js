// const { json } = require("express/lib/response");
const http=require("http");
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write(JSON.stringify({'name':'ghanshyam prajapati','email':'gp941187@gmail.com','phonenumber':'96669607710'

  }));
  res.write("hello ghanshyam prajapati nand sarwai".warn);
  res.end('<h1 style="color:red">hello world neeraj</h1>\n'.error)    
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)});
