// import fs from 'fs'

// for(let i = 0; i<10000; i++){
//     fs.writeFileSync("./data.txt",`${i}`,{flag : "a"});
// }
import {createReadStream} from "fs";
// const stream =  createReadStream('./data.txt',{highWaterMark : 9000}) 
const stream =  createReadStream('./data.txt',{encoding : 'utf-8'}) 
stream.on('data',(data) => {
    console.log(data)
})
// high watermark control the size of buffer 