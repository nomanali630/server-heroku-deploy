var express = require ("express")
var server = express();
const PORT = process.env.PORT || 5000 ;

server.get("/",(req,res,next) => {
    console.log("someone get menu");
    res.send("menu: what do you want? food or water");
})
server.listen(5000, () =>{
    console.log("server is running on port " + PORT);
})