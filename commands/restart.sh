# TODO: work if there is nothing on jobs.txt
function restart() {
    crontab jobs.txt
}

restart