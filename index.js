require("dotenv").config();
const express = require("express");
const cors = require("cors")

const app = express()

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello server")
})

app.get('/health', (req, res) => {
    res.send("ok")
})


app.listen(process.env.SERVER_PORT, (error) => {
    if (error) { console.log("server running error: ", error); return; }
    console.log('server running successfully at: ', process.env.SERVER_PORT);
})