
import logoImage from '../logo.jpeg';

interface TangoIconProps {
  size?: number;
  className?: string;
}

export default function TangoIcon({ size = 24, className = '' }: TangoIconProps) {
  return (
    <img 
      src={logoImage}
      alt="Tango Icon"
      className={`shadow-lg ${className}`}
      style={{ 
        width: size, 
        height: size,
        objectFit: 'contain',
        backgroundColor: 'transparent'
      }}
    />
  );
}
