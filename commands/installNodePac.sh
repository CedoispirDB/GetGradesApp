#!/bin/bash

function install() {
    npm install dotenv@10.0.0&
    npm install express@4.17.1&
    npm install nodemailer-smtp-transport@2.7.4&
    npm install nodemailer@6.6.3&
    npm install puppeteer@10.2.0&
}