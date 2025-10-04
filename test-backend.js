// Simple test script to check if backend is running
const fetch = require('node-fetch');

async function testBackend() {
  try {
    console.log('Testing backend connection...');
    
    const response = await fetch('http://localhost:3001/api/health');
    const data = await response.json();
    
    console.log('✅ Backend is running:', data);
    
    // Test verification endpoint
    const verificationResponse = await fetch('http://localhost:3001/api/send-verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        phone: null,
        type: 'email'
      }),
    });
    
    const verificationData = await verificationResponse.json();
    console.log('✅ Verification endpoint working:', verificationData);
    
  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    console.log('Make sure to start the backend server with: cd server && npm start');
  }
}

testBackend();
