const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config({path:"./.env"});
require("./dataHandler")


const app = express();

const port = 3000;

const user = "marcodatobarreirinhas@hotmail.com";
const pass = process.env.EMAILPASS;


app.listen(port, () => console.log("Listening..."));

app.use(express.static('public'))

app.get("/", (request, response) => { 
    response.sendFile("/public/index.html", {root: "./public"})

});

app.get("/saveInfo",(request, response) => { 
   let obj = request.query.info;
   saveUserInfo(obj, ".env");
});

app.get("/send", (request, response) => {
    const transporter = nodemailer.createTransport({
        service: "Hotmail", 
        auth: { user, pass }
    });

    transporter.sendMail({
       from: user,
       to: request.query.receiver,
       subject: request.query.subject,
       text: request.query.text
    }).then(info => {
        response.send(info);
    }).catch(error => {
        response.send(error);
    });
});


