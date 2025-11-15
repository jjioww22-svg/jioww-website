import { motion } from 'motion/react';
import logoImage from 'figma:asset/3d3d18c4eb4656933de3dcbd50acaff5c4a28df2.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showCountries?: boolean;
}

export function Logo({ className = '', size = 'md', showCountries = true }: LogoProps) {
  const sizes = {
    sm: { 
      circleSize: 'w-32 h-32',
      containerSize: 'w-64 h-64',
      orbitRadius: 128,
      fontSize: 'text-xs'
    },
    md: { 
      circleSize: 'w-24 h-24',
      containerSize: 'w-56 h-56',
      orbitRadius: 112,
      fontSize: 'text-sm'
    },
    lg: { 
      circleSize: 'w-48 h-48',
      containerSize: 'w-96 h-96',
      orbitRadius: 192,
      fontSize: 'text-base'
    }
  };

  const currentSize = sizes[size];

  const countries = [
    { name: 'Canada', color: '#ef4444', angle: 0 },
    { name: 'Australia', color: '#3b82f6', angle: 60 },
    { name: 'Germany', color: '#facc15', angle: 120 },
    { name: 'Slovenia', color: '#60a5fa', angle: 180 },
    { name: 'Malta', color: '#f87171', angle: 240 },
    { name: 'Croatia', color: '#2563eb', angle: 300 }
  ];

  return (
    <motion.a 
      href="#home"
      className={`relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={`relative ${currentSize.containerSize} flex items-center justify-center`}>
        {/* Central Logo Circle */}
        <div className={`absolute bg-white rounded-full ${currentSize.circleSize} flex items-center justify-center shadow-lg p-1 z-10`}>
          <img 
            src={logoImage} 
            alt="JioWW Global" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Orbiting Country Names */}
        {showCountries && countries.map((country, index) => {
          return (
            <motion.div
              key={country.name}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: 360,
              }}
              transition={{
                opacity: { delay: 0.1 * index, duration: 0.5 },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: -(index * (20 / 6)) // Stagger the start positions
                }
              }}
            >
              <div
                className={`${currentSize.fontSize} font-bold whitespace-nowrap`}
                style={{
                  color: country.color,
                  transform: `translateX(${currentSize.orbitRadius}px)`,
                }}
              >
                <motion.span
                  animate={{
                    rotate: -360
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: -(index * (20 / 6))
                  }}
                  style={{
                    display: 'inline-block',
                  }}
                >
                  {country.name}
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.a>
  );
}

// Simplified version for small spaces
export function LogoMark({ className = '', size = 192 }: { className?: string; size?: number }) {
  const logoSize = size; // Logo takes up 100% of container to fill the circle
  
  return (
    <motion.div 
      className={`inline-flex items-center ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div 
        className="bg-white rounded-full flex items-center justify-center shadow-lg"
        style={{ width: `${size}px`, height: `${size}px`, padding: '4px' }}
      >
        <img 
          src={logoImage} 
          alt="JioWW Global" 
          style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}