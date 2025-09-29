import React from 'react';

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg overflow-hidden">
        <nav className="flex flex-col text-gray-800">
          <a href="/about" className="px-4 py-3 hover:bg-gray-100">About</a>
          <a href="/agencies" className="px-4 py-3 hover:bg-gray-100">Tango's Agencies Program</a>
          <a href="/resellers" className="px-4 py-3 hover:bg-gray-100">Tango's Resellers Program</a>
          <a href="/help" className="px-4 py-3 hover:bg-gray-100">Help Center</a>
          <a href="/legal" className="px-4 py-3 hover:bg-gray-100">Legal Information</a>
        </nav>
      </div>
    </div>
  );
}