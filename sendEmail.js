const fetch = require("node-fetch");
require("./utils")

// Send email 
module.exports = sendEmail = async (info, receiver) => {

    let text = "";

    for (var i = 0; i < info.length; i++) {
        text = text + `Name: ${info[i][3]}\nAverage: ${info[i][1]}\nGrade: ${info[i][2]}\n\n`;
    }
  
    let url = `http://localhost:3000/send?receiver=${receiver}subject=Gradebook updated&text=${text}`;
  
    await fetch(url);
        // .then(info => info.json())
        // .then(data => console.log(data))

}