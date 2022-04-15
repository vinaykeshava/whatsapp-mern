import Messages from "../backend/dbmessage.js"
import express  from "express";
import mongoose from 'mongoose';
// var MongoClient = require('mongodb').MongoClient;
import { MongoClient } from 'mongodb'

//app config
const app = express()
const port = process.env.PORT || 3001


//middleware
app.use(express.json());

//DB


// mongoose.connect(connection_url);


//   mongoose.connection.on("connected", (err) => {
//     if (err) {
//       console.log(err.kind);
//     } else {
//       console.log("Connected to MongoDB");
//     }
//   });

//???

// pavan
const url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


//api routes
app.get('/', (req,res)=>{
    res.status(200).send('hello world!')
})

app.post('/messages/new', (req,res) => {
    const dbmessage = req.body

    Messages.create(dbmessage, (err,data)  =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})


//listen
app.listen(port,()=> console.log(`Listening on localhost:${port}`))