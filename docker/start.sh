!#/bin/bash

docker-compose down
sudo chmod -R 777 database
docker-compose -f "docker-compose.yml" up -d --build