function status() {
    checkScrapper= `pgrep -f gradescrapper.js`
    checkServer=`pgrep -f myserver.js`

    echo Status at `date`:

    if [ "$checkServer" == "" ]; then
        echo "Server is not running"
    else
        echo "Server is running"
    fi

    if [ "$checkScrapper" == "" ]; then
        echo "Web scrapper is not running"
    else
        echo "Web scrapper is running"
    fi

    crontab -l
}

status