const http=require('http');
const fs=require('fs')
const port=process.env. PORT || 3000;
const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')

    if(req.url=='/'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1> This is about Alif</h1> <p>heyy...this is about Alif</p>')  
    }
    else if(req.url=='/mypage'){
        res.statusCode=200;
    res.end('<h1> This is Alif</h1> <p>Welcome to the world of nodeJS</p>')
}
   
    
    else{
        res.statusCode=404;
        res.end('<h1>The page is not found on server</h1>')
    }
      
})
server.listen(port,()=>{console.log(`Server is listening on port ${port}`)});
