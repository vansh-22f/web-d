//filehandling

const fs=require('fs');// built in module which help to work with file system.

// // 1.
// //sync ...call 
// fs.writeFileSync('./test.txt', 'Hello World'); 
// // this will create a file named test.txt and write "Hello World" in it. 
// // if the file already exists then it will overwrite the existing content.



// // 2.
// //async ...call
// fs.writeFile('./test.txt',"hello from async",(err)=>{})


//3.Read file
//sync ...call      //(path, encoding)
const data=fs.readFileSync('./test.txt','utf-8');
console.log(data);


//async ...call
fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error in reading file", err);
    }
    else{
        console.log("Data from file is", data);
    }
})
//async call expects krta ek callback jisme error ya result return krta hai.





// 5. 
// append file
fs.appendFileSync('./test.txt','\nThis is next line')
fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());