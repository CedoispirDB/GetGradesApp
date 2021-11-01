const fetch = require("node-fetch");
require("./utils")

// Send email 
module.exports = sendEmail = async (info, receiver) => {
    let text;
    let url;

    if (info !== null) {

        text = "";

        for (var i = 0; i < info.length; i++) {
            text = text + `Name: ${info[i][3]}\nAverage: ${info[i][1]}\nGrade: ${info[i][2]}\n\n`;
        }
  
        url = `http://localhost:3000/send?receiver=${receiver}&subject=Gradebook updated&text=${text}`;
    } else {
        let date = new Date();
        let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        url = `http://localhost:3000/send?receiver=${receiver}&subject=Checking at ${time}&text=All working`;
        console.log("sent");
    }
   
    await fetch(url);
        // .then(info => info.json())
        // .then(data => console.log(data))

}



