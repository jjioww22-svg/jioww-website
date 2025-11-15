import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppChat';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Briefcase } from 'lucide-react';

// Updated social media links with real brand logos
const socialLinks = [
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ), 
    href: 'https://business.facebook.com/latest/home?business_id=1779106836235403&asset_id=630359386816727', 
    label: 'Facebook',
    color: 'hover:text-blue-600'
  },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ), 
    href: 'https://www.instagram.com/jio_worldwide/', 
    label: 'Instagram',
    color: 'hover:text-pink-600'
  },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ), 
    href: 'https://www.linkedin.com/company/jioworldwide/people/', 
    label: 'LinkedIn',
    color: 'hover:text-blue-700'
  },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ), 
    href: 'https://www.youtube.com/@Jio-Worldwide_jobs/featured', 
    label: 'YouTube',
    color: 'hover:text-red-600'
  },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .693-.09 1.093-.18h.008c.594-.134 1.594-.134 2.084.276.643.54.643 1.584.103 2.088-.675.631-1.687.744-2.391.81-.344.033-.558.05-.606.093.03.045.152.18.334.334.91.768 2.574 2.167 3.903 3.096.36.251.566.611.566.976 0 .77-.596 1.472-1.503 1.472-.39 0-.77-.121-1.145-.301-.26-.135-.522-.27-.779-.405-1.085-.568-2.104-1.107-3.063-.523-.528.316-.923.52-1.385.676-.82.276-1.685.227-2.549-.045-.413-.134-.821-.314-1.227-.495-.711-.314-1.383-.614-2.088-.614-.676 0-1.348.3-2.06.614-.405.18-.813.361-1.226.495-.864.272-1.728.32-2.549.045-.463-.157-.857-.36-1.386-.676-.96-.584-1.977-.045-3.063.523-.257.135-.519.27-.778.405-.375.18-.755.301-1.145.301-.908 0-1.504-.702-1.504-1.472 0-.365.207-.725.566-.976 1.329-.929 2.993-2.328 3.903-3.096.182-.154.304-.29.334-.334-.048-.043-.262-.06-.606-.093-.704-.066-1.716-.179-2.391-.81-.54-.504-.54-1.548.103-2.088.49-.41 1.49-.41 2.084-.276h.008c.4.09.793.18 1.093.18.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.86 1.07 11.216.793 12.206.793z"/>
      </svg>
    ), 
    href: 'https://www.snapchat.com/add/jioww_europejob?share_id=tbahpLU7r_k&locale=en-AE', 
    label: 'Snapchat',
    color: 'hover:text-yellow-400'
  },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
      </svg>
    ), 
    href: 'https://www.tiktok.com/@jio_worldwide_jobs', 
    label: 'TikTok',
    color: 'hover:text-black'
  },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.311-.623-.311-1.544c0-1.445.839-2.524 1.885-2.524.889 0 1.319.668 1.319 1.466 0 .893-.568 2.228-.861 3.467-.245 1.038.52 1.886 1.544 1.886 1.854 0 3.279-1.954 3.279-4.776 0-2.499-1.798-4.248-4.364-4.248-2.973 0-4.716 2.23-4.716 4.533 0 .896.345 1.856.776 2.378.085.104.097.195.072.3-.079.327-.254 1.026-.288 1.17-.046.189-.151.229-.348.138-1.298-.605-2.111-2.505-2.111-4.028 0-3.291 2.394-6.312 6.901-6.312 3.619 0 6.435 2.577 6.435 6.019 0 3.593-2.267 6.488-5.414 6.488-1.057 0-2.052-.549-2.392-1.274 0 0-.523 1.992-.65 2.48-.236.908-.872 2.042-1.297 2.734.978.302 2.018.461 3.094.461 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001"/>
      </svg>
    ), 
    href: 'https://in.pinterest.com/Jiowww1/?actingBusinessId=1140325705557715281', 
    label: 'Pinterest',
    color: 'hover:text-red-600'
  },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ), 
    href: 'https://x.com/JJioww', 
    label: 'X',
    color: 'hover:text-gray-800'
  }
];

