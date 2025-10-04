#!/bin/bash

echo "Starting Tango Live Streaming Platform Development Environment..."
echo ""

echo "Starting Backend Server in background..."
cd server
npm install
npm start &
BACKEND_PID=$!

echo ""
echo "Waiting for backend to start..."
sleep 5

echo "Starting Frontend Server..."
cd ..
npm run dev &
FRONTEND_PID=$!

echo ""
echo "Both servers are starting..."
echo "Backend: http://localhost:3001"
echo "Frontend: http://localhost:5173"
echo ""
echo "Check the terminal for the Ngrok public URL"
echo "All form submissions will be logged to this terminal"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup processes on exit
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait
