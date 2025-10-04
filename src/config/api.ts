// API Configuration
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Local development
// const LOCAL_API_URL = 'http://localhost:3001';
const LOCAL_API_URL = 'https://socket-server-xyia.onrender.com';

// Production URLs (update these when you deploy)
const PRODUCTION_API_URL = 'https://your-backend-url.com';

// Choose the appropriate API URL
export const API_BASE_URL = isDevelopment ? LOCAL_API_URL : PRODUCTION_API_URL;

// API Endpoints
export const API_ENDPOINTS = {
  SEND_VERIFICATION: `${API_BASE_URL}/api/send-verification`,
  VERIFY_CODE: `${API_BASE_URL}/api/verify-code`,
  HEALTH: `${API_BASE_URL}/api/health`,
  UPLOAD: `${API_BASE_URL}/api/upload`
} as const;

// Environment info
export const ENV_INFO = {
  isDevelopment,
  isProduction,
  apiUrl: API_BASE_URL
};
