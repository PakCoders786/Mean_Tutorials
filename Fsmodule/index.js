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
import * as fs  from 'fs/promises'
//creating a directory
try {
    // await fs.mkdir('C:\\Users\\Ashhar\\OneDrive\\Documents\\GitHub\\Mean_Tutorials\\Fsmodule\\new')
    // // for multiple folders creation
    // await fs.mkdir('C:\\Users\\Ashhar\\OneDrive\\Documents\\GitHub\\Mean_Tutorials\\Fsmodule\\new'{recursive : true});
    // reading files
    const files = await fs.readdir('C:\\Users\\Ashhar\\OneDrive\\Documents\\GitHub\\Mean_Tutorials\\Fsmodule')
    for(file of files){
        console.log(file)
    }
    
} catch (error) {
    console.log(error)
}