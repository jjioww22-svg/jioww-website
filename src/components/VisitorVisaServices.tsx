import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Plane, FileText, CheckCircle, Clock, Globe, ArrowRight, Users, Shield, Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WhatsAppButton } from './WhatsAppChat';

const visitorVisaCountries = [
  {
    name: 'Europe (Schengen)',
    description: 'Access 27 European countries with a single Schengen visa. High approval rates with proper documentation and professional guidance.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdXJvcGUlMjB0cmF2ZWwlMjBFaWZmZWwlMjBUb3dlcnxlbnwxfHx8fDE3NTk3NTcwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Most Popular',
    features: ['27 Countries Access', 'High Success Rate', '90 Days Stay'],
    color: 'from-blue-500/20 to-yellow-500/20',
    nameGradient: 'from-blue-500 to-yellow-400',
    type: 'Schengen Visa',
    visaTypes: [
      {
        title: 'Tourist Visa',
        purpose: 'Tourism, sightseeing, visiting friends',
        duration: 'Up to 90 days in 180 days',
        fees: 'EUR 80 (Adult), EUR 40 (Children 6-12)',
        description: 'Perfect for leisure travel across Europe'
      },
      {
        title: 'Business Visa',
        purpose: 'Business meetings, conferences, trade fairs',
        duration: 'Up to 90 days in 180 days',
        fees: 'EUR 80',
        description: 'For professional business activities'
      },
      {
        title: 'Family Visit Visa',
        purpose: 'Visiting family members in Schengen area',
        duration: 'Up to 90 days in 180 days',
        fees: 'EUR 80',
        description: 'Visit family and relatives'
      }
    ],
    requiredDocuments: [
      'Valid passport (minimum 6 months validity)',
      'Completed visa application form',
      'Recent passport-sized photographs',
      'Travel insurance (minimum EUR 30,000 coverage)',
      'Flight itinerary and hotel reservations',
      'Bank statements (last 6 months)',
      'Employment letter or business documents',
      'Proof of ties to home country',
      'Travel itinerary',
      'Invitation letter (if visiting family/friends)'
    ],
    applicationProcess: [
      'Document preparation and verification',
      'Online application form completion',
      'Visa appointment booking at VFS/Embassy',
      'Biometric submission and interview',
      'Document submission with fees',
      'Application processing (10-15 working days)',
      'Passport collection with visa'
    ],
    successFactors: [
      'Complete and accurate documentation',
      'Strong financial proof',
      'Clear travel purpose and itinerary',
      'Proof of employment/business ties',
      'Previous travel history (if any)',
      'Comprehensive travel insurance',
      'Professional consultation support'
    ]
  },
  {
    name: 'United Kingdom',
    description: 'Visit the UK for tourism, business, or family visits. Expert guidance ensures high approval rates with proper documentation.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSyUyMExvbmRvbiUyMEJpZyUyMEJlbnxlbnwxfHx8fDE3NTk3NTcwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'High Demand',
    features: ['6 Months Validity', 'Multiple Entry', 'Fast Processing'],
    color: 'from-blue-600/20 to-red-600/20',
    nameGradient: 'from-blue-600 to-red-500',
    type: 'UK Visitor Visa',
    visaTypes: [
      {
        title: 'Standard Visitor Visa',
        purpose: 'Tourism, business, family visits',
        duration: '6 months (can apply for longer)',
        fees: 'GBP 100 (6 months), GBP 361 (2 years)',
        description: 'Most common UK visitor visa'
      },
      {
        title: 'Business Visitor Visa',
        purpose: 'Business meetings, conferences, training',
        duration: '6 months',
        fees: 'GBP 100',
        description: 'For business activities in the UK'
      },
      {
        title: 'Family Visitor Visa',
        purpose: 'Visiting family members',
        duration: '6 months',
        fees: 'GBP 100',
        description: 'Visit family and friends'
      }
    ],
    requiredDocuments: [
      'Valid passport (at least 6 months validity)',
      'Completed online visa application',
      'Recent color photographs',
      'Bank statements (last 6 months)',
      'Employment proof and salary slips',
      'Travel itinerary and accommodation proof',
      'Travel purpose documentation',
      'Proof of ties to home country',
      'Previous travel history',
      'Invitation letter (if applicable)',
      'Travel insurance (recommended)'
    ],
    applicationProcess: [
      'Complete online application form',
      'Pay visa fees online',
      'Book biometric appointment',
      'Attend visa application center',
      'Submit biometrics and documents',
      'Track application status online',
      'Receive decision (usually 3 weeks)',
      'Collect passport with visa'
    ],
    successFactors: [
      'Strong financial evidence',
      'Clear intention to return home',
      'Detailed travel plans',
      'Legitimate purpose of visit',
      'Complete documentation',
      'Previous compliance history',
      'Professional guidance'
    ]
  },
  {
    name: 'Canada',
    description: 'Canadian visitor visa with high approval rates through proper guidance. Visit Canada for tourism, family visits, or business.',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBCYW5mZiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTk3NTcwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Premium',
    features: ['10 Year Validity', 'Multiple Entry', 'eTA Available'],
    color: 'from-red-500/20 to-white/20',
    nameGradient: 'from-red-500 to-red-300',
    type: 'Canada TRV',
    visaTypes: [
      {
        title: 'Temporary Resident Visa (TRV)',
        purpose: 'Tourism, family visits, business',
        duration: 'Up to 6 months per entry',
        fees: 'CAD 100 per person',
        description: 'Multiple entry visa valid up to 10 years'
      },
      {
        title: 'Electronic Travel Authorization (eTA)',
        purpose: 'For visa-exempt countries',
        duration: 'Up to 6 months per visit',
        fees: 'CAD 7',
        description: 'Quick online authorization'
      },
      {
        title: 'Business Visitor Visa',
        purpose: 'Business meetings, conferences',
        duration: 'Up to 6 months',
        fees: 'CAD 100',
        description: 'For business purposes'
      }
    ],
    requiredDocuments: [
      'Valid passport (6 months minimum validity)',
      'Completed visa application form (IMM 5257)',
      'Family information form (IMM 5645)',
      'Recent photographs (per specifications)',
      'Purpose of visit letter',
      'Financial proof (bank statements, ITR)',
      'Employment letter or business proof',
      'Travel itinerary',
      'Hotel bookings',
      'Invitation letter (if visiting family)',
      'Proof of ties to home country',
      'Previous travel history documents'
    ],
    applicationProcess: [
      'Create GCKey account online',
      'Complete application form online',
      'Upload required documents',
      'Pay application fees',
      'Submit biometrics at VAC',
      'Wait for processing (varies by location)',
      'Passport submission if approved',
      'Receive visa stamped passport'
    ],
    successFactors: [
      'Strong financial capability',
      'Employment stability',
      'Clear purpose of visit',
      'Ties to home country',
      'Comprehensive travel plan',
      'Previous international travel',
      'Complete and genuine documentation'
    ]
  },
  {
    name: 'USA',
    description: 'US B1/B2 visitor visa for business and tourism. Professional guidance maximizes approval chances with proper preparation.',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVU0ElMjBOZXclMjBZb3JrJTIwc2t5bGluZXxlbnwxfHx8fDE3NTk3NTcwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'High Value',
    features: ['10 Year Validity', 'Multiple Entry', 'B1/B2 Combined'],
    color: 'from-blue-600/20 to-red-500/20',
    nameGradient: 'from-blue-600 to-red-500',
    type: 'US B1/B2 Visa',
    visaTypes: [
      {
        title: 'B1 Business Visa',
        purpose: 'Business meetings, conferences, negotiations',
        duration: 'Up to 6 months per entry',
        fees: 'USD 185',
        description: 'For business purposes only'
      },
      {
        title: 'B2 Tourist Visa',
        purpose: 'Tourism, vacation, family visits',
        duration: 'Up to 6 months per entry',
        fees: 'USD 185',
        description: 'For tourism and leisure'
      },
      {
        title: 'B1/B2 Combined Visa',
        purpose: 'Both business and tourism',
        duration: 'Up to 6 months per entry',
        fees: 'USD 185',
        description: 'Most common visitor visa'
      }
    ],
    requiredDocuments: [
      'Valid passport (6 months beyond stay)',
      'DS-160 confirmation page',
      'Visa appointment confirmation',
      'Recent photograph (as per US specs)',
      'Interview appointment letter',
      'Bank statements and financial proof',
      'Employment letter and salary slips',
      'Income tax returns',
      'Purpose of visit documentation',
      'Travel itinerary',
      'Hotel reservations',
      'Invitation letter (if applicable)',
      'Previous travel history',
      'Property documents (proof of ties)'
    ],
    applicationProcess: [
      'Complete DS-160 form online',
      'Pay visa fees (MRV fee)',
      'Schedule visa interview appointment',
      'Prepare required documents',
      'Attend visa interview at Embassy/Consulate',
      'Answer questions honestly and confidently',
      'Submit passport if approved',
      'Track passport delivery status',
      'Receive passport with visa'
    ],
    successFactors: [
      'Strong ties to home country',
      'Solid financial evidence',
      'Clear purpose of visit',
      'Confident interview performance',
      'Consistent documentation',
      'Previous travel history to developed countries',
      'Genuine intention to return',
      'Professional interview preparation'
    ]
  },
  {
    name: 'Australia',
    description: 'Australian visitor visa for tourism, business, or family visits. Expert consultation ensures proper application and high success rates.',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjBTeWRuZXklMjBPcGVyYSUyMEhvdXNlfGVufDF8fHx8MTc1OTc1NzA3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Growing',
    features: ['12 Months Validity', 'eVisitor Option', 'Online Processing'],
    color: 'from-blue-500/20 to-green-500/20',
    nameGradient: 'from-blue-500 to-green-400',
    type: 'Visitor Visa',
    visaTypes: [
      {
        title: 'Visitor Visa (Subclass 600)',
        purpose: 'Tourism, business, visiting family',
        duration: '3, 6, or 12 months',
        fees: 'AUD 145 - 365 (varies by stream)',
        description: 'Standard visitor visa for Australia'
      },
      {
        title: 'eVisitor (Subclass 651)',
        purpose: 'Tourism or business (for eligible countries)',
        duration: 'Up to 3 months per visit',
        fees: 'Free',
        description: 'Electronic visa for eligible passport holders'
      },
      {
        title: 'Electronic Travel Authority (Subclass 601)',
        purpose: 'Short visits for eligible countries',
        duration: 'Up to 3 months',
        fees: 'AUD 20',
        description: 'Quick electronic authorization'
      }
    ],
    requiredDocuments: [
      'Valid passport (at least 6 months)',
      'Completed visa application form',
      'Recent passport photographs',
      'Financial evidence (bank statements)',
      'Employment proof or business documents',
      'Travel itinerary and accommodation',
      'Health insurance',
      'Purpose of visit letter',
      'Invitation letter (if visiting family)',
      'Previous travel documents',
      'Character documents (police clearance if required)',
      'Health examination (if required)'
    ],
    applicationProcess: [
      'Determine correct visa subclass',
      'Create ImmiAccount online',
      'Complete online application',
      'Upload supporting documents',
      'Pay visa application fees',
      'Submit application',
      'Provide biometrics if requested',
      'Wait for decision (processing varies)',
      'Receive visa grant notification'
    ],
    successFactors: [
      'Genuine temporary entry intention',
      'Sufficient financial capacity',
      'Strong ties to home country',
      'Clear purpose of visit',
      'Health and character requirements met',
      'Complete documentation',
      'Previous travel compliance',
      'Professional consultation guidance'
    ]
  },
  {
    name: 'New Zealand',
    description: 'New Zealand visitor visa for tourism, business, or family visits. Professional guidance ensures smooth application process and high approval rates.',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBaZWFsYW5kJTIwTWlsZm9yZCUyMFNvdW5kfGVufDF8fHx8MTc1OTc1NzA3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Popular',
    features: ['9 Months Validity', 'eTA Available', 'Fast Processing'],
    color: 'from-blue-500/20 to-black/20',
    nameGradient: 'from-blue-500 to-gray-400',
    type: 'Visitor Visa',
    visaTypes: [
      {
        title: 'Visitor Visa',
        purpose: 'Tourism, visiting family, general holiday',
        duration: 'Up to 9 months',
        fees: 'NZD 211',
        description: 'Standard visitor visa for New Zealand'
      },
      {
        title: 'NZeTA (New Zealand Electronic Travel Authority)',
        purpose: 'Short visits for visa-waiver countries',
        duration: 'Up to 3 months per visit (2 years validity)',
        fees: 'NZD 17 (app) or NZD 23 (website)',
        description: 'Quick electronic authorization for eligible countries'
      },
      {
        title: 'Business Visitor Visa',
        purpose: 'Business meetings, conferences, site visits',
        duration: 'Up to 9 months',
        fees: 'NZD 211',
        description: 'For business-related activities'
      }
    ],
    requiredDocuments: [
      'Valid passport (at least 3 months beyond intended stay)',
      'Completed visa application form',
      'Recent passport-sized photographs',
      'Proof of funds (bank statements, sponsorship)',
      'Employment letter or business documents',
      'Travel itinerary and accommodation bookings',
      'Return flight ticket or proof of onward travel',
      'Purpose of visit documentation',
      'Invitation letter (if visiting family/friends)',
      'Travel insurance',
      'Medical certificate (if required)',
      'Police clearance certificate (if required)',
      'Chest X-ray certificate (for stays over 6 months)'
    ],
    applicationProcess: [
      'Determine correct visa type (Visitor Visa or NZeTA)',
      'Create account on Immigration New Zealand website',
      'Complete online application form',
      'Upload required documents',
      'Pay visa application fees online',
      'Submit application',
      'Provide biometrics if requested',
      'Wait for processing (typically 20-25 days)',
      'Receive visa decision via email',
      'Print visa or eTA confirmation'
    ],
    successFactors: [
      'Genuine intention to visit temporarily',
      'Sufficient funds for entire stay',
      'Strong ties to home country',
      'Clear and realistic travel plans',
      'Good health and character',
      'Complete and accurate documentation',
      'Previous travel history compliance',
      'Demonstrated intention to leave NZ',
      'Professional consultation support'
    ]
  }
];

