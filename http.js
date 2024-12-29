// const http=require("http");
// http.createServer((req,res)=>{
//           res.write("hello ghanshyam prajapati nand sarwai");
//           res.end;
// }).listen(5000);
const http = require('http')
const colors=require("colors");
// colors.setTheme({ 
//           info: 'green', 
//           data: 'grey', 
//           help: 'cyan', 
//           warn: ['yellow','underline'], 
//           debug: ['blue','bold'], 
//           error: ['red', 'underline', 'bgWhite'] 
//       });
      console.log("ghanshyam".red); 

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write("hello ghanshyam prajapati nand sarwai".warn);
  res.end('<h1 style="color:red">hello world neeraj</h1>\n'.error)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})