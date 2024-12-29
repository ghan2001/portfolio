const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud');
const filepath=`${dirpath}/apple.txt`;
//create file 
// fs.writeFileSync(filepath,'this is good condition file');
// readf file with directory 
// fs.readFile(filepath, 'utf8',(err,item)=>{
//           console.log(item);
// })
//append file 

// fs.appendFile(filepath,' and file if  good for read and write',(err)=>{
//           if(!err){
//                     console.log("file updated successfully");
//           }
//           else{
//                     console.log(err);

//           }
// })
//rename file 
fs.rename(filepath,`${dirpath}/fruits.txt`,(err)=>{
          if(!err){
                    console.log('file rename successfully updated');
          }
});