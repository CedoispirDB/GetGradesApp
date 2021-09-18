#!/bin/bash

# TODO: check if gradescrapper is running
function stop() {
    NAME="myserver.js" 
    RUN=`pgrep -f $NAME`

    if [ "$RUN" == "" ]; then
        echo "Script is not running"
    else
        echo "Script stopped"
        sudo kill -9 "$RUN"
    fi

    crontab -r
}