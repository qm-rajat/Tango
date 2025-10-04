@echo off
echo Starting Tango Live Streaming Platform Development Environment...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd server && npm install && npm start"

echo.
echo Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173
echo.
echo Check the Backend Server window for the Ngrok public URL
echo All form submissions will be logged to the Backend Server terminal
echo.
pause