export function VisitorVisaServices() {
  return (
    <section id="visitor-visa" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
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
          <Badge variant="outline" className="mb-4 border-primary text-primary bg-primary/10 backdrop-blur-sm">
            <Plane className="h-4 w-4 mr-2" />
            Visitor & Tourist Visa Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Visitor & Schengen Visa Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guidance for visitor visa applications to Europe, UK, Canada, USA, Australia, and New Zealand. 
            Professional consultation to maximize your approval chances through proper documentation and preparation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visitorVisaCountries.map((country, index) => (
            <motion.div
              key={country.name}
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
                    <Plane className="h-6 w-6 text-primary" />
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
                          View Details & Requirements
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent 
                      className="max-w-5xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-black/95 to-gray-900/95 border-primary/20"
                    >
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2 text-white">
                          <Plane className="h-5 w-5 text-primary" />
                          <span>{country.name} Visitor Visa</span>
                        </DialogTitle>
                        <DialogDescription className="text-gray-300">
                          Complete visa requirements, documentation, and application process for {country.name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6 space-y-6">
                        {/* Visa Types */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <MapPin className="h-5 w-5 text-primary mr-2" />
                            Visa Types Available
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {country.visaTypes.map((visa, idx) => (
                              <Card key={idx} className="bg-gradient-to-br from-gray-900/80 to-black/80 border-primary/20">
                                <CardHeader>
                                  <CardTitle className="text-white text-lg">{visa.title}</CardTitle>
                                  <CardDescription className="text-gray-300">{visa.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm">
                                  <div className="flex items-start space-x-2 text-gray-300">
                                    <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span><strong>Purpose:</strong> {visa.purpose}</span>
                                  </div>
                                  <div className="flex items-start space-x-2 text-gray-300">
                                    <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span><strong>Duration:</strong> {visa.duration}</span>
                                  </div>
                                  <div className="flex items-start space-x-2 text-gray-300">
                                    <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span><strong>Fees:</strong> {visa.fees}</span>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        {/* Required Documents */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <FileText className="h-5 w-5 text-primary mr-2" />
                            Required Documents
                          </h3>
                          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-primary/20">
                            <CardContent className="pt-6">
                              <div className="grid md:grid-cols-2 gap-3">
                                {country.requiredDocuments.map((doc, idx) => (
                                  <div key={idx} className="flex items-start space-x-3">
                                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">{doc}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Application Process */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2" />
                            Application Process
                          </h3>
                          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-primary/20">
                            <CardContent className="pt-6">
                              <div className="space-y-3">
                                {country.applicationProcess.map((step, idx) => (
                                  <div key={idx} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                                      <span className="text-primary font-bold text-sm">{idx + 1}</span>
                                    </div>
                                    <div className="flex-1 pt-1">
                                      <p className="text-gray-300">{step}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Success Factors */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Shield className="h-5 w-5 text-primary mr-2" />
                            Key Success Factors
                          </h3>
                          <Card className="bg-gradient-to-br from-primary/10 to-yellow-500/10 border-primary/30">
                            <CardContent className="pt-6">
                              <div className="grid md:grid-cols-2 gap-3">
                                {country.successFactors.map((factor, idx) => (
                                  <div key={idx} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-gray-200 text-sm font-medium">{factor}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* CTA */}
                        <div className="pt-4 border-t border-primary/20">
                          <div className="bg-gradient-to-r from-primary/20 to-yellow-500/20 border border-primary/30 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-3">Need Professional Visa Consultation?</h4>
                            <p className="text-gray-300 mb-4">
                              Our expert consultants will guide you through the entire {country.name} visa application process, 
                              ensuring maximum approval chances with proper documentation and preparation.
                            </p>
                            <WhatsAppButton
                              message={`Hi! I'm interested in professional consultation for ${country.name} visitor visa. Can you help me?`}
                              className="w-full bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary transition-all duration-300"
                            >
                              Get Professional Consultation for {country.name}
                            </WhatsAppButton>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Visitor Visa Services */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-yellow-500/10 border-primary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose JioWW Global for Visitor Visa Consultation?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Legal & Professional</h4>
                  <p className="text-gray-300 text-sm">
                    100% legal consultation services with ethical guidance for genuine visa applications
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">High Success Rate</h4>
                  <p className="text-gray-300 text-sm">
                    Maximized approval chances through proper documentation and expert preparation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Expert Guidance</h4>
                  <p className="text-gray-300 text-sm">
                    Professional consultants with extensive experience in visitor visa applications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-yellow-500/10 border-primary/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2 text-white">Ready to Apply for Your Visitor Visa?</h3>
                <p className="text-gray-300">
                  Get professional consultation and maximize your visa approval chances
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message="Hi! I'm interested in professional visitor visa consultation. Can you help me?"
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 backdrop-blur-sm"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Book Consultation
                </WhatsAppButton>
                <WhatsAppButton
                  message="Hi! I'm ready to start my visitor visa application. Please guide me."
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
