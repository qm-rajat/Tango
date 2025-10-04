# Deploy to Vercel

## Steps to Deploy:

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Build the Project
```bash
npm run build
```

### 3. Deploy Frontend
```bash
vercel --prod
```

### 4. Deploy Backend (Separate)
```bash
cd server
vercel --prod
```

## Environment Variables:
- Set `VITE_API_URL` to your backend URL
- Set `CORS_ORIGIN` to your frontend URL

## Custom Domain:
- Add your domain in Vercel dashboard
- Update DNS settings
