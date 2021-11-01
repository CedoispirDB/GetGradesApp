const fetch = require("node-fetch");
require("./utils")

module.exports = sendEmail = async (data, receiver) => {
    let info = data[0];
    let old = data[1]

    console.log(old)
    
    let text = "";
    let url = "";
    
    let oldAvg;


    for (var i = 0; i < info.length; i++) {

        oldAvg = old[i][0];
        
        text = text + `Class: ${info[i][3]}\nGrade: ${old[i][1]} -> ${info[i][2]}\nAverages: ${oldAvg} -> ${info[i][1]}\n\n`
    
    }

  
    if(receiver.length > 1) {
        for (var i = 0; i < receiver.length; i++) {
            url = `http://localhost:4800/send?receiver=${receiver[i]}&subject=Gradebook updated&text=${text}`;
            await fetch(url);
        }
    } else {
        url = `http://localhost:4800/send?receiver=${receiver[0]}&subject=Gradebook updated&text=${text}`;
        await fetch(url)
            // .then(info => info.json())
            // .then(data => console.log(data))
    }
}


