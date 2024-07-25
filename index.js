const express = require('express');
const app = express();

require('dotenv');
let PostModel = require("./MongoDb");

app.use(express.json());

app.post('/post-data',async(req,res)=>
{  
    let post = new PostModel(req.body);
    let response =await post.save();
    res.send(response);
});
app.listen(process.env.PORT||2000,()=>
{
    console.log("App Active");
});