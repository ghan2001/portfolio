// const app=require("./app.js");
// const fs=require('fs');
// fs.writeFileSync("hellofile","ghanhswyma prajapati nand ");
// console.log(app);
// console.log(app.x);
// console.log(app.m());
// console.log(__dirname);
// console.log(__filename);



// console.log("ghanshyam prajapati");
// console.warn("hidden vrains");
// for(i=0;i<=50;i++){
//           if(i%2==0){
//                     // console.log(i+" is even number "); 
//           }
//           else{
//           //          / console.warn(i+" is odd number ");
//           }        
// }
// const  arra=[2,3,4,5,6,7,8,9];
//  let result = arra.filter((item)=>{
//           return item>3
// })
// console.log(result);
// console.log("Package.json");
const colors=require("colors");
// const colors = require('colors'); 

// console.log('Hello, GeeksforGeeks Learner'.bgYellow);
// console.log('Hello, GeeksforGeeks Learner'.red);
//  console.log('Hello, GeeksforGeeks Learner'.underline);  
// console.log('Hello, GeeksforGeeks Learner'.italic);  
// console.log('Hello, GeeksforGeeks Learner'.bold);  
// console.log('Hello, GeeksforGeeks Learner'.inverse);

// const colors = require('colors'); 
colors.setTheme({ 
    info: 'green', 
    data: 'grey', 
    help: 'cyan', 
    warn: ['yellow','underline'], 
    debug: ['blue','bold'], 
    error: ['red', 'underline', 'bgWhite']
    


}); 
  
console.log("This is a debug line");
console.log("This is an error".error); 
console.log("This is a warning".warn);
console.log("My name is ghanshyam".green);


