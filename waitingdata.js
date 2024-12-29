const { rejects } = require("assert");
const { promises } = require("dns");

var a=1;
var b=2;
let waitingdata=new Promise((resolve,rejects)=>{
setTimeout(()=>{
resolve(50);

},1000);
})
waitingdata.then((data)=>{
          console.log(a+data);
})