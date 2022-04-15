import Messages from "../backend/dbmessage.js"
import express  from "express";
import mongoose from "mongoose";


//app config
const app = express()
const port = process.env.PORT || 9000


//middleware
app.use(express.json());

//DB
const connection_url = 'mongodb+srv://admin:LG6QmVokCLNTeRGG@cluster0.3bdu2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url , {

});


//???

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
            res.status(201).send(`new mesage created : \n ${data}`)
        }
    })
})


//listen
app.listen(port,()=> console.log(`Listening on localhost:${port}`))