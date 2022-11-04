const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("lo logre")
})
app.listen(9000,() => console.log("Listen on port 9000"));