#!/bin/bash

# Build the Docker image without using cache
docker build --no-cache -t website .

# Check if the container exists
if docker ps -a -q --filter "name=website-container" | grep -q .; then
    echo "Stopping and removing 'website-container'..."
    docker stop website-container > /dev/null 2>&1
    docker rm website-container > /dev/null 2>&1
fi

# Run the container
echo "Running the container..."
docker run -d -p 8080:80 --name website-container -v %cd%:/usr/local/apache2/htdocs website
