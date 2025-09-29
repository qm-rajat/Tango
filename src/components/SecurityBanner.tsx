import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

export default function SecurityBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white px-4 py-3 shadow-lg">
      <div className="flex items-center justify-center space-x-3 max-w-4xl mx-auto">
        <Shield className="w-5 h-5 flex-shrink-0" />
        <div className="flex items-center space-x-2 text-sm font-medium">
          <AlertTriangle className="w-4 h-4" />
          <span>SECURITY TRAINING DEMO - This is a simulated phishing page. Do NOT enter real credentials.</span>
        </div>
      </div>
    </div>
  );
}