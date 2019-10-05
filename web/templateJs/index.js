module.exports=function(req,res,path,webUrl){
    res.render(webUrl+"/template"+path);
}