@echo off
docker build --no-cache -t website .

REM Stop and remove the container if it exists
docker ps -a -q --filter "name=website-container" >nul 2>&1
if not errorlevel 1 (
    echo "Stopping and removing 'website-container'..."
    docker stop website-container >nul 2>&1
    docker rm website-container >nul 2>&1
)

echo "Running the container..."
docker run -d -p 8080:80 --name website-container -v "%cd%:/usr/local/apache2/htdocs" website:latest
pause