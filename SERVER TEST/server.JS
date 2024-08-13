const http=require('http');
http.createServer((request,response)=>{
     response.writeHead(200,{
        'content-type':'text/plain'
     });
     response.write('this is a start Adams well done'/n);
     response.next();
}).listen(27017);