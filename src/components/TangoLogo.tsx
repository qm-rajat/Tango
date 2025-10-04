
interface TangoLogoProps {
  size?: number;
  className?: string;
}

import logoImage from '../logo.jpeg';

export default function TangoLogo({ size = 32, className = '' }: TangoLogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Image */}
      <img 
        src={logoImage}
        alt="Tango Logo"
        className="shadow-lg"
        style={{ 
          width: size, 
          height: size,
          objectFit: 'contain',
          backgroundColor: 'transparent'
        }}
      />
      <span className="text-white text-xl font-bold tracking-wide">tango</span>
    </div>
  );
}
