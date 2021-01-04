var express = require("express")

var app = express()

var port = process.env.PORT || 3001

var html = require("./routes/html")
var api = require("./routes/api")
//  allows access to everyone. images, css, html, etc
app.use(express.static("public")) 

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(html)
app.use(api)
app.listen(port, function(){
    console.log("app is listening on PORT" +port)
})