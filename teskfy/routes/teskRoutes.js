const teskRoutes =(req ,rse)=>{
    
    if(req.method=="GET"){
        getTesks(req,rse)
    }
    else if(req.method=="POST"){
       createTesks(req,rse)
    }
    else if(req.method=="PUT"){
       updateTesks(req,rse)
    }
    else if(req.method=="DELETE"){
       deleteTesks(req,rse)
    }
    else{
       
        res.setHeader( 404,'Content-Type', 'application/json');
        res.end(JSON.stringify({
            message: "unknow method required"
        }));
    }
}
module.exports =teskRoutes;



