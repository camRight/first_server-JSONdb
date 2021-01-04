var path = require("path")

var router = require("express").Router()


router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/page1", function(req, res){
    res.sendFile(path.join(__dirname, "../public/page1.html"))
})

module.exports=router