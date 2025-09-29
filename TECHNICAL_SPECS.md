# Technical Specifications - Tango.me Clone

## 📋 System Requirements

### Development Environment
- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Browser**: Modern browser with ES2020 support

### Runtime Dependencies
```json
{
  "@supabase/supabase-js": "^2.57.4",
  "lucide-react": "^0.344.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.9.1",
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.18",
  "eslint": "^9.9.1",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.11",
  "globals": "^15.9.0",
  "postcss": "^8.4.35",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.5.3",
  "typescript-eslint": "^8.3.0",
  "vite": "^5.4.2"
}
```

## 🏗️ Component Specifications

### Header Component
```typescript
interface HeaderProps {
  onMenuClick: () => void;
}
```
- **Functionality**: Navigation, logo display, menu trigger
- **Icons**: Video, Trophy, Gamepad2, MoreHorizontal
- **Responsive**: Hidden navigation on mobile

### LoginModal Component
```typescript
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'email' | 'phone';
}
```
- **Functionality**: Email/phone authentication forms
- **Validation**: Email format, password requirements
- **Styling**: Glassmorphism with backdrop blur

### ProfileCarousel Component
- **Data Structure**: Array of profile objects
- **Animation**: CSS keyframes with infinite loop
- **Performance**: Duplicated array for seamless scrolling

### MenuDropdown Component
```typescript
interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}
```
- **Functionality**: Navigation menu overlay
- **Positioning**: Absolute positioning from header

## 🎨 Design Specifications

### Color System
```css
/* Primary Colors */
--pink-primary: #FF1B6B;
--purple-primary: #8B5CF6;

/* Gradients */
--gradient-primary: linear-gradient(to right, #FF1B6B, #8B5CF6);
--gradient-background: linear-gradient(to bottom right, #111827, #581c87, #be185d);

/* Opacity Variants */
--white-10: rgba(255, 255, 255, 0.1);
--white-20: rgba(255, 255, 255, 0.2);
--black-40: rgba(0, 0, 0, 0.4);
--black-60: rgba(0, 0, 0, 0.6);
```

### Typography Scale
```css
/* Headings */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-6xl { font-size: 3.75rem; line-height: 1; }
.text-7xl { font-size: 4.5rem; line-height: 1; }

/* Body Text */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }

/* Small Text */
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
```

### Spacing System
```css
/* 8px Grid System */
.space-y-2 { margin-top: 0.5rem; }  /* 8px */
.space-y-4 { margin-top: 1rem; }    /* 16px */
.space-y-6 { margin-top: 1.5rem; }  /* 24px */
.space-y-8 { margin-top: 2rem; }    /* 32px */

/* Padding */
.p-4 { padding: 1rem; }      /* 16px */
.p-6 { padding: 1.5rem; }    /* 24px */
.p-8 { padding: 2rem; }      /* 32px */
```

## 🔄 Animation Specifications

### Profile Carousel Animation
```css
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}
```

### Hover Animations
```css
/* Button Hover */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Image Hover */
.group-hover\:scale-110 {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
```

### Transition Specifications
```css
.transition-colors {
  transition: color 0.15s ease-in-out;
}

.transition-all {
  transition: all 0.2s ease-in-out;
}

.duration-200 {
  transition-duration: 0.2s;
}
```

## 📱 Responsive Breakpoints

### Tailwind CSS Breakpoints
```css
/* Small devices (640px and up) */
@media (min-width: 640px) { .sm\: }

/* Medium devices (768px and up) */
@media (min-width: 768px) { .md\: }

/* Large devices (1024px and up) */
@media (min-width: 1024px) { .lg\: }

/* Extra large devices (1280px and up) */
@media (min-width: 1280px) { .xl\: }
```

### Component Responsiveness
- **Header**: Navigation hidden on mobile, hamburger menu
- **Hero Text**: Scales from 4xl to 7xl based on screen size
- **Login Buttons**: Stack vertically on mobile
- **Profile Carousel**: Maintains aspect ratio across devices

## 🔧 Build Configuration

### Vite Configuration
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
  },
});
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 🚀 Performance Specifications

### Bundle Size Targets
- **JavaScript Bundle**: < 200KB gzipped
- **CSS Bundle**: < 50KB gzipped
- **Total Assets**: < 500KB initial load

### Loading Performance
- **Time to Interactive**: < 3 seconds
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds

### Runtime Performance
- **Animation Frame Rate**: 60 FPS
- **Memory Usage**: < 50MB heap size
- **CPU Usage**: < 10% on modern devices

## 🔒 Security Specifications

### Input Validation
```typescript
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password requirements
const passwordRequirements = {
  minLength: 8,
  requireNumber: true,
  requireSpecialChar: true,
};
```

### Content Security Policy
```http
Content-Security-Policy: 
  default-src 'self';
  img-src 'self' https://images.pexels.com;
  style-src 'self' 'unsafe-inline';
  script-src 'self';
```

## 📊 Testing Specifications

### Unit Testing (Recommended)
```bash
# Test framework setup
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

### Test Coverage Targets
- **Component Coverage**: > 80%
- **Function Coverage**: > 90%
- **Line Coverage**: > 85%

### E2E Testing (Recommended)
```bash
# Playwright setup
npm install --save-dev @playwright/test
```

## 🌐 Browser Support Matrix

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome  | 90+     | Full Support  |
| Firefox | 88+     | Full Support  |
| Safari  | 14+     | Full Support  |
| Edge    | 90+     | Full Support  |
| Opera   | 76+     | Full Support  |

### Feature Support
- **CSS Grid**: Full support
- **Flexbox**: Full support
- **CSS Animations**: Full support
- **ES2020 Features**: Full support
- **WebP Images**: Fallback to JPEG

## 📈 Monitoring & Analytics

### Performance Monitoring
```javascript
// Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Error Tracking
```javascript
// Error boundary implementation
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
}
```

---

This technical specification provides detailed implementation guidelines and requirements for the Tango.me login page clone, ensuring consistent development practices and optimal performance.