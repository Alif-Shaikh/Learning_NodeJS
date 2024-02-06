const path = require('node:path');
const a=path.basename('C:\\temp\\myfile.html');
console.log(a);  //myfile.html
const b=path.dirname('C:\\temp\\myfile.html');
console.log(b);  //C:\temp
const c=path.extname(__filename);
console.log(c);  //.js
console.log(__filename);   //e:\Study\Workplaces\NodeJS_Workspace\pathmodule.js