const footerLinks = {
  'Services': [
    { text: 'Canada PR Programs', href: '#country-canada' },
    { text: 'Australia PR Programs', href: '#country-australia' },
    { text: 'Slovenia Work Permits (Gulf Only)', href: '#country-slovenia' },
    { text: 'Malta Residence Programs (Gulf Only)', href: '#country-malta' },
    { text: 'Croatia Work Permits (Gulf Only)', href: '#country-croatia' },
    { text: 'Germany Work Permits (Gulf Only)', href: '#country-germany' }
  ],
  'Resources': [
    { text: 'Latest News', href: '#news' },
    { text: 'Immigration Guide', href: '#services' },
    { text: 'Process Steps', href: '#services' },
    { text: 'Document Checklist', href: '#contact' },
    { text: 'Consultation Booking', href: '#contact' },
    { text: 'Success Stories', href: '#testimonials' }
  ],
  'Company': [
    { text: 'About JioWW Global', href: '#about' },
    { text: 'Consultation Team', href: '#about' },
    { text: 'Client Testimonials', href: '#testimonials' },
    { text: 'Privacy Policy', href: '#contact' },
    { text: 'Terms of Service', href: '#contact' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <p className="text-muted-foreground mb-6">
              Your trusted partner for international immigration and work permit services. 
              Helping dreams become reality since 2009.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>career@jioww.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Globe className="h-4 w-4 text-primary" />
                <span>www.jioww.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <div className="flex flex-col">
                  <span>Dubai: +971 50 181 8023</span>
                  <span>India: +91 62808 08887</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.text}>
                    <motion.a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {link.text}
                    </motion.a>
                  </li>
                ))}
                {/* Special "Work with JioWW Team" item only in Company section */}
                {category === 'Company' && (
                  <li className="mt-4 pt-3 border-t border-primary/20">
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.button
                          className="text-sm font-bold bg-gradient-to-r from-primary/20 to-amber-500/20 px-3 py-2 rounded-md border border-primary/30 hover:border-primary/50 transition-all duration-300 w-full text-left flex items-center gap-2"
                          whileHover={{ x: 5, scale: 1.02 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                            WORK with JIOWW TEAM
                          </span>
                        </motion.button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            Join Our Team
                          </DialogTitle>
                          <DialogDescription>
                            Interested in working with JioWW Global? Contact us through your preferred method:
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          {/* Email Option */}
                          <motion.a
                            href="mailto:career@jioww.com?subject=Career Inquiry&body=Hi, I'm interested in joining the JioWW Global team."
                            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-r from-primary/5 to-transparent group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">Email Us</div>
                              <div className="text-sm text-muted-foreground">career@jioww.com</div>
                            </div>
                          </motion.a>

                          {/* WhatsApp Option */}
                          <motion.a
                            href="https://wa.me/971564283898?text=Hi%2C%20I%27m%20interested%20in%20joining%20the%20JioWW%20Global%20team."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-green-500/50 transition-all duration-300 bg-gradient-to-r from-green-500/5 to-transparent group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                              <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">WhatsApp</div>
                              <div className="text-sm text-muted-foreground">+971 56 428 3898</div>
                            </div>
                          </motion.a>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              © 2024 JioWW Global. All rights reserved. Licensed Immigration Consultants.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground ${social.color} transition-colors duration-300`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-xl font-semibold mb-2">Ready to Start Your Immigration Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Get expert guidance from licensed immigration consultants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                message="Hi! I'm interested in booking a free consultation for immigration services. Can you help me?"
                size="lg"
              >
                Book Free Consultation
              </WhatsAppButton>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-amber-400 text-amber-600 hover:bg-amber-50"
                  onClick={() => window.open('mailto:career@jioww.com?subject=Immigration Guide Request&body=Hi, I would like to download your immigration guide.', '_blank')}
                >
                  Download Guide
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}