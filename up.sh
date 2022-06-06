#!/bin/bash

print_before_command() {
echo ""
echo "######################################"
}

clear;

print_before_command
echo "Install back dependency"
(cd back && npm install)

print_before_command
echo "Install front dependency"
(cd front && npm install)

print_before_command
echo "Run docker-compose down"
docker-compose down;

print_before_command
echo "Run docker-compose up"
docker-compose up -d;

print_before_command
echo "Run migrations"
(cd back && npm run typeorm-sync && npm run typeorm-migration)

print_before_command
echo "Run front"
(cd front && npm run dev)

