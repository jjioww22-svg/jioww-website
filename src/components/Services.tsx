import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { MapPin, Users, ArrowRight, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CanadaPRDetails, AustraliaPRDetails, EuropeanWorkPermitsGulf, GermanySkilledProgram } from './CountryDetails';
import { WhatsAppButton } from './WhatsAppChat';

const countries = [
  {
    name: 'Canada',
    description: 'Comprehensive PR programs including Express Entry, Provincial Nominee Programs, and skilled worker pathways for permanent residence.',
    image: 'https://images.unsplash.com/photo-1640777831572-5b8516229c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBwYXJsaWFtZW50JTIwYnVpbGRpbmclMjBPdHRhd2ElMjBmbGFnfGVufDF8fHx8MTc1ODYyNjI0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popularity: 'Most Popular',
    features: ['Express Entry', 'Provincial Nominee', 'Federal Programs'],
    color: 'from-red-500/20 to-white/20',
    nameGradient: 'from-red-500 to-red-300',
    type: 'PR Program'
  },
  {
    name: 'Australia',
    description: 'Skilled Migration visas, Employer Sponsored pathways, and state nomination programs for Australian permanent residency.',
    image: 'https://images.unsplash.com/photo-1595563382617-fe6fa4fd0394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTeWRuZXklMjBPcGVyYSUyMEhvdXNlJTIwQXVzdHJhbGlhJTIwaGFyYm91ciUyMGJyaWRnZXxlbnwxfHx8fDE3NTg2MjYyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popularity: 'High Demand',
    features: ['Skilled Migration', 'State Nomination', 'Employer Sponsored'],
    color: 'from-blue-500/20 to-green-500/20',
    nameGradient: 'from-blue-500 to-green-400',
    type: 'PR Program'
  },
  {
    name: 'Germany',
    description: 'Skilled Worker Program, EU Blue Card, and vocational pathways for professionals worldwide. Open to all nationalities.',
    image: 'https://images.unsplash.com/photo-1745878136928-d1b3c10afc35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW55JTIwZmxhZyUyMGJyYW5kZW5idXJnJTIwZ2F0ZSUyMGJlcmxpbnxlbnwxfHx8fDE3NTg2MjU3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popularity: 'Open to All',
    features: ['EU Blue Card', 'Skilled Worker Visa', 'IT & Engineering'],
    color: 'from-red-500/20 to-yellow-500/20',
    nameGradient: 'from-red-500 to-yellow-400',
    type: 'Skilled Migration'
  },
  {
    name: 'Slovenia',
    description: 'Work permits for Truck Drivers & Welders with access to European Union benefits. Only for Gulf Candidates.',
    image: 'https://images.unsplash.com/photo-1713307170925-b987809b801a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTbG92ZW5pYSUyMGZsYWclMjBManVibGphbmElMjBjYXN0bGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4NjI1Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popularity: 'Fast Track',
    features: ['Truck Drivers', 'Welders', 'EU Access'],
    color: 'from-green-500/20 to-blue-500/20',
    nameGradient: 'from-green-500 to-blue-400',
    type: 'Work Permit (Gulf Only)'
  },
  {
    name: 'Malta',
    description: 'Work permits for Hospitality, Trade Professions & Operators with EU benefits. Only for Gulf Candidates.',
    image: 'https://images.unsplash.com/photo-1744573392322-096178442d92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWx0YSUyMGZsYWclMjB2YWxsZXR0YSUyMGdyYW5kJTIwaGFyYm9yJTIwZm9ydHJlc3N8ZW58MXx8fHwxNzU4NjI1NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popularity: 'Premium',
    features: ['Hospitality', 'Trade Professions', 'Operators'],
    color: 'from-yellow-500/20 to-orange-500/20',
    nameGradient: 'from-yellow-500 to-orange-400',
    type: 'Work Permit (Gulf Only)'
  },
  {
    name: 'Croatia',
    description: 'Work permits for Hospitality, Trade Professions & Operators with EU benefits. Only for Gulf Candidates.',
    image: 'https://images.unsplash.com/photo-1627827623351-b34fc0153926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDcm9hdGlhJTIwZmxhZyUyMGR1YnJvdm5payUyMG9sZCUyMHRvd24lMjBhZHJpYXRpYyUyMHNlYXxlbnwxfHx8fDE3NTg2MjU3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popularity: 'Emerging',
    features: ['Hospitality', 'Trade Professions', 'Operators'],
    color: 'from-blue-500/20 to-red-500/20',
    nameGradient: 'from-blue-500 to-red-400',
    type: 'Work Permit (Gulf Only)'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(212,175,55,0.1)_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary bg-primary/10 backdrop-blur-sm">Our Services</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Comprehensive Immigration Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            JioWW Global is your trusted immigration consultancy and recruitment advisory, providing expert guidance 
            for permanent residence and work permit applications across multiple destinations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              id={`country-${country.name.toLowerCase()}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="h-full overflow-hidden border border-primary/20 shadow-2xl bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={country.image}
                      alt={country.name}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${country.color}`}
                    whileHover={{ opacity: 0.3 }}
                    initial={{ opacity: 0.1 }}
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 bg-black/80 text-primary border-primary/30 backdrop-blur-sm"
                  >
                    {country.popularity}
                  </Badge>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-gradient-to-r from-primary to-yellow-500 text-black font-semibold">
                      {country.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${country.nameGradient} bg-clip-text text-transparent drop-shadow-lg`}>
                      {country.name}
                    </span>
                    <MapPin className="h-6 w-6 text-primary" />
                  </CardTitle>
                  <CardDescription className="text-gray-300 mt-3">{country.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {country.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs border-primary/40 text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="w-full group bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/30">
                          <FileText className="mr-2 h-4 w-4" />
                          View Complete Process
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent 
                      className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-black/95 to-gray-900/95 border-primary/20"
                    >
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2 text-white">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span>{country.name} Immigration Process</span>
                        </DialogTitle>
                        <DialogDescription 
                          className="text-gray-300"
                        >
                          Complete step-by-step immigration process details for {country.name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6">
                        {country.name === 'Canada' && <CanadaPRDetails />}
                        {country.name === 'Australia' && <AustraliaPRDetails />}
                        {country.name === 'Germany' && <GermanySkilledProgram />}
                        {country.name === 'Slovenia' && <EuropeanWorkPermitsGulf country="Slovenia" />}
                        {country.name === 'Malta' && <EuropeanWorkPermitsGulf country="Malta" />}
                        {country.name === 'Croatia' && <EuropeanWorkPermitsGulf country="Croatia" />}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-yellow-500/10 border-primary/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2 text-white">Ready to Start Your Journey?</h3>
                <p className="text-gray-300">
                  Book a free professional consultation with our licensed immigration consultants and recruitment advisors today
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message="Hi! I'm interested in booking a professional consultation with your immigration experts. Can you help me?"
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 backdrop-blur-sm"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Book Professional Consultation
                </WhatsAppButton>
                <WhatsAppButton
                  message="Hi! I'm ready to get started with my immigration process today. Can you guide me?"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/30"
                >
                  Get Started Today
                </WhatsAppButton>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}