import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import MenuDropdown from './components/MenuDropdown';
import ProfileCarousel from './components/ProfileCarousel';
import VideoBackground from './components/VideoBackground';

function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <VideoBackground />
      <div className="relative z-10">
        {/* Header */}
        <div className="relative z-20">
          <Header onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col justify-between min-h-screen pt-8">
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="text-center max-w-4xl">
              {/* Hero Section */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Connect Live, Now!
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Chat and engage with real people - just one click away.
              </p>

              {/* Login Options */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => setIsEmailModalOpen(true)}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-200 transform hover:scale-105 group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Continue with Email</span>
                </button>
                
                <span className="text-white/60 font-semibold">OR</span>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => alert('Google login is currently under maintenance. Please use email or phone login.')}
                    className="w-14 h-14 bg-white/50 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg cursor-not-allowed opacity-60 relative"
                    title="Under Maintenance"
                  >
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => setIsPhoneModalOpen(true)}
                    className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200"
                  >
                    <Phone size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Carousel */}
          <ProfileCarousel />
        </div>

        {/* Modals */}
        <LoginModal 
          isOpen={isEmailModalOpen} 
          onClose={() => setIsEmailModalOpen(false)} 
          type="email"
        />
        <LoginModal 
          isOpen={isPhoneModalOpen} 
          onClose={() => setIsPhoneModalOpen(false)} 
          type="phone"
        />
        
        {/* Menu Dropdown */}
        <MenuDropdown 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </main>
  );
}

export default App;