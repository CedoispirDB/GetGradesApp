require("./dataHandler")

module.exports = compareAverage = (newGrades) => {
    let currentGrade = getData("./grades.json");

    let changedAverage = [];
    let oldGrades = [];

    for (var i = 0; i < currentGrade.length; i++) {
        let provNew = newGrades[i];
        let provCurr = currentGrade[i];

        if (provNew[0] === provCurr[0]) {
            // Names match
            if (provNew[1] !== provCurr[1]) {
                // Grade changed 
                provNew.push(provCurr[3])
                changedAverage.push(provNew);
                oldGrades.push([provCurr[1], provCurr[2]]);
            }
        } else {
            // Names do not match
            console.log(`name ${provNew[0]} does not match name ${provCurr[0]}`);
            return [false, null, 1];
        }
    }

    if (changedAverage.length > 0) {
        return [true, [changedAverage, oldGrades], 0];
    } else {
        return [false, null, 0]
    }
}

module.exports = compareGrades = (newGrades) => {
    let currentGrade = getData("./grades.json");

    let changedGrades = [];

    for (var i = 0; i < currentGrade.length; i++) {
        let provNew = newGrades[i];
        let provCurr = currentGrade[i];

        if (provNew[0] === provCurr[0]) {
            // Names match
            if (provNew[2] !== provCurr[2]) {
                // Grade changed 
                provNew.push(provCurr[3])
                changedGrades.push(provNew);

            }
        } else {
            // Names do not match
            console.log(`name ${provNew[0]} does not match name ${provCurr[0]}`);
            return [false, null, 1];
        }
    }

    if (changedGrades.length > 0) {
        return [true, changedGrades, 0];
    } else {
        return [false, null, 0]
    }
}


module.exports = checkRange = (newGrades, range) => {
    let currentGrade = getData("./grades.json");

    let changedGrades = [];
    let changed = fasle;


    for (var i = 0; i < currentGrade.length; i++) {
        let provNew = newGrades[i];
        let provCurr = currentGrade[i];

        if (provNew[0] === provCurr[0]) {
            // Names match
            // console.log(parseInt(provNew[1]), range, parseInt(provNew[1]) <= range)
            if (parseInt(provNew[1]) <= range) {
                changedGrades.push(provNew);
                changed = true;
            }
        } else {
            console.log(`new name ${provNew[0]} does not match the old name ${provCurr[0]}`);
        }
    }

    return [changed, changedGrades];
}
