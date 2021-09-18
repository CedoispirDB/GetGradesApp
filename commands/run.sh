#!/bin/bash

function run() {
    cd ..

    NAME="myserver.js" 
    RUN=`pgrep -f $NAME`

    while true; do
        RUN=`pgrep -f $NAME`
        if [ "$RUN" == "" ]; then
            echo "Script is not running"
            node myserver.js&
        else
            echo "Script is running"
            break

        fi
    done

    node ../gradescrapper.js
}

run