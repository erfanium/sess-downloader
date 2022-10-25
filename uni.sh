# exit on failed
set -e

if [ -z "$1" ] ; then
    echo 'LINK is requried'
    exit 1
fi

if [ -z "$2" ] ; then
    echo 'FILE NAME is required'
    exit 1
fi

LINK=https://offline.shirazu.ac.ir/14011/$1.zip

wget $LINK -O temp.zip && unzip -p temp.zip > $2.mp4 && rm temp.zip
