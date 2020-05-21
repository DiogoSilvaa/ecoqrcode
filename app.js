const http = require('http');

let app = http.createServer((req,res)=>{
    res.render('public/index',{});
    res.end();
}) 

const PORT = process.env.PORT || 3000;