# Deploy to Railway

## Steps to Deploy:

### 1. Install Railway CLI
```bash
npm install -g @railway/cli
```

### 2. Login to Railway
```bash
railway login
```

### 3. Deploy Backend
```bash
cd server
railway init
railway up
```

### 4. Deploy Frontend
```bash
cd ..
railway init
railway up
```

### 5. Set Environment Variables
- `VITE_API_URL` = your backend URL
- `CORS_ORIGIN` = your frontend URL

## Benefits:
- Full stack deployment
- Automatic HTTPS
- Custom domains
- Database support
