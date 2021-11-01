let fs = require("fs");

// Save video name
module.exports = saveData = (file, info) => {
    let dataRead = fs.readFileSync(file);
    let dataParsed = JSON.parse(dataRead);

    let keys = Object.keys(dataParsed);
    let classNames = [];

    for (var i = 0; i < keys.length; i++) {
        classNames.push(keys[i]);
    }

    for (var i = 0; i < classNames.length; i++) {
        let provClass = classNames[i];
        dataParsed[provClass].ClassName = info[i][0];
        dataParsed[provClass].Average = info[i][1];
        dataParsed[provClass].Grade = info[i][2];
    }

    fs.writeFile(file, JSON.stringify(dataParsed), (err) => {
        console.log("new data saved to " + file);
    });
}

// Get the 5 most recent video names from json file
module.exports = getData = (file) => {
    let data = fs.readFileSync(file);
    let dataParsed = JSON.parse(data);

    let keys = Object.keys(dataParsed);

    let grades = [];
    let provInfo = [];


    for(var i = 0; i < keys.length; i++) {
        provInfo.push(dataParsed[keys[i]]["ClassName"]);
        provInfo.push(dataParsed[keys[i]]["Average"]);
        provInfo.push(dataParsed[keys[i]]["Grade"]);
        provInfo.push(keys[i]);
        grades.push(provInfo);
        provInfo = [];
    }


    return grades;

}

module.exports = saveUserInfo = (data, file) => {

    if(data === undefined || data === null) {
        return;
    }

    let info = `USERNAME=${data.school_email}
PASSWORD=${data.school_pass}
RECEIVER=${data.receiver_email}
EMAILPASS=${data.email_pass}
PHONE=${data.receiver_phone}
    `;
    
    fs.writeFile(file, info, (err) => {
        console.log("new data saved to " + file);
    });
}

module.exports = getUserData = (file) => {
    
}

// for test only
module.exports = writeTime = () => {
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let info =  time + "running program"
    fs.writeFile(file, info, (err) => {
        console.log("new data saved to " + file);
    });
}

// saveData("./grades.json");
// console.log(getData("./grades.json"));
