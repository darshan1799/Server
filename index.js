const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
let url = "mongodb://localhost:27017/";
let connect = new MongoClient(url);
require('dotenv');

app.use(express.json());

app.post('/',async(req,res)=>
{
    let db = connect.db("post");
    let collection = db.collection("PostData");
    let result =await collection.insertOne(req.body);
    res.send(result);
});
app.listen(process.env.PORT||2000,()=>
{
    console.log("App Active");
});