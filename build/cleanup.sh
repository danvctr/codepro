#!/bin/bash
export WEB_DIR="/var/www/codep.ro/"

if [ ! ${PWD##*/} == "build" ]
  then
    echo "Make sure you run this script from the build dir!"
    exit
fi

echo "OK, let's do this."
sleep 1
clear

echo "Copying files to web server dir..."
cd ..
cp -rf * $WEB_DIR
echo "Removing README.md..."
cd $WEB_DIR
rm README.md
echo "Removing build dir..."
rm -rf ./build/

echo ""
echo "Done."
sleep 3
