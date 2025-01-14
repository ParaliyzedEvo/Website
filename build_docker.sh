#!/bin/bash
docker build -t website .

if docker ps -q -f name=website-container; then
    echo "Container 'website-container' is already running. Stopping and removing it..."
    docker stop website-container
    docker rm website-container
fi

echo "Running the container..."
docker run -d -p 8080:80 --name website-container website
