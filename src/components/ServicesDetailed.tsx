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
  Users
} from 'lucide-react';

export function ServicesDetailed() {
  return (
    <section id="services-detailed" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">


        <div className="space-y-16">
          {/* Canada PR Programs */}
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
              <h3 className="text-2xl font-bold text-white">Canada PR Programs</h3>
              <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white">
                Permanent Residence
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Express Entry */}
              <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Express Entry System</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Federal Program</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    The primary pathway for skilled workers seeking Canadian permanent residence
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Min Score:</strong> 470+ CRS Points</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Investment:</strong> No investment required</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Available Programs
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Federal Skilled Worker Program (FSWP)',
                        'Canadian Experience Class (CEC)', 
                        'Federal Skilled Trades Program (FSTP)'
                      ].map((program, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Language Test (IELTS/CELPIP/TEF/TCF)',
                        'Educational Credential Assessment (ECA)',
                        'Create Express Entry Profile',
                        'Receive Invitation to Apply (ITA)',
                        'Submit Complete Application within 60 days',
                        'Medical Examination & Police Clearance',
                        'Final Decision & COPR issuance'
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

              {/* Provincial Nominee Program */}
              <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Provincial Nominee Program</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Provincial Program</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Province-specific immigration programs with enhanced opportunities
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Min Score:</strong> 300+ + Nomination</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Investment:</strong> Varies by province</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Popular PNP Programs
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Ontario Immigrant Nominee Program (OINP)',
                        'British Columbia Provincial Nominee Program (BC PNP)',
                        'Alberta Immigrant Nominee Program (AINP)'
                      ].map((program, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Step-by-Step Process</h4>
                    <div className="space-y-3">
                      {[
                        'Check Provincial Requirements',
                        'Submit Provincial Application',
                        'Receive Provincial Nomination',
                        'Apply through Express Entry (if applicable)',
                        'Submit Federal Application',
                        'Complete Medical & Security Checks',
                        'Landing and PR Card'
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
                  <h4 className="font-semibold text-amber-400 mb-1">Consultation Advisory</h4>
                  <p className="text-sm text-amber-300">
                    JioWW Global is an immigration consultancy and recruitment advisory firm. We provide guidance, 
                    document preparation assistance, and application support. Final decisions are made by Immigration, 
                    Refugees and Citizenship Canada (IRCC).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Australia PR Programs */}
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
              <h3 className="text-2xl font-bold text-white">Australia PR Programs</h3>
              <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                Permanent Residence
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Skilled Independent Visa */}
              <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Skilled Independent Visa (189)</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Points-based</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    For skilled workers who are not sponsored by an employer, state or family member
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Min Points:</strong> 65+ (Competitive: 85+)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Investment:</strong> No investment required</span>
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
                        'Age: Under 45 years',
                        'English: Competent level (6.0 IELTS)',
                        'Skills Assessment for nominated occupation',
                        'Invitation through SkillSelect'
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
                        'Skills Assessment from relevant authority',
                        'English Language Test (IELTS/PTE/TOEFL)',
                        'Submit Expression of Interest (EOI)',
                        'Receive Invitation to Apply',
                        'Lodge Visa Application within 60 days',
                        'Health Examinations & Character Checks',
                        'Visa Grant & Entry to Australia'
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

              {/* Skilled Nominated Visa */}
              <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Skilled Nominated Visa (190)</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">State Nominated</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    For skilled workers nominated by an Australian state or territory government
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Min Points:</strong> 65+ + State Nomination</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Investment:</strong> Varies by state</span>
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
                        'State/Territory nomination',
                        'Commitment to live in nominating state',
                        'Meet state-specific requirements',
                        'Occupation on state\'s skilled occupation list'
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
                        'Check State/Territory Requirements',
                        'Submit State Nomination Application',
                        'Receive State Nomination',
                        'Submit EOI to SkillSelect',
                        'Receive Invitation & Lodge Application',
                        'Complete Health & Character Requirements',
                        'Visa Grant & Migration'
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
                  <h4 className="font-semibold text-blue-400 mb-1">Consultation Service</h4>
                  <p className="text-sm text-blue-300">
                    JioWW Global provides professional immigration consultation and application assistance. 
                    All applications are subject to government assessment and approval.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Germany Immigration Programs */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Germany Immigration Programs</h3>
              <Badge className="bg-gradient-to-r from-red-600 to-yellow-500 text-white">
                Opportunity & Skilled Worker
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Opportunity Visa */}
              <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Opportunity Visa (Job Seeker)</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Job Search</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Six-month visa to search for employment and convert to residence permit
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Validity:</strong> 6 months (job search)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Financial:</strong> €1,027/month proof</span>
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
                        'University degree or vocational qualification',
                        'Minimum 2 years professional experience',
                        'German language skills (A1 minimum, B1 preferred)',
                        'Financial means proof (€1,027/month)'
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
                        'Complete language certification (Goethe/TELC)',
                        'Gather academic credentials & translations',
                        'Apply for Opportunity Visa at German consulate',
                        'Submit biometric data & attend interview',
                        'Receive Opportunity Visa (6 months)',
                        'Travel to Germany & search for employment',
                        'Convert to residence permit after job offer'
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

              {/* EU Blue Card Germany */}
              <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>EU Blue Card Germany</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Highly Qualified</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    For highly qualified professionals with university degrees and job offers
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Validity:</strong> 4 years (renewable)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Min Salary:</strong> €58,400/year</span>
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
                        'University degree (German or equivalent)',
                        'Job offer with minimum salary €58,400/year',
                        'Employment contract in shortage occupation',
                        'German language skills (varies by profession)'
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
                        'Verify university degree recognition',
                        'Secure job offer meeting salary threshold',
                        'Apply for EU Blue Card',
                        'Submit complete application documents',
                        'Complete biometric enrollment',
                        'Receive Blue Card approval',
                        'Travel to Germany & register residence'
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

            <div className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 border border-red-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">Professional Consultation</h4>
                  <p className="text-sm text-red-300">
                    JioWW Global is a licensed immigration consultancy and recruitment advisory. We provide 
                    documentation support, employer connections, and application guidance. Final decisions 
                    rest with German immigration authorities (BAMF).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Slovenia Work Permits */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Slovenia Work Permits</h3>
              <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                EU Work Authorization
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Single Permit */}
              <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Single Permit</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Combined Permit</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Combined work and residence permit for non-EU nationals
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Validity:</strong> 1-2 years (renewable)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Salary:</strong> Minimum wage compliance</span>
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
                        'Job offer from Slovenian employer',
                        'Educational credentials recognition',
                        'No criminal record certificate',
                        'Health insurance coverage',
                        'Adequate accommodation proof'
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
                        'Secure job offer from Slovenian employer',
                        'Prepare required documentation',
                        'Submit application at Slovenian consulate',
                        'Biometric data collection',
                        'Wait for approval (30-60 days)',
                        'Receive single permit',
                        'Travel to Slovenia & register residence'
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

              {/* EU Blue Card Slovenia */}
              <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>EU Blue Card Slovenia</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Highly Skilled</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    For highly qualified professionals with higher education
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Validity:</strong> 4 years (renewable)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Salary:</strong> 1.5x national average</span>
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
                        'University degree (3+ years)',
                        'Employment contract with high salary',
                        'Professional experience in field',
                        'Clean criminal record',
                        'Valid travel document'
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
                        'Obtain degree recognition',
                        'Secure qualifying employment offer',
                        'Prepare application documents',
                        'Submit at diplomatic mission',
                        'Attend interview if required',
                        'Receive Blue Card decision',
                        'Travel & complete registration'
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

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-400 mb-1">Advisory Service</h4>
                  <p className="text-sm text-green-300">
                    JioWW Global provides immigration consultation and employer matching services for Slovenia. 
                    We assist with documentation and application processes. Final approvals are made by 
                    Slovenian authorities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Malta Work Permits */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Malta Work Permits</h3>
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                EU Island Nation
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Employment License */}
              <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Employment License</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Standard Permit</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Work authorization for non-EU nationals in Malta
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Validity:</strong> 1 year (renewable)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Min Salary:</strong> €16,500/year</span>
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
                        'Valid job offer from Maltese employer',
                        'Educational qualifications relevant to job',
                        'Clean criminal record certificate',
                        'Health insurance coverage',
                        'Proof of accommodation in Malta',
                        'Labour market test (if applicable)'
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
                        'Employer applies for employment license',
                        'Jobsplus conducts labour market test',
                        'Submit personal documents',
                        'Apply for residence permit',
                        'Attend biometric appointment',
                        'Receive permits approval',
                        'Travel to Malta & collect ID card'
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

              {/* Highly Qualified Persons Rules */}
              <Card className="border-l-4 border-l-pink-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Highly Qualified Persons</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Fast Track</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Expedited process for highly skilled professionals
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Validity:</strong> 3 years (renewable)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Min Salary:</strong> €27,000/year</span>
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
                        'University degree or equivalent qualification',
                        'Minimum 5 years professional experience',
                        'Employment contract with qualifying salary',
                        'Professional indemnity insurance',
                        'No labour market test required',
                        'Fast-track processing'
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
                        'Verify qualification requirements',
                        'Secure employment offer',
                        'Submit HQP application',
                        'Fast-track processing begins',
                        'Receive employment license',
                        'Apply for residence permit',
                        'Complete Malta relocation'
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

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-400 mb-1">Professional Consultation</h4>
                  <p className="text-sm text-purple-300">
                    JioWW Global is a licensed immigration consultancy and recruitment advisory. We provide 
                    documentation support, employer connections, and application guidance. Final decisions 
                    rest with Malta immigration authorities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Croatia Work Permits */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Croatia Work Permits</h3>
              <Badge className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
                EU Gateway
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Work and Residence Permit */}
              <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Work & Residence Permit</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Standard Process</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    Combined permit for work and residence in Croatia
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Validity:</strong> 1-2 years (renewable)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Min Salary:</strong> National minimum wage</span>
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
                        'Job offer from Croatian employer',
                        'Work permit approval from Croatian Employment Service',
                        'Educational credentials recognition',
                        'Criminal record certificate',
                        'Health insurance coverage',
                        'Proof of accommodation'
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
                        'Employer applies for work permit',
                        'Croatian Employment Service assessment',
                        'Submit residence permit application',
                        'Attend consular interview',
                        'Biometric data collection',
                        'Receive permit approval',
                        'Travel to Croatia & register address'
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

              {/* EU Blue Card Croatia */}
              <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>EU Blue Card Croatia</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">Highly Skilled</Badge>
                  </CardTitle>
                  <p className="text-gray-300">
                    For highly qualified professionals with university education
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Validity:</strong> 4 years (renewable)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-gray-300"><strong className="text-primary">Salary:</strong> 1.5x national average</span>
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
                        'University degree (at least 3 years)',
                        'Employment contract with qualifying salary',
                        'Professional experience in field',
                        'Recognition of qualifications',
                        'Clean criminal background',
                        'No labour market test required'
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
                        'Verify degree recognition requirements',
                        'Secure qualifying employment',
                        'Prepare Blue Card application',
                        'Submit at Croatian diplomatic post',
                        'Complete interview process',
                        'Receive EU Blue Card',
                        'Register residence in Croatia'
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

            <div className="bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-red-500/30 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">Professional Consultation</h4>
                  <p className="text-sm text-red-300">
                    JioWW Global is a licensed immigration consultancy and recruitment advisory. We provide 
                    documentation support, employer connections, and application guidance. Final decisions 
                    rest with Croatia immigration authorities.
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