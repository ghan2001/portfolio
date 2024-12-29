// const readline = require('readline').createInterface({
//           input: process.stdin,
//           output: process.stdout
//         });
        
//         readline.question('Who are you', name1 => {
//           mame1="my name is"+name1;
//           console.log(`Hey there ${name1}!`);
//           readline.close();
//         });
const fs=require('fs');
const colors=require('colors');
const input=process.argv;
// fs.writeFileSync('file1.txt','hello ghanshyam');/
if(input[2]==='add'){
          fs.writeFileSync(input[3],input[4])
          console.log(input[3]+' '+'add successfully');
}else if(input[2]==='remove'){
fs.unlinkSync(input[3]);
console.log(input[3]+'  '+'remove successfully');
}
else{
console.log('invalid input command');
}
fs.writeFileSync(input[2],input[3])
console.log(input[3].red);

        

        