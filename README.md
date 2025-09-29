# 🔒 Security Training Demo - Tango.me Style Phishing Simulation

A **safe, educational demonstration** of how phishing attacks work, designed to train users to recognize and avoid malicious websites.

## ⚠️ IMPORTANT DISCLAIMER

**This is a security training tool designed for educational purposes only.**

- ✅ **Safe**: No real credentials are stored or transmitted
- ✅ **Educational**: Shows users how phishing works and how to stay safe
- ✅ **Ethical**: Includes clear warnings and educational content
- ❌ **Not for malicious use**: This tool cannot and should not be used for actual phishing

## 🎯 Purpose

This demo helps users understand:
- How convincing phishing pages can look
- What red flags to watch for
- Best practices for online security
- The importance of verifying website authenticity

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Running

```bash
# Clone the repository
git clone <repository-url>
cd security-training-demo

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛡️ Security Features

### Built-in Safeguards
1. **Prominent Warning Banner**: Red security banner always visible
2. **No Data Storage**: Credentials are never stored or transmitted
3. **Educational Modals**: Immediate feedback explaining the risks
4. **Demo Logging Only**: Only logs timestamps and demo IDs
5. **Accessibility**: Full keyboard navigation and screen reader support

### What Gets Logged
```javascript
{
  demoId: "DEMO_ABC123XYZ",
  timestamp: "2025-01-27T10:30:00.000Z",
  submissionType: "email" | "phone",
  credentialsEntered: true
}
```

**What is NOT logged:**
- Actual passwords or credentials
- Personal information
- IP addresses
- Browser fingerprints

## 🎨 Features

### Visual Elements
- **Pixel-perfect Tango.me styling** with dark gradients and modern design
- **Animated profile carousel** with infinite scroll
- **Glassmorphism effects** for modals and overlays
- **Responsive design** optimized for all devices

### Interactive Components
- **Email/Phone login forms** that trigger educational content
- **Security training modal** explaining phishing risks
- **Navigation menu** with dropdown functionality
- **Hover effects** and smooth animations throughout

### Accessibility
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus management** for modals
- **High contrast** warning elements

## 📊 Training Analytics

View training session data in the browser console or localStorage:

```javascript
// View all training sessions
console.log(JSON.parse(localStorage.getItem('securityTrainingLogs')));

// Clear training data
localStorage.removeItem('securityTrainingLogs');
```

## 🔧 Technical Stack

- **React 18.3.1** - Modern UI framework
- **TypeScript 5.5.3** - Type safety and better development experience
- **Tailwind CSS 3.4.1** - Utility-first styling
- **Vite 5.4.2** - Fast build tool and development server
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── components/
│   ├── SecurityBanner.tsx      # Warning banner component
│   ├── TrainingModal.tsx       # Educational modal after submission
│   ├── TrainingLoginModal.tsx  # Safe login form simulation
│   ├── Header.tsx             # Navigation header
│   ├── MenuDropdown.tsx       # Menu component
│   └── ProfileCarousel.tsx    # Animated profile cards
├── App.tsx                    # Main application
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## 🎓 Educational Content

When users submit the form, they see:

### ❌ What They Did Wrong
- Entered credentials on a suspicious site
- Ignored security warnings
- Didn't verify the URL or SSL certificate

### 🚩 Red Flags They Missed
- Security warning banner
- Incorrect domain name
- Missing SSL indicators
- Suspicious context

### ✅ How to Stay Safe
- Always verify URLs before entering credentials
- Look for HTTPS and valid certificates
- Be suspicious of unexpected login requests
- Use two-factor authentication
- Navigate directly to sites instead of clicking links

## 🔒 Privacy & Ethics

### Data Handling
- **No real credentials stored**: All password fields are masked
- **Local storage only**: Demo data stays in the browser
- **No network requests**: No data sent to external servers
- **Transparent logging**: Users can see exactly what's recorded

### Ethical Guidelines
- **Clear warnings**: Multiple indicators this is a training simulation
- **Educational purpose**: Focuses on teaching, not deceiving
- **Immediate feedback**: Users learn right away what happened
- **Positive reinforcement**: Encourages good security practices

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run typecheck

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Styling
Modify `tailwind.config.js` and component styles to match your organization's branding while maintaining the educational warnings.

### Content
Update the educational content in `TrainingModal.tsx` to include organization-specific security policies.

### Logging
Extend the logging functionality in `App.tsx` to integrate with your training management system.

## 🤝 Contributing

This is an educational tool. Contributions should:
- Maintain the educational focus
- Preserve all security warnings
- Improve user safety and awareness
- Follow accessibility best practices

## 📄 License

This project is for educational and training purposes only. Use responsibly and ethically.

---

**Remember**: The goal is to educate users about phishing risks, not to create actual phishing tools. Always use this responsibly and with proper authorization in training environments.