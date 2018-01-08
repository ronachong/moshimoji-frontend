#!/bin/bash

if [ "$1" = "stage" ]; then
  docker build -t rochong/moshimoji-fe:$2-STAGE . --build-arg STAGE=true
  echo "rochong/moshimoji-fe:$2-STAGE"
elif [ "$1" = "prod" ]; then
  docker build -t rochong/moshimoji-fe:$2-PROD . --build-arg STAGE=false
  "echo rochong/moshimoji-fe:$2-PROD"
else
  echo "first arg must be stage or prod"
fi
