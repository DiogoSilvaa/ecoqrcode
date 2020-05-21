const http = require('http');

let app = http.createServer((req,res)=>{
    res.render('public/index',{});
}) 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log('Our app is running on port ${Port}');
});