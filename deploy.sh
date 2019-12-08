#!/bin/bash
rm .env
touch .env
echo HTTPS_PORT=${HTTPS_PORT} >.env
echo HTTP_PORT=${HTTP_PORT} >>.env
echo TOKEN=${TOKEN} >>.env
echo TVINDICATORALERTBOT=${TVINDICATORALERTBOT} >>.env
echo BTCGROUP=${BTCGROUP} >>.env
