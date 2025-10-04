# Deploy to Netlify

## Steps to Deploy:

### 1. Build the Project
```bash
npm run build
```

### 2. Deploy to Netlify
- Go to [netlify.com](https://netlify.com)
- Drag and drop the `dist` folder
- Or connect your GitHub repository

### 3. Backend Deployment
- Use Railway, Render, or Heroku for backend
- Update API URLs in frontend

## Netlify Configuration:
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/api/*"
  to = "https://your-backend-url.com/api/:splat"
  status = 200
```
