#!/bin/bash

./compile.sh
./clean_docker.sh
ttab REACH_CONNECTOR_MODE=ALGO reach devnet

cd ./cra-client
npm start
