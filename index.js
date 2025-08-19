const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/thakur');
  console.log('db connected')
}
const userSchema = new mongoose.Schema({
    username: String,
    Lastname: String,
    email:String,
    password:Number,

    // hotel detail
    name:String,
    ltname:String,
    Address:String,
    Number:Number,
    adharcard:Number,
    date:String,
    day:Number,
    person:Number,
    place:String
   
});

const User = mongoose.model('User', userSchema);



const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/thakur',async (req,res)=>{
     
    let user = new User();
    user.username = req.body.username;
    user.Lastname = req.body.Lastname;
    user.email=req.body.email;
//    hotel detail
    user.name=req.body.name;
    user.ltname=req.body.ltname;
    user.Number=req.body.Number;
    user.Address=req.body.Address;
    user.adharcard=req.body.adharcard;
    user.date=req.body.date;
    user.day=req.body.day;
    user.person=req.body.person;
    user.place=req.body.place;
    
    const doc = await user.save();

    console.log(doc);
    
    res.json(doc);
})


server.get('/thakur',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8080,()=>{
    console.log('server started')
})