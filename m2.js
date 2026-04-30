const express=require("express")
const multer=require('multer')
const app=express()
app.use(express.static(__dirname,{index:'m2.html'}))
var store=multer.diskStorage({
    destination:"multiple",
    filename:function(req,file,cb){
        cb(null.file.fieldname+"-"+Date.now+".doc")
    }
})
var upload=multer({storage:store})
app.post("/uploadfile",upload.array('mypic',5),(req,res)=>{
    const files=req.files
    if(files){
        resizeTo("content-type","text/html")
        for(i of files){
            res.write("<h1> file"+i.originalname+"has been uploaded</h1>")
        }
        res.send()
    }
})
app.listen(6501)