import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  CheckCircle, 
  FileText, 
  Clock, 
  DollarSign, 
  AlertCircle,
  Info,
  MapPin,
  Users,
  GraduationCap,
  BookOpen
} from 'lucide-react';

export function StudyVisaDetailed() {
  return (
    <section id="study-visa-detailed" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">


        <div className="space-y-16">
          {/* Canada Study Visa */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Canada Study Visa Programs</h3>
              <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white">
                Study Permit & PGWP
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Study Permit */}
              <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Study Permit</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Primary Permit</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Required for international students studying in Canada for more than 6 months
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Duration:</strong> Course length</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Fee:</strong> CAD $150</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Key Requirements
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Letter of acceptance from DLI (Designated Learning Institution)',
                        'Proof of financial support (CAD $10,000+ per year)',
                        'Clean criminal record and medical exam (if required)',
                        'Statement of Purpose (SOP)',
                        'Language proficiency test results'
                      ].map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Research programs and apply to Canadian institutions',
                        'Receive Letter of Acceptance from DLI',
                        'Take language proficiency test (IELTS/TOEFL/PTE)',
                        'Gather financial documents and statements',
                        'Complete online study permit application',
                        'Submit biometrics and attend interview (if required)',
                        'Receive study permit decision and travel to Canada'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Post Graduate Work Permit */}
              <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Post Graduate Work Permit (PGWP)</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Work Authorization</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Work permit for international graduates from eligible Canadian institutions
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Duration:</strong> Up to 3 years</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Fee:</strong> CAD $255</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Eligibility Criteria
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Graduated from eligible DLI program',
                        'Program minimum 8 months duration',
                        'Maintained full-time student status',
                        'Apply within 180 days of graduation',
                        'Valid study permit when applying'
                      ].map((criteria, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Complete eligible program at Canadian DLI',
                        'Receive official transcript and completion letter',
                        'Apply for PGWP within 180 days of graduation',
                        'Submit required documents and application fee',
                        'Maintain legal status during processing',
                        'Receive PGWP decision and work authorization',
                        'Begin working in Canada with open work permit'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-amber-600/20 to-yellow-600/20 border border-amber-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-400 mb-1">Study Advisory Service</h4>
                  <p className="text-sm text-amber-300">
                    JioWW Global provides comprehensive study visa consultation and application guidance. 
                    We assist with document preparation, application review, and interview preparation. 
                    Final decisions are made by Immigration, Refugees and Citizenship Canada (IRCC).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Australia Study Visa */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Australia Study Visa Programs</h3>
              <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                Student Visa & Graduate Visa
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Student Visa Subclass 500 */}
              <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Student Visa (Subclass 500)</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Primary Visa</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    For international students to study full-time in Australia
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Duration:</strong> Course length + vacation</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Fee:</strong> AUD $650</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Key Requirements
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Confirmation of Enrollment (CoE) from CRICOS provider',
                        'Genuine Temporary Entrant (GTE) statement',
                        'Financial capacity evidence (AUD $21,041/year)',
                        'English language proficiency (IELTS 5.5+)',
                        'Health insurance (OSHC) and health examinations'
                      ].map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Research courses and apply to Australian institutions',
                        'Receive Letter of Offer and pay tuition deposit',
                        'Obtain Confirmation of Enrollment (CoE)',
                        'Take English proficiency test (IELTS/PTE/TOEFL)',
                        'Prepare financial documents and GTE statement',
                        'Submit student visa application online',
                        'Complete health examinations and biometrics',
                        'Receive visa grant and arrange travel'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Temporary Graduate Visa */}
              <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Temporary Graduate Visa (485)</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Post-Study Work</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Allows recent graduates to work, study and live in Australia temporarily
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Duration:</strong> 2-4 years</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Fee:</strong> AUD $1,895</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Eligibility Streams
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Graduate Work Stream: Bachelor, Masters or PhD graduates',
                        'Post-Study Work Stream: Any qualification graduates',
                        'Second Post-Study Work Stream: Extended stay option',
                        'Must have completed CRICOS registered course',
                        'Apply within 6 months of course completion'
                      ].map((stream, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{stream}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Complete eligible Australian qualification',
                        'Meet English language requirement',
                        'Apply within 6 months of course completion',
                        'Submit health insurance and character documents',
                        'Complete health examinations (if required)',
                        'Receive visa grant notification',
                        'Begin working in Australia with full work rights'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 border border-blue-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1">Professional Study Consultation</h4>
                  <p className="text-sm text-blue-300">
                    JioWW Global offers expert guidance for Australian study visas, course selection, and 
                    post-study pathways. All applications are subject to government assessment and approval.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* UK Study Visa */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">UK Study Visa Programs</h3>
              <Badge className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
                Student & Graduate Route
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Student Visa */}
              <Card className="border-l-4 border-l-blue-600 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Student Visa</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Study Route</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    For international students aged 16+ studying at UK educational institutions
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Duration:</strong> Course length + extra time</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Fee:</strong> £490</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Key Requirements
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Confirmation of Acceptance for Studies (CAS)',
                        'Financial requirements (£1,334/month in London)',
                        'English language proficiency (UKVI IELTS)',
                        'Academic qualifications for course entry',
                        'Tuberculosis test (if from certain countries)'
                      ].map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Apply and receive offer from UK institution',
                        'Pay deposit and receive CAS number',
                        'Take UKVI-approved English language test',
                        'Gather financial documents (28-day rule)',
                        'Complete online visa application',
                        'Book and attend biometric appointment',
                        'Receive visa decision and travel to UK'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Graduate Route Visa */}
              <Card className="border-l-4 border-l-blue-600 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Graduate Route Visa</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Post-Study Work</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Allows international graduates to work or look for work in the UK
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Duration:</strong> 2 years (3 for PhD)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Fee:</strong> £822</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Eligibility Requirements
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Completed eligible UK qualification',
                        'Current valid Student visa or Tier 4 visa',
                        'Study was at bachelor degree level or above',
                        'Studied with a Student sponsor',
                        'Must be in the UK when applying'
                      ].map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Successfully complete UK degree qualification',
                        'Ensure current Student visa is still valid',
                        'Apply online while in the UK',
                        'Provide academic transcript and completion evidence',
                        'Pay application fee and healthcare surcharge',
                        'Receive biometric residence permit',
                        'Begin working with full employment rights'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-red-600/20 border border-blue-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1">UK Study Visa Consultation</h4>
                  <p className="text-sm text-blue-300">
                    JioWW Global provides comprehensive UK study visa consultation including university selection, 
                    application guidance, and interview preparation. We are independent consultants and not 
                    affiliated with UK Visas and Immigration (UKVI).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Europe Study Visa */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Europe Study Visa Programs</h3>
              <Badge className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white">
                EU Student Visas
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Germany Student Visa */}
              <Card className="border-l-4 border-l-yellow-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Germany Student Visa</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">National Visa</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    For international students to pursue higher education in Germany
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Duration:</strong> Course + 18 months</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Fee:</strong> €75</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Key Requirements
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'University admission letter (Zulassungsbescheid)',
                        'Proof of financial resources (€11,208/year)',
                        'Academic qualifications with translations',
                        'German language proficiency (varies by program)',
                        'Health insurance coverage'
                      ].map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Apply to German universities via uni-assist or directly',
                        'Receive admission letter from university',
                        'Arrange blocked account or scholarship proof',
                        'Complete German language requirements (if needed)',
                        'Submit visa application at German consulate',
                        'Attend visa interview and biometric enrollment',
                        'Receive visa and arrange accommodation in Germany'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Netherlands Student Visa */}
              <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Netherlands Student Visa</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">MVV + Residence</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Entry visa (MVV) combined with residence permit for studies
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Duration:</strong> Course + 1 year</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Fee:</strong> €350</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Key Requirements
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Admission to Dutch educational institution',
                        'Financial means proof (€13,800/year)',
                        'Academic credentials and diplomas',
                        'Dutch or English language proficiency',
                        'Valid passport and health insurance'
                      ].map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Apply to Dutch university or college',
                        'Receive admission and enrollment confirmation',
                        'Institution applies for residence permit (IND)',
                        'Apply for entry visa (MVV) if required',
                        'Attend biometric appointment at consulate',
                        'Receive approval and travel to Netherlands',
                        'Collect residence permit card upon arrival'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-yellow-600/20 border border-blue-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1">European Study Consultation</h4>
                  <p className="text-sm text-blue-300">
                    JioWW Global provides expert consultation for European study visas, including university 
                    applications, scholarship guidance, and visa preparation. We work independently and are 
                    not affiliated with any European immigration authorities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}