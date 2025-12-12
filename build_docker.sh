#!/bin/bash

# Build the Docker image without using cache
docker build --no-cache -t website .

# Check if the container exists
if [ "$(docker ps -aq -f name=website-container)" ]; then
    echo "Stopping and removing 'website-container'..."
    docker stop website-container
    docker rm website-container
fi

# Run the container
echo "Running the container..."
docker run -d -p 8080:80 --name website-container -v "$PWD:/var/www/html" website:latest