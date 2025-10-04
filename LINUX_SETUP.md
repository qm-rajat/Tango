# Linux Setup Guide

This guide will help you set up the Tango Live Streaming Platform on Linux systems.

## Prerequisites

Make sure you have the following installed:

### 1. Node.js and npm
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/RHEL/Fedora
sudo dnf install nodejs npm
# or
sudo yum install nodejs npm

# Arch Linux
sudo pacman -S nodejs npm

# Verify installation
node --version
npm --version
```

### 2. Git (if cloning from repository)
```bash
# Ubuntu/Debian
sudo apt install git

# CentOS/RHEL/Fedora
sudo dnf install git
# or
sudo yum install git

# Arch Linux
sudo pacman -S git
```

### 3. Terminal Emulator (for separate windows script)
```bash
# Ubuntu/Debian
sudo apt install gnome-terminal
# or
sudo apt install xterm
# or
sudo apt install konsole

# CentOS/RHEL/Fedora
sudo dnf install gnome-terminal
# or
sudo dnf install xterm
# or
sudo dnf install konsole
```

## Quick Start

### Option 1: Using npm (Recommended)
```bash
# Clone the repository (if not already done)
git clone <repository-url>
cd Tango

# Install dependencies and start both servers
npm start
```

### Option 2: Using Linux Scripts

1. **Make scripts executable:**
   ```bash
   chmod +x start-dev.sh start-dev-terminal.sh
   ```

2. **Run with separate terminal windows:**
   ```bash
   ./start-dev.sh
   ```

3. **Run in single terminal:**
   ```bash
   ./start-dev-terminal.sh
   ```

### Option 3: Manual Setup

1. **Install frontend dependencies:**
   ```bash
   npm install
   ```

2. **Start backend server (Terminal 1):**
   ```bash
   cd server
   npm install
   npm start
   ```

3. **Start frontend server (Terminal 2):**
   ```bash
   npm run dev
   ```

## Troubleshooting

### Script Permission Issues
```bash
chmod +x start-dev.sh start-dev-terminal.sh
```

### Terminal Emulator Issues
If `gnome-terminal` is not available, edit `start-dev.sh` and replace:
```bash
gnome-terminal -- bash -c "command; exec bash"
```
with:
```bash
xterm -e "command; bash"
# or
konsole -e "command; bash"
# or
xfce4-terminal -e "command; bash"
```

### Port Already in Use
```bash
# Check what's using port 3001
sudo lsof -i :3001

# Kill the process
sudo kill -9 <PID>

# Or use a different port by modifying server/server.js
```

### Node.js Version Issues
```bash
# Install Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or source bashrc
source ~/.bashrc

# Install and use Node.js 18+
nvm install 18
nvm use 18
```

## File Structure
```
Tango/
├── start-dev.sh              # Linux script (separate terminals)
├── start-dev-terminal.sh     # Linux script (single terminal)
├── start-dev-universal.js    # Cross-platform Node.js script
├── package.json              # npm scripts
├── server/                   # Backend server
└── src/                      # Frontend React app
```

## Development Commands

```bash
# Start both servers
npm start

# Start only backend
npm run start:backend

# Start only frontend
npm run start:frontend

# Build for production
npm run build

# Run linter
npm run lint
```

## Access URLs

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3001
- **Ngrok Public URL:** Check terminal output for the public URL

## Stopping Servers

- **Single terminal:** Press `Ctrl+C`
- **Separate terminals:** Close the terminal windows or press `Ctrl+C` in each
- **npm start:** Press `Ctrl+C` once to stop both servers
