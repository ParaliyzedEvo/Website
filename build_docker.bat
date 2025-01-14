@echo off
docker build -t website .

docker ps -q -f name=website-container > nul
if %errorlevel% equ 0 (
    echo "Container 'website-container' is already running. Stopping and removing it..."
    docker stop website-container
    docker rm website-container
)

echo "Running the container..."
docker run -d -p 8080:80 --name website-container website
