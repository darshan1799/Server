const mongoose = require('mongoose');
// let url = "mongodb://localhost:27017/";
let url = "mongodb+srv://darshan:sutariya@cluster01.qdsxihd.mongodb.net/Post?retryWrites=true&w=majority&appName=Cluster01"
mongoose.connect(url).then(()=>
{
    console.log("Database Connected");
});
 let PostSchema =new mongoose.Schema({
    title:{
        type : String,
        required:true,
       
    },
    body: 
    {
    type : String,
    required:true
    
    },
    reactions: 
    {
     type : Object
    },
    tags:
    {
        type : Array
        
    },
    userId :
    {
        type : String,   
        required:true
    }
});
module.exports = mongoose.model('PostData',PostSchema);

