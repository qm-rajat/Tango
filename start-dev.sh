#!/bin/bash

echo "Starting Tango Live Streaming Platform Development Environment..."
echo ""

echo "Starting Backend Server..."
gnome-terminal -- bash -c "cd server && npm install && npm start; exec bash" &

echo ""
echo "Waiting for backend to start..."
sleep 5

echo "Starting Frontend Server..."
gnome-terminal -- bash -c "npm run dev; exec bash" &

echo ""
echo "Both servers are starting..."
echo "Backend: http://localhost:3001"
echo "Frontend: http://localhost:5173"
echo ""
echo "Check the Backend Server window for the Ngrok public URL"
echo "All form submissions will be logged to the Backend Server terminal"
echo ""
echo "Press any key to continue..."
read -n 1
