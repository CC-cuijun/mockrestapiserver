#/bin/sh
#Create by cuijun 2020-06-10

Usage(){
        echo Usage:
        echo "$0 start|stop|restart|status"
}
Start(){
    nohup node mockapiserver --debug >> logs/run.log 2>&1 &
}

Stop(){
     SIG=$1
     [ -z "$SIG" ] && SIG='-SIGTERM'
#     echo "SIG=$SIG"
     ps ax | grep -i 'mockapiserver' | grep -v grep | awk '{print $1}' | xargs kill "$SIG"
}

Restart(){
    Stop
    Start
}

case $1 in
    start)
        Start
    ;;
    stop)
        Stop "$2"
    ;;
    restart)
        Restart
    ;;
    status)
    ps aux|grep -i 'mockapiserver' |grep -v grep
    ;;
    *)
        Usage
        exit
    ;;
esac
exit

