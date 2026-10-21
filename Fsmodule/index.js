// import path from 'path';
// console.log(path.basename("c:\\nodejs\\path.html"));
// console.log(path.basename("c:\\nodejs\\app.js",".js")); 
// console.log(path.dirname("c:\\nodejs\\courses\\app.js")); 
// console.log(path.extname("c:\\nodejs\\app.js",".js")); 
// console.log(path.join("c:","node","app.js")); 
// // go up a level
// console.log(path.join("c:","node","app.js", "..")); 
// console.log(path.normalize("c:\\nodejs\\app.js")); 
// console.log(path.parse("c:\\nodejs\\app.js").base); 
// console.log(path.parse("c:\\nodejs\\app.js").ext); 
// console.log(path.parse("c:\\nodejs\\app.js").name); 
// gives file base name
// crete and write a file
// import * as fs  from 'fs/promises'
//creating a directory
// try {
    // await fs.mkdir('C:\\Users\\Ashhar\\OneDrive\\Documents\\GitHub\\Mean_Tutorials\\Fsmodule\\new');
    // // for multiple folders creation
    // await fs.mkdir('C:\\Users\\Ashhar\\OneDrive\\Documents\\GitHub\\Mean_Tutorials\\Fsmodule\\new'{recursive : true});
    // reading files
    // const files = await fs.readdir('C:\\Users\\Ashhar\\OneDrive\\Documents\\GitHub\\Mean_Tutorials\\Fsmodule');
    // for(file of files){
    //     console.log(file) ;
    // }
    // await fs.rmdir('C:\\Users\\Ashhar\\OneDrive\\Documents\\GitHub\\\Mean_Tutorials\\Fsmodule');
    // create and wrie a file
    // create a copy of file
// await fs.copyFile('Hello.txt','info.txt');
// const info = await fs.stat("Hello.txt");
// console.log (info);
// console.log (info.isFile());

//  await fs.writeFile('Hello.txt','Hello from node JS');
//  await fs.appendFile("Hello.txt","Mission is started " );
 
// const data = await fs.readFile('Hello.txt','utf-8');
// console.log(data)
// } catch (error) {
//     console.log(error)
// }
// created directory successfully
import * as fs from "fs"

fs.mkdir(".\\new",(error)=>{
    if(error) throw error;
    console.log("Directory created successfully");
})