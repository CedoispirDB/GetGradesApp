#!/bin/bash


# Initiate program by open webpage to get user info then set up the crontab
function init() {
    origin=$(pwd)

    cd ..

    NAME="myserver.js" 

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

    echo After putting you information in the form please press enter

    sleep 3
        
    open http://localhost:3000/

    read 

    creatCrontab

    cd $origin

}

function creatCrontab() {
    
    crontab -l > ./jobs.txt 

    echo "0 8,12,16,20,18 * * * sh /Users/marcobarreirinhas1/Programs/Javascript/gradeScrapper/commands/run.sh" >> ./jobs.txt
    crontab jobs.txt
}

init
