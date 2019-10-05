let url=require("url");

module.exports=function(app,webUrl){
    app.all("*",function(req,res){
        let specialUrl=false;
        let requestUrl=req.url;
        let path=url.parse(requestUrl).pathname;
        if(path==="/favicon.ico") specialUrl=true;

        if(!specialUrl){
            if(path==="/") path="/index";
            else{
                let _length=path.length;
                if(path.slice(_length-5)===".html"){
                    path=path.slice(0,_length-5);
                }else path="";
            }
            try{
                let tmpJs=require("./templateJs"+path+".js");
                tmpJs(req,res,path,webUrl);
            }catch(err){
                console.log(err.message);
                res.sendStatus(404);
            }
        }
    });
}