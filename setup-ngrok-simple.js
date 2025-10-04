#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import readline from 'readline';

const execAsync = promisify(exec);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function checkNgrokInstalled() {
  try {
    await execAsync('npx ngrok version');
    return true;
  } catch {
    return false;
  }
}

async function installNgrok() {
  console.log('Installing ngrok in server directory...');
  try {
    await execAsync('cd server && npm install ngrok@^4.3.3');
    console.log('✅ Ngrok installed successfully!');
    return true;
  } catch (error) {
    console.log('❌ Failed to install ngrok automatically.');
    console.log('Please run manually: cd server && npm install ngrok@^4.3.3');
    return false;
  }
}

async function setupAuth() {
  console.log('');
  console.log('🔑 Ngrok Authentication Setup');
  console.log('=============================');
  console.log('');
  console.log('For a custom subdomain (optional but recommended):');
  console.log('1. Go to: https://ngrok.com/');
  console.log('2. Sign up for a free account');
  console.log('3. Get your authtoken from: https://dashboard.ngrok.com/get-started/your-authtoken');
  console.log('');
  
  const hasAuth = await question('Do you have an ngrok authtoken? (y/n): ');
  
  if (hasAuth.toLowerCase() === 'y' || hasAuth.toLowerCase() === 'yes') {
    const token = await question('Enter your ngrok authtoken: ');
    
    console.log('Setting up authtoken...');
    try {
      await execAsync(`npx ngrok config add-authtoken ${token}`);
      console.log('✅ Authtoken configured successfully!');
      console.log('You can now use custom subdomains.');
    } catch (error) {
      console.log('❌ Failed to configure authtoken.');
      console.log('You can still use ngrok with random URLs.');
    }
  } else {
    console.log('✅ No problem! Ngrok will work with random URLs.');
    console.log('You can set up authentication later if needed.');
  }
}

async function main() {
  console.log('🔧 Ngrok Setup Helper');
  console.log('====================');
  console.log('');
  
  console.log('Checking if ngrok is installed...');
  
  const isInstalled = await checkNgrokInstalled();
  
  if (!isInstalled) {
    console.log('❌ Ngrok is not installed or not accessible.');
    const installed = await installNgrok();
    if (!installed) {
      rl.close();
      return;
    }
  } else {
    console.log('✅ Ngrok is installed!');
  }
  
  await setupAuth();
  rl.close();
}

main().catch(console.error);
