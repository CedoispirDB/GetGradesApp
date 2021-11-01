#!/bin/bash

function run() {
    
    NAME="myserver.js" 
    RUN=`pgrep -f $NAME`

    while true; do
        RUN=`pgrep -f $NAME`
        if [ "$RUN" == "" ]; then
            echo "Script is not running"
            node /home/pi/GetGradesApp/myserver.js&
        else
            echo "Script is running"
            break

        fi
    done

    node /home/pi/GetGradesApp/gradescrapper.js
}

run