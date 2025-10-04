#!/usr/bin/env node

import { spawn } from 'child_process';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting Tango Live Streaming Platform Development Environment...');
console.log('');

const platform = os.platform();
const isWindows = platform === 'win32';

// Function to run command
function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: isWindows,
      ...options
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function startServers() {
  try {
    console.log('Installing backend dependencies...');
    await runCommand('npm', ['install'], { cwd: path.join(__dirname, 'server') });

    console.log('Starting backend server...');
    const backendProcess = spawn('npm', ['start'], {
      cwd: path.join(__dirname, 'server'),
      stdio: 'inherit',
      shell: isWindows
    });

    console.log('Waiting for backend to start...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log('Installing frontend dependencies...');
    await runCommand('npm', ['install']);

    console.log('Starting frontend server...');
    const frontendProcess = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      shell: isWindows
    });

    console.log('');
    console.log('Both servers are starting...');
    console.log('Backend: http://localhost:3001');
    console.log('Frontend: http://localhost:5173');
    console.log('');
    console.log('Check the terminal for the Ngrok public URL');
    console.log('All form submissions will be logged to the terminal');
    console.log('');
    console.log('Press Ctrl+C to stop both servers');

    // Handle cleanup on exit
    process.on('SIGINT', () => {
      console.log('\nStopping servers...');
      backendProcess.kill();
      frontendProcess.kill();
      process.exit(0);
    });

    // Keep the process alive
    await new Promise(() => {});

  } catch (error) {
    console.error('Error starting servers:', error.message);
    process.exit(1);
  }
}

startServers();
