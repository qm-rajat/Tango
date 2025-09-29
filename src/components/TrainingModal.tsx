import React from 'react';
import { X, Shield, AlertCircle, CheckCircle, Eye } from 'lucide-react';

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissionData: {
    timestamp: string;
    demoId: string;
  } | null;
}

export default function TrainingModal({ isOpen, onClose, submissionData }: TrainingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">You Just Fell for a Phishing Attempt!</h2>
          <p className="text-gray-600">This was a security training simulation. Here's what happened:</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-900 mb-1">What You Did</h3>
                <p className="text-red-800 text-sm">
                  You entered credentials on a suspicious website that mimicked a legitimate service.
                  In a real attack, your login information would now be compromised.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Red Flags You Missed</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• The security warning banner at the top</li>
                  <li>• URL doesn't match the real Tango.me domain</li>
                  <li>• No proper SSL certificate indicators</li>
                  <li>• Suspicious timing or context of receiving this link</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-900 mb-1">How to Stay Safe</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Always check the URL carefully before entering credentials</li>
                  <li>• Look for HTTPS and valid SSL certificates</li>
                  <li>• Be suspicious of unexpected login requests</li>
                  <li>• Use two-factor authentication when available</li>
                  <li>• When in doubt, navigate to the site directly instead of clicking links</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {submissionData && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Training Session Data</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Demo ID:</strong> {submissionData.demoId}</p>
              <p><strong>Timestamp:</strong> {submissionData.timestamp}</p>
              <p className="text-green-600 font-medium">✓ No real credentials were stored or transmitted</p>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            I Understand - Close Training
          </button>
        </div>
      </div>
    </div>
  );
}