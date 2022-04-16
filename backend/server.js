import Messages from "./dbmessage.js"
import express from "express";
import mongoose from 'mongoose';
import Pusher from "pusher";
import cors from 'cors'



//app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1387784",
    key: "b10023d4dfdaddf533f9",
    secret: "edf4b38ec4937ce19622",
    cluster: "ap2",
    useTLS: true
});


//middleware
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin" , "*");
//     res.setHeader("Access-Control-Allow-Headers" , "*");
//     next();
// })

//DB

// pavan
// const url = "mongodb://localhost:27017/WhatsappDb2";
const url = "mongodb+srv://admin:UUo36ZJZP9h2XE91@cluster0.alj5s.mongodb.net/whatsdb?retryWrites=true&w=majority";
mongoose.connect(url);

let db = mongoose.connection;
db.once('open', () => {
    console.log("DB connected");

    const msgcollection = db.collection('messagecontents');
    const changeStream = msgcollection.watch();

    changeStream.on("change", async (change) => {
        console.log("A change occured", change);

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                recieved : messageDetails.recieved,
            });
        }
        else {
            console.log("Error triggering pusher");
        }
    });
})

//api routes
app.get('/', (req, res) => {
    res.status(200).send('hello world!')
})

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbmessage = req.body;
    Messages.create(dbmessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})


//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))