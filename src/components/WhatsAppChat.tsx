import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { MessageCircle, Phone, MapPin, Clock, X } from 'lucide-react';
import { useState } from 'react';

const whatsappNumbers = {
  dubai: '+971501818023',
  india: '+916280808887'
};

const officeHours = {
  dubai: 'Dubai: 11:00 AM - 8:00 PM (GST)',
  india: 'India: 10:00 AM - 7:00 PM (IST)'
};

export function WhatsAppButton({ 
  children, 
  message = "Hi! I'm interested in immigration consultation services. Can you help me?",
  className = "",
  variant = "default",
  size = "default"
}) {
  const [showOfficeSelector, setShowOfficeSelector] = useState(false);

  const openWhatsApp = (office: 'dubai' | 'india') => {
    const phoneNumber = whatsappNumbers[office];
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setShowOfficeSelector(false);
  };

  return (
    <Dialog open={showOfficeSelector} onOpenChange={setShowOfficeSelector}>
      <DialogTrigger asChild>
        <Button 
          variant={variant} 
          size={size}
          className={`${className} bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white`}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-green-500" />
            <span>Choose Your Preferred Office</span>
          </DialogTitle>
          <DialogDescription>
            Select your preferred office location to get in touch with our immigration consultants via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-6">
          {/* Dubai Office */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer border-2 hover:border-green-500 transition-colors"
              onClick={() => openWhatsApp('dubai')}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Dubai Office</span>
                  </CardTitle>
                  <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black">
                    Primary
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-green-500" />
                  <span>{whatsappNumbers.dubai}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{officeHours.dubai}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  17th Floor, Iris Bay Tower, Business Bay, Dubai
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* India Office */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer border-2 hover:border-green-500 transition-colors"
              onClick={() => openWhatsApp('india')}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>India Office</span>
                  </CardTitle>
                  <Badge variant="outline">
                    Secondary
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-green-500" />
                  <span>{whatsappNumbers.india}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{officeHours.india}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  First Floor, SCO-106, Sector-47 C, Chandigarh, India
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="text-center pt-4 border-t">
            <p className="text-xs text-muted-foreground mb-3">
              Click on your preferred office to start WhatsApp chat
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowOfficeSelector(false)}
              className="w-full"
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Floating WhatsApp Widget
export function FloatingWhatsApp() {
  const [showOfficeSelector, setShowOfficeSelector] = useState(false);

  const openWhatsApp = (office: 'dubai' | 'india') => {
    const phoneNumber = whatsappNumbers[office];
    const message = "Hi! I found your website and I'm interested in immigration consultation services. Can you help me?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setShowOfficeSelector(false);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-28 z-[55]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <Button
            onClick={() => setShowOfficeSelector(true)}
            className="rounded-full h-14 w-14 p-0 shadow-lg hover:shadow-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
        
        {/* Pulsing rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500 opacity-20 pointer-events-none"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500 opacity-20 pointer-events-none"
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>

      {/* Office Selection Dialog */}
      <Dialog open={showOfficeSelector} onOpenChange={setShowOfficeSelector}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-green-500" />
              <span>Choose Your Preferred Office</span>
            </DialogTitle>
            <DialogDescription>
              Select your preferred office location to get in touch with our immigration consultants via WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-6">
            {/* Dubai Office */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="cursor-pointer border-2 hover:border-green-500 transition-colors"
                onClick={() => openWhatsApp('dubai')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Dubai Office</span>
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black">
                      Primary
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-green-500" />
                    <span>{whatsappNumbers.dubai}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{officeHours.dubai}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    17th Floor, Iris Bay Tower, Business Bay, Dubai
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* India Office */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="cursor-pointer border-2 hover:border-green-500 transition-colors"
                onClick={() => openWhatsApp('india')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>India Office</span>
                    </CardTitle>
                    <Badge variant="outline">
                      Secondary
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-green-500" />
                    <span>{whatsappNumbers.india}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{officeHours.india}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    First Floor, SCO-106, Sector-47 C, Chandigarh, India
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="text-center pt-4 border-t">
              <p className="text-xs text-muted-foreground mb-3">
                Click on your preferred office to start WhatsApp chat
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowOfficeSelector(false)}
                className="w-full"
              >
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Direct WhatsApp link function for quick use
export const openWhatsAppDirect = (
  office: 'dubai' | 'india' = 'dubai',
  message: string = "Hi! I'm interested in immigration consultation services."
) => {
  const phoneNumber = whatsappNumbers[office];
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
