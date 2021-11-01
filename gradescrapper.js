const puppeteer = require("puppeteer");
const sendEmail = require("./sendEmail");
require("dotenv").config({ path: "/home/pi/GetGradesApp/.env" });
require("./dataHandler");
require("./utils");
require("./sendEmail");

const delay = ms => new Promise(res => setTimeout(res, ms));

const run = async () => {
    const browser = await puppeteer.launch({ headless: true
, executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--disable-setuid-sandbox'], });
    const page = await browser.newPage();

    let url = "https://plusportals.com/MonsignorPaceHighSchool";

    let info = [];
    try {

        await page.goto(url, { waitUntil: "load", timeout: 0 });
        
        await page.waitForSelector('input[name=UserName]');
        await page.waitForSelector('input[name=Password]');
        await page.waitForSelector('input[name=btnsumit]');

        // Test the difference between type() and $eval()
         await page.type('input[name=UserName]', process.env.USERNAME);
        await page.type('input[name=Password]', process.env.PASSWORD);

      
        await page.click('input[name="btnsumit"]');
        // await page.waitForSelector(".k-grid-content.k-auto-scrollable [role='grid'] [role='row']:nth-child(7) [role='gridcell']:nth-child(3)").then(() => {
        //     console.log("found it");
        // });

        console.log("Start timer");
        await delay(10000);
        console.log("Finish timer");

        let items = [];

        for (var i = 0; i <= 21; i++) {
            const clicked = await page.evaluate((i) => {

                let pointer = document.getElementsByClassName("pointer")[i].innerText;

                return pointer;
            }, i);

            if (i % 3 == 0 && i != 0) {
                info.push(items);
                items = [];
            }

            items.push(clicked);
            // console.log("clicked: " + clicked, i);

        }


    } catch (e) {
        console.log(e);
    }

    await browser.close();

    return Promise.resolve(info);
}


run().then((info) => {
    let comAve;
    let comGrade;

    comAve = compareAverage(info);
    comGrade = compareGrades(info);

    // console.log("Average: ", comAve)
    // console.log("Grade: ", comGrade)


    if(comGrade[0]) {
        let changedGrades = comGrade[1];
        saveData("./grades.json", info);
        sendEmail(changedGrades, [process.env.EXTRAEMAIL, process.env.RECEIVER]);
    } else if(comAve[0]) {
        let changedAverage = comAve[1];
        saveData("./grades.json", info);
        sendEmail(changedAverage, [process.env.RECEIVER]);
    } 
   
});

