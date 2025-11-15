import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, MessageSquare, Calendar } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppChat';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'career@jioww.com',
    description: 'Send us an email anytime'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Dubai: +971 50 181 8023 | India: +91 62808 08887',
    description: 'Chat with us on WhatsApp'
  },
  {
    icon: MapPin,
    label: 'Our Offices',
    value: 'Dubai & Chandigarh, India',
    description: 'Visit our locations worldwide'
  }
];

const consultationTypes = [
  { value: 'initial', label: 'Initial Professional Consultation (Free)', duration: '30 min' },
  { value: 'assessment', label: 'Professional Eligibility Assessment', duration: '60 min' },
  { value: 'strategy', label: 'Professional Immigration Strategy Session', duration: '90 min' },
  { value: 'document', label: 'Professional Document Review', duration: '45 min' }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Your Immigration Journey Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step? Contact our expert immigration consultants for personalized professional consultation and guidance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 20
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="text-center p-6 h-full bg-gradient-to-br from-card to-card/80 border-border/50 shadow-lg">
                <CardContent className="p-0 space-y-4">
                  <motion.div
                    className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <method.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">{method.label}</h3>
                    <p className="font-mono text-sm mb-2">{method.value}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-br from-card to-card/80 border-border/50 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <Input placeholder="Email Address" type="email" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Phone Number" type="tel" />
                    </div>
                    <div>
                      <Input placeholder="Country of Interest" />
                    </div>
                  </div>

                  <div>
                    <Textarea 
                      placeholder="Tell us about your immigration goals and any specific questions you have..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('mailto:career@jioww.com?subject=Immigration Inquiry&body=Hi, I would like to inquire about your immigration services.', '_blank');
                      }}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <WhatsAppButton
                      message="Hi! I'd like to send you a message about immigration services. Can we chat?"
                      variant="outline"
                      className="flex-1"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </WhatsAppButton>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Consultation Booking */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Book a Consultation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="space-y-4">
                  {consultationTypes.map((type, index) => (
                    <motion.div
                      key={type.value}
                      className="p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{type.label}</h4>
                          <p className="text-sm text-muted-foreground">Duration: {type.duration}</p>
                        </div>
                        <Badge variant={type.value === 'initial' ? 'default' : 'secondary'}>
                          {type.value === 'initial' ? 'Free' : 'Paid'}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                </motion.div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Prefer to talk immediately?
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp: +971 50 181 8023 (Dubai)
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Office Locations with Google Maps */}
        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Visit Our Offices</h3>
            <p className="text-muted-foreground">We have offices in two strategic locations to serve you better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dubai Office */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 shadow-lg">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900">Dubai Office</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium">17th Floor, Iris Bay Tower</p>
                    <p>Business Bay, Dubai, UAE</p>
                    <p className="text-sm text-blue-600">Near Metro Station, Business Bay</p>
                    <div className="pt-2 border-t border-blue-200 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <p className="text-sm font-medium">Mon - Sat: 11:00 AM - 8:00 PM (GST)</p>
                      </div>
                      <p className="text-sm font-medium">WhatsApp: +971 50 181 8023</p>
                      <p className="text-sm text-gray-600">Email: career@jioww.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Dubai Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2040732052424!2d55.26531761501469!3d25.188077983899025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0x5c6c2734f4b2a1dc!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dubai Office Location"
                ></iframe>
              </div>
            </motion.div>

            {/* India Office */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 shadow-lg">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white p-2 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h4 className="text-xl font-semibold text-green-900">India Office</h4>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium">First Floor, SCO-106</p>
                    <p>Sector-47 C, Chandigarh, India</p>
                    <p className="text-sm text-green-600">Near Bank of India & La pino pizza</p>
                    <div className="pt-2 border-t border-green-200 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <p className="text-sm font-medium">Mon - Sat: 10:00 AM - 7:00 PM (IST)</p>
                      </div>
                      <p className="text-sm font-medium">WhatsApp: +91 62808 08887</p>
                      <p className="text-sm text-gray-600">Email: career@jioww.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* India Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6548999999997!2d76.78280881512198!3d30.717799881634924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feccbc454b1c3%3A0x3d3b8b1bdafeca0a!2sSector%2047%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="India Office Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
