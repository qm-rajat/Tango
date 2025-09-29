import React from 'react';
import { Video, Trophy, Gamepad2, MoreHorizontal } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="relative z-50 w-full px-4 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center transform rotate-12">
              <div className="w-4 h-4 bg-white rounded-sm transform -rotate-12"></div>
            </div>
            <span className="text-white text-xl font-bold">tango</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <Video size={18} />
              <span>Livestreams</span>
            </button>
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <Trophy size={18} />
              <span>Leaderboard</span>
            </button>
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <Gamepad2 size={18} />
              <span>Games</span>
            </button>
          </nav>
        </div>

        {/* Menu Button */}
        <button 
          onClick={onMenuClick}
          className="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
        >
          <MoreHorizontal size={24} />
        </button>
      </div>
    </header>
  );
}