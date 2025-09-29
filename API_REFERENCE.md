# API Reference - Tango.me Clone Components

## 📚 Component API Documentation

### Header Component

#### Props Interface
```typescript
interface HeaderProps {
  onMenuClick: () => void;
}
```

#### Usage Example
```tsx
import Header from './components/Header';

function App() {
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <Header onMenuClick={handleMenuClick} />;
}
```

#### Features
- **Logo Display**: Tango brand logo with gradient styling
- **Navigation Menu**: Desktop navigation with icons
- **Menu Toggle**: Mobile hamburger menu trigger
- **Responsive Design**: Adaptive layout for different screen sizes

---

### LoginModal Component

#### Props Interface
```typescript
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'email' | 'phone';
}
```

#### Usage Examples

##### Email Login Modal
```tsx
import LoginModal from './components/LoginModal';

function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <LoginModal 
      isOpen={isEmailModalOpen}
      onClose={() => setIsEmailModalOpen(false)}
      type="email"
    />
  );
}
```

##### Phone Login Modal
```tsx
<LoginModal 
  isOpen={isPhoneModalOpen}
  onClose={() => setIsPhoneModalOpen(false)}
  type="phone"
/>
```

#### Features
- **Dual Mode**: Email and phone authentication
- **Form Validation**: Built-in input validation
- **Glassmorphism**: Modern backdrop blur effects
- **Responsive**: Mobile-optimized layout
- **Accessibility**: Keyboard navigation support

#### Form Fields

##### Email Mode
- **Email Input**: Email validation with regex
- **Password Input**: Minimum 8 characters, number + special character required
- **Forgot Password**: Link for password recovery

##### Phone Mode
- **Country Code**: India (+91) with flag indicator
- **Phone Number**: Numeric input with formatting
- **Verification**: SMS code delivery message

---

### ProfileCarousel Component

#### Props Interface
```typescript
// No props required - self-contained component
```

#### Usage Example
```tsx
import ProfileCarousel from './components/ProfileCarousel';

function App() {
  return (
    <div>
      {/* Other content */}
      <ProfileCarousel />
    </div>
  );
}
```

#### Data Structure
```typescript
interface Profile {
  id: number;
  name: string;
  viewers: number;
  image: string;
}
```

#### Features
- **Infinite Scroll**: Seamless looping animation
- **Live Indicators**: Pulsing "LIVE" badges
- **Hover Effects**: Scale animations on interaction
- **Performance Optimized**: Efficient CSS animations
- **Responsive**: Maintains aspect ratios across devices

#### Profile Data Example
```typescript
const profiles = [
  {
    id: 1,
    name: 'Ap ♥ ☆',
    viewers: 695,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  // ... more profiles
];
```

---

### MenuDropdown Component

#### Props Interface
```typescript
interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}
```

#### Usage Example
```tsx
import MenuDropdown from './components/MenuDropdown';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuDropdown 
      isOpen={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
    />
  );
}
```

#### Menu Items
- About
- Tango's Agencies Program
- Tango's Resellers Program
- Help Center
- Legal Information

#### Features
- **Overlay Behavior**: Closes on outside click
- **Smooth Transitions**: Fade in/out animations
- **Positioning**: Absolute positioning from header
- **Hover States**: Interactive menu items

---

## 🎨 Styling API

### CSS Custom Properties
```css
:root {
  /* Brand Colors */
  --tango-pink: #FF1B6B;
  --tango-purple: #8B5CF6;
  
  /* Gradients */
  --gradient-primary: linear-gradient(to right, var(--tango-pink), var(--tango-purple));
  --gradient-background: linear-gradient(to bottom right, #111827, #581c87, #be185d);
  
  /* Opacity Variants */
  --overlay-light: rgba(255, 255, 255, 0.1);
  --overlay-medium: rgba(255, 255, 255, 0.2);
  --overlay-dark: rgba(0, 0, 0, 0.4);
}
```

### Tailwind CSS Classes

#### Layout Classes
```css
.container-responsive {
  @apply max-w-7xl mx-auto px-4;
}

.flex-center {
  @apply flex items-center justify-center;
}

.absolute-center {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}
```

#### Component-Specific Classes
```css
/* Header Styles */
.header-nav {
  @apply hidden md:flex items-center space-x-6;
}

.header-logo {
  @apply w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center transform rotate-12;
}

/* Modal Styles */
.modal-backdrop {
  @apply fixed inset-0 bg-black/60 backdrop-blur-sm;
}

.modal-content {
  @apply relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 w-full max-w-md border border-white/10 shadow-2xl;
}

/* Button Styles */
.btn-primary {
  @apply bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105;
}

.btn-secondary {
  @apply bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200;
}
```

---

## 🔄 Animation API

### CSS Keyframes
```css
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Animation Classes
```css
.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
```

---

## 🎯 Event Handling API

### Modal Events
```typescript
// Modal open/close handlers
const handleOpenEmailModal = () => setIsEmailModalOpen(true);
const handleCloseEmailModal = () => setIsEmailModalOpen(false);

const handleOpenPhoneModal = () => setIsPhoneModalOpen(true);
const handleClosePhoneModal = () => setIsPhoneModalOpen(false);
```

### Form Events
```typescript
// Form submission handlers
const handleEmailSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Email authentication logic
};

const handlePhoneSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Phone authentication logic
};

// Input change handlers
const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
};
```

### Menu Events
```typescript
// Menu toggle handler
const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen);
};

// Outside click handler
const handleOutsideClick = (e: MouseEvent) => {
  if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
    setIsMenuOpen(false);
  }
};
```

---

## 📱 Responsive Design API

### Breakpoint Utilities
```typescript
// Custom hooks for responsive behavior
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop };
};
```

### Responsive Classes
```css
/* Mobile First Approach */
.responsive-text {
  @apply text-4xl md:text-6xl lg:text-7xl;
}

.responsive-spacing {
  @apply px-4 md:px-6 lg:px-8;
}

.responsive-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}
```

---

## 🔧 Utility Functions API

### Validation Utilities
```typescript
// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must include a number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must include a special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Phone number formatting
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  
  return phone;
};
```

### Animation Utilities
```typescript
// Scroll animation helper
export const smoothScrollTo = (element: HTMLElement, duration: number = 300) => {
  const start = window.pageYOffset;
  const target = element.offsetTop;
  const distance = target - start;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, distance, duration);
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};
```

---

This API reference provides comprehensive documentation for all components, utilities, and styling systems used in the Tango.me login page clone, enabling developers to understand, extend, and maintain the codebase effectively.