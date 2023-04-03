const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
let apptestrouter = require("./routes/application.js")
let userrouter = require("./routes/user.js")
let useridrouter = require("./routes/storeuserid")
app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
app.use('/store-data',apptestrouter)
app.use('/user-login',userrouter)
app.use('/storeuserid',useridrouter)

app.get("/",function(req,res) {
    res.send("hello")
})
app.listen(5000, () => {
    console.log("Server running successfully on 5000");

});