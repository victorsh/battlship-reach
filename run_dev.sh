#!/bin/bash

./compile.sh

docker kill $(docker ps -q)
docker rm $(docker ps -qa)
ttab REACH_CONNECTOR_MODE=ALGO reach devnet

cd ./cra-client
npm start
