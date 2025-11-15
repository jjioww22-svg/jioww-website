import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

// Custom SVG icons for social media
const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .693-.09 1.093-.18h.008c.594-.134 1.594-.134 2.084.276.643.54.643 1.584.103 2.088-.675.631-1.687.744-2.391.81-.344.033-.558.05-.606.093.03.045.152.18.334.334.91.768 2.574 2.167 3.903 3.096.36.251.566.611.566.976 0 .77-.596 1.472-1.503 1.472-.39 0-.77-.121-1.145-.301-.26-.135-.522-.27-.779-.405-1.085-.568-2.104-1.107-3.063-.523-.528.316-.923.52-1.385.676-.82.276-1.685.227-2.549-.045-.413-.134-.821-.314-1.227-.495-.711-.314-1.383-.614-2.088-.614-.676 0-1.348.3-2.06.614-.405.18-.813.361-1.226.495-.864.272-1.728.32-2.549.045-.463-.157-.857-.36-1.386-.676-.96-.584-1.977-.045-3.063.523-.257.135-.519.27-.778.405-.375.18-.755.301-1.145.301-.908 0-1.504-.702-1.504-1.472 0-.365.207-.725.566-.976 1.329-.929 2.993-2.328 3.903-3.096.182-.154.304-.29.334-.334-.048-.043-.262-.06-.606-.093-.704-.066-1.716-.179-2.391-.81-.54-.504-.54-1.548.103-2.088.49-.41 1.49-.41 2.084-.276h.008c.4.09.793.18 1.093.18.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.86 1.07 11.216.793 12.206.793z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.311-.623-.311-1.544c0-1.445.839-2.524 1.885-2.524.889 0 1.319.668 1.319 1.466 0 .893-.568 2.228-.861 3.467-.245 1.038.52 1.886 1.544 1.886 1.854 0 3.279-1.954 3.279-4.776 0-2.499-1.798-4.248-4.364-4.248-2.973 0-4.716 2.23-4.716 4.533 0 .896.345 1.856.776 2.378.085.104.097.195.072.3-.079.327-.254 1.026-.288 1.17-.046.189-.151.229-.348.138-1.298-.605-2.111-2.505-2.111-4.028 0-3.291 2.394-6.312 6.901-6.312 3.619 0 6.435 2.577 6.435 6.019 0 3.593-2.267 6.488-5.414 6.488-1.057 0-2.052-.549-2.392-1.274 0 0-.523 1.992-.65 2.48-.236.908-.872 2.042-1.297 2.734.978.302 2.018.461 3.094.461 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export function SocialMediaBar() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://business.facebook.com/latest/home?business_id=1779106836235403&asset_id=630359386816727',
      color: '#1877F2',
      hoverColor: '#1565C0'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/jio_worldwide/',
      color: '#E4405F',
      hoverColor: '#D81B60'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/jioworldwide/people/',
      color: '#0A66C2',
      hoverColor: '#004182'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@Jio-Worldwide_jobs/featured',
      color: '#FF0000',
      hoverColor: '#CC0000'
    },
    {
      name: 'Snapchat',
      icon: SnapchatIcon,
      url: 'https://www.snapchat.com/add/jioww_europejob?share_id=tbahpLU7r_k&locale=en-AE',
      color: '#FFFC00',
      hoverColor: '#F7F700'
    },
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@jio_worldwide_jobs',
      color: '#FFFFFF',
      hoverColor: '#EE1D52'
    },
    {
      name: 'Pinterest',
      icon: PinterestIcon,
      url: 'https://in.pinterest.com/Jiowww1/?actingBusinessId=1140325705557715281',
      color: '#E60023',
      hoverColor: '#BD081C'
    },
    {
      name: 'X',
      icon: XIcon,
      url: 'https://x.com/JJioww',
      color: '#FFFFFF',
      hoverColor: '#1DA1F2'
    }
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] bg-black/90 backdrop-blur-sm border-b border-primary/10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.4 + index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                  style={{
                    backgroundColor: social.color,
                    border: social.name === 'TikTok' ? '2px solid #EE1D52' : social.name === 'X' ? '2px solid #1DA1F2' : 'none'
                  }}
                >
                  <social.icon className={`w-4 h-4 ${
                    social.name === 'Snapchat' ? 'text-black' : 
                    social.name === 'TikTok' ? 'text-black' : 
                    social.name === 'X' ? 'text-black' : 
                    'text-white'
                  }`} />
                </div>
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{ fontSize: '11px' }}
                >
                  {social.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"
                  style={{ backgroundColor: social.color }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
