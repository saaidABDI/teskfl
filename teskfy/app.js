const http= require('http');
const { listeners } = require('process');
const teskRoutes = require('./routes/teskRoutes');
const HOSTNAME = "localhost";
const PORT=9000
const server =http.createServer((req,res)=>{
    if(req.url.startsWith('/ tesks')){
        teskRoutess(req,res)






    } else{
       
        res.setHeader( 404,'Content-Type', 'application/json');
        res.end(JSON.stringify({
            message: "sorry,you got losy"
        }));
    }

});
server.listen(PORT,HOSTNAME ,()=>{
    console.log(`Server is running :${PORT}`);
});

