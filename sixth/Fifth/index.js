const fs=require('fs');

const data='mongo,express,Angular,Node'
const filepath='src.txt';
fs.writeFile(filepath,data,(err)=>{
    if(err){
        console.log("Error occurs while writting data to the file.."+err);
    }else{
        console.log("Data inserted Successfully..to the file.."+data);
    }
})