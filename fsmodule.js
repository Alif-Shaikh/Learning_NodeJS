const fs = require('node:fs');
// fs.readFile('file.txt','utf-8',(err,data)=>{console.log(err,data)})
//non-blocking io comes into pict
//console.log("Finished reading file")


// const a=fs.readFileSync('file.txt')
// console.log(a.toString())
//nodeJS intentionally blocks with sync func
// console.log("finished reading file")



// fs.writeFile('file.txt',"where are you",()=>{
//     console.log("written to the file")
// })
// console.log("Finished reading file")

const b=fs.writeFileSync('file.txt',"where are you")
console.log(b)
console.log("Finished reading file")