import React from 'react';

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div className="absolute top-20 right-4 bg-white rounded-lg shadow-xl py-2 min-w-48">
        <button className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors">
          About
        </button>
        <button className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors">
          Tango's Agencies Program
        </button>
        <button className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors">
          Tango's Resellers Program
        </button>
        <button className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors">
          Help Center
        </button>
        <button className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors">
          Legal Information
        </button>
      </div>
    </div>
  );
}