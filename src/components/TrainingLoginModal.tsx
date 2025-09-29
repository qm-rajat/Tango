import React, { useState } from 'react';
import { X, Mail, Phone, AlertTriangle } from 'lucide-react';

interface TrainingLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'email' | 'phone';
  onSubmit: (data: { type: string; email?: string; phone?: string; password: string }) => void;
}

export default function TrainingLoginModal({ isOpen, onClose, type, onSubmit }: TrainingLoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate demo data for training purposes
    const submissionData = {
      type,
      ...(type === 'email' ? { email } : { phone }),
      password: '***MASKED***' // Never store real passwords
    };

    onSubmit(submissionData);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 w-full max-w-md border border-white/10 shadow-2xl">
        {/* Training Warning */}
        <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-xs font-medium">TRAINING SIMULATION - DO NOT USE REAL CREDENTIALS</span>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close login modal"
        >
          <X size={20} />
        </button>

        {type === 'email' ? (
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Continue with Email</h2>
            <p className="text-white/70 mb-6">Enter your email and password to continue</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  aria-describedby="email-warning"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  aria-describedby="password-warning"
                />
                <p id="password-warning" className="text-xs text-white/60 mt-2">
                  Password must be at least 8 characters long and include a number and a special character
                </p>
              </div>
              
              <button 
                type="button"
                className="text-pink-400 text-sm hover:text-pink-300 transition-colors"
              >
                Forgot password?
              </button>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                aria-describedby="submit-warning"
              >
                Continue
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Continue with phone</h2>
            <p className="text-white/70 mb-6">You'll receive a verification code at this number</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex">
                <div className="flex items-center px-3 py-3 bg-gray-800/80 border border-gray-700 rounded-l-lg border-r-0">
                  <div className="w-5 h-3 bg-orange-500 mr-2"></div>
                  <span className="text-white text-sm">+91</span>
                </div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-r-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  aria-describedby="phone-warning"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                aria-describedby="submit-warning"
              >
                Continue
              </button>
            </form>
          </div>
        )}
        
        <p id="submit-warning" className="text-xs text-white/50 text-center mt-6">
          By logging in, you confirm you're over 18 years old and agree to our{' '}
          <span className="text-pink-400 hover:text-pink-300 cursor-pointer">Terms of Use</span>
          {' '}and{' '}
          <span className="text-pink-400 hover:text-pink-300 cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}