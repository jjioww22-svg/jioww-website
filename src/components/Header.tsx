import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logoImage from 'figma:asset/3d3d18c4eb4656933de3dcbd50acaff5c4a28df2.png';
import { WhatsAppButton } from './WhatsAppChat';
import { ImageWithFallback } from './figma/ImageWithFallback';

const menuItems = [
  { 
    label: 'Home',
    href: '#home',
    flagImage: 'https://images.unsplash.com/photo-1637783038917-c8d883362ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGlhbiUyMGZsYWclMjBmbGF0fGVufDF8fHx8MTc2MTc0NzYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    flagName: 'Canada', 
    countryLink: '#country-canada' 
  },
  { 
    label: 'Services',
    href: '#services',
    flagImage: 'https://images.unsplash.com/photo-1739620346255-ccb7ab782d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWFuJTIwZmxhZyUyMGZsYXR8ZW58MXx8fHwxNzYxNzQ3NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    flagName: 'Australia', 
    countryLink: '#country-australia' 
  },
  { 
    label: 'Success Stories',
    href: '#testimonials',
    flagImage: 'https://images.unsplash.com/photo-1680173755804-c9651762b22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTbG92ZW5pYW4lMjBmbGFnfGVufDF8fHx8MTc2MTc0NzYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    flagName: 'Slovenia', 
    countryLink: '#country-slovenia' 
  },
  { 
    label: 'About',
    href: '#about',
    flagImage: 'https://images.unsplash.com/photo-1707732067527-14702bee9d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWx0ZXNlJTIwZmxhZ3xlbnwxfHx8fDE3NjE3NDc2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    flagName: 'Malta', 
    countryLink: '#country-malta' 
  },
  { 
    label: 'Contact',
    href: '#contact',
    flagImage: 'https://images.unsplash.com/photo-1725304084539-8aa7c7b96187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDcm9hdGlhbiUyMGZsYWclMjBmbGF0fGVufDF8fHx8MTc2MTc0NzYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    flagName: 'Croatia', 
    countryLink: '#country-croatia' 
  },
  { 
    label: 'News',
    href: '#news',
    flagImage: 'https://images.unsplash.com/photo-1674440477591-02f7a1b0cad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW4lMjBmbGFnJTIwZmxhdHxlbnwxfHx8fDE3NjE3NDc2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    flagName: 'Germany', 
    countryLink: '#country-germany' 
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-[44px] left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-start gap-12">
          {/* Logo - Left */}
          <motion.a
            href="#home"
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img 
              src={logoImage} 
              alt="JioWW Global" 
              className="h-36 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop: Flags + Navigation aligned vertically */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {menuItems.map((item, index) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                {/* Flag above navigation item */}
                <motion.a
                  href={item.countryLink}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="relative w-16 h-12 overflow-hidden"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <ImageWithFallback
                      src={item.flagImage}
                      alt={`${item.flagName} flag`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <span className="text-[10px] font-semibold text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                    {item.flagName}
                  </span>
                </motion.a>

                {/* Navigation item below flag */}
                <motion.a
                  href={item.href}
                  className="text-black hover:text-primary transition-colors relative group uppercase tracking-wide whitespace-nowrap text-sm"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-amber-400 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-primary transition-colors z-50 mt-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 py-2 border-b border-gray-200 hover:border-primary/30">
                  {/* Flag on left */}
                  <motion.a
                    href={item.countryLink}
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-12 h-9 overflow-hidden rounded shadow-sm">
                      <ImageWithFallback
                        src={item.flagImage}
                        alt={`${item.flagName} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.a>
                  
                  {/* Navigation link */}
                  <a
                    href={item.href}
                    className="text-black hover:text-primary transition-colors text-lg uppercase tracking-wide flex-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}