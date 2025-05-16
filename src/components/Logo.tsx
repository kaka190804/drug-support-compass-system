
import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo = ({ size = 'md', withText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const iconSize = {
    sm: 20,
    md: 24,
    lg: 32,
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <div className="bg-gradient-to-tr from-prevention-600 to-prevention-400 rounded-full p-2 flex items-center justify-center">
          <ShieldCheck className={`text-white`} size={iconSize[size]} strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-health-500 rounded-full border-2 border-white" />
      </div>
      {withText && (
        <div className={`ml-2 ${sizeClasses[size]} font-bold text-prevention-600 tracking-tight`}>
          <span>Safe</span>
          <span className="text-health-600">Life</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
