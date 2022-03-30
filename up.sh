#!/bin/bash

clear;

docker-compose down;
docker-compose up -d;

cd back || exit;

npm run dev;

# cd ../front || exit;

# npm run dev;

