import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  CheckCircle, 
  FileText, 
  DollarSign, 
  Users, 
  MapPin,
  AlertCircle,
  Info
} from 'lucide-react';

// Canada PR Programs
export const CanadaPRDetails = () => {
  const programs = [
    {
      name: "Express Entry System",
      category: "Federal Economic Immigration",
      minScore: "470+ CRS Points",
      programs: [
        "Federal Skilled Worker Program (FSWP)",
        "Canadian Experience Class (CEC)", 
        "Federal Skilled Trades Program (FSTP)"
      ],
      steps: [
        "Language Test (IELTS/CELPIP/TEF/TCF)",
        "Educational Credential Assessment (ECA)",
        "Create Express Entry Profile",
        "Receive Invitation to Apply (ITA)",
        "Submit Complete Application within 60 days",
        "Medical Examination & Police Clearance",
        "Final Decision & COPR issuance"
      ],
      investment: "No investment required"
    },
    {
      name: "Provincial Nominee Program (PNP)",
      category: "Provincial Economic Immigration",
      minScore: "300+ CRS Points + Nomination",
      programs: [
        "Ontario Immigrant Nominee Program (OINP)",
        "British Columbia Provincial Nominee Program (BC PNP)",
        "Alberta Immigrant Nominee Program (AINP)"
      ],
      steps: [
        "Check Provincial Requirements",
        "Submit Provincial Application",
        "Receive Provincial Nomination",
        "Apply through Express Entry (if applicable)",
        "Submit Federal Application",
        "Complete Medical & Security Checks",
        "Landing and PR Card"
      ],
      investment: "Varies by province"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-gradient-to-r from-red-600 to-red-500 text-white">
          Canada Permanent Residence Programs
        </Badge>
        <h3 className="text-2xl font-bold mb-2">Pathways to Canadian PR</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          JioWW Global provides expert consultation and guidance for Canadian immigration programs. 
          We assess your eligibility and guide you through the complete process.
        </p>
      </div>

      {programs.map((program, index) => (
        <motion.div
          key={program.name}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{program.name}</CardTitle>
                  <Badge variant="outline">{program.category}</Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Minimum Requirement</div>
                  <div className="font-semibold text-primary">{program.minScore}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    Available Programs
                  </h4>
                  <ul className="space-y-2">
                    {program.programs.map((prog, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span><strong>Investment:</strong> {program.investment}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Step-by-Step Process</h4>
                <div className="grid gap-3">
                  {program.steps.map((step, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-amber-800 mb-1">Consultation Advisory</h4>
            <p className="text-sm text-amber-700">
              JioWW Global is an immigration consultancy and recruitment advisory firm. We provide guidance, 
              document preparation assistance, and application support. Final decisions are made by Immigration, 
              Refugees and Citizenship Canada (IRCC).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Australia PR Programs
export const AustraliaPRDetails = () => {
  const programs = [
    {
      name: "Skilled Independent Visa (Subclass 189)",
      category: "Points-tested Skilled Migration",
      minScore: "65+ Points (Competitive: 85+)",
      requirements: [
        "Age: Under 45 years",
        "English: Competent level (6.0 IELTS)",
        "Skills Assessment for nominated occupation",
        "Invitation through SkillSelect"
      ],
      steps: [
        "Skills Assessment from relevant authority",
        "English Language Test (IELTS/PTE/TOEFL)",
        "Submit Expression of Interest (EOI)",
        "Receive Invitation to Apply",
        "Lodge Visa Application within 60 days",
        "Health Examinations & Character Checks",
        "Visa Grant & Entry to Australia"
      ],
      investment: "No investment required"
    },
    {
      name: "Skilled Nominated Visa (Subclass 190)",
      category: "State/Territory Nominated",
      minScore: "65+ Points + State Nomination",
      requirements: [
        "State/Territory nomination",
        "Commitment to live in nominating state",
        "Meet state-specific requirements",
        "Occupation on state's skilled occupation list"
      ],
      steps: [
        "Check State/Territory Requirements",
        "Submit State Nomination Application",
        "Receive State Nomination",
        "Submit EOI to SkillSelect",
        "Receive Invitation & Lodge Application",
        "Complete Health & Character Requirements",
        "Visa Grant & Migration"
      ],
      investment: "Varies by state"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          Australia Permanent Residence Programs
        </Badge>
        <h3 className="text-2xl font-bold mb-2">Australian PR Pathways</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Expert guidance for Australian skilled migration programs. JioWW Global assists with 
          skills assessment, EOI preparation, and complete application support.
        </p>
      </div>

      {programs.map((program, index) => (
        <motion.div
          key={program.name}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{program.name}</CardTitle>
                  <Badge variant="outline">{program.category}</Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Points Requirement</div>
                  <div className="font-semibold text-primary">{program.minScore}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    Key Requirements
                  </h4>
                  <ul className="space-y-2">
                    {program.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span><strong>Investment:</strong> {program.investment}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Step-by-Step Process</h4>
                <div className="grid gap-3">
                  {program.steps.map((step, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Consultation Service</h4>
            <p className="text-sm text-blue-700">
              JioWW Global provides professional immigration consultation and application assistance. 
              All applications are subject to government assessment and approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// European Work Permits - Gulf Candidates
export const EuropeanWorkPermitsGulf = ({ country }: { country: 'Slovenia' | 'Malta' | 'Croatia' }) => {
  const countryData = {
    Slovenia: {
      color: "green",
      professions: [
        {
          name: "Truck Drivers",
          description: "Professional heavy vehicle operators for European logistics and transportation",
          requirements: [
            "Valid Category C/CE driving license",
            "Minimum 2 years driving experience",
            "Clean driving record",
            "Basic English communication skills"
          ],
          benefits: [
            "Competitive European wages",
            "EU-standard accommodation provided",
            "Health insurance coverage",
            "Access to entire EU market"
          ]
        },
        {
          name: "Welders",
          description: "Certified welding professionals for construction and manufacturing sectors",
          requirements: [
            "Welding certification (TIG/MIG/MAG)",
            "Minimum 3 years practical experience",
            "Ability to read technical drawings",
            "English language proficiency"
          ],
          benefits: [
            "High demand skilled profession",
            "Family visa sponsorship available",
            "EU residence permit",
            "Career advancement opportunities"
          ]
        }
      ],
      process: [
        "Submit CV via WhatsApp (+971 50 181 8023) for initial screening",
        "Professional consultation & eligibility assessment",
        "Interview in English (via video call)",
        "Document preparation & verification",
        "Employer matching & job offer",
        "Work permit application processing",
        "Embassy interview (if required)",
        "Visa issuance & travel arrangements"
      ]
    },
    Malta: {
      color: "yellow",
      professions: [
        {
          name: "Hospitality Professionals",
          description: "Hotel staff, restaurant managers, chefs, and tourism service professionals",
          requirements: [
            "Hospitality experience (minimum 2 years)",
            "English language proficiency (mandatory)",
            "Relevant certifications preferred",
            "Customer service excellence"
          ],
          benefits: [
            "English-speaking work environment",
            "Mediterranean lifestyle",
            "EU work permit benefits",
            "Tourism industry growth opportunities"
          ]
        },
        {
          name: "Trade Professions",
          description: "Electricians, plumbers, carpenters, HVAC technicians, and skilled tradespeople",
          requirements: [
            "Trade certification/license",
            "Minimum 3 years practical experience",
            "Tool proficiency",
            "English communication skills"
          ],
          benefits: [
            "High demand in construction sector",
            "Competitive wages",
            "Housing support",
            "Family sponsorship options"
          ]
        },
        {
          name: "Operators",
          description: "Heavy machinery operators, crane operators, forklift drivers, and equipment specialists",
          requirements: [
            "Valid operator license/certification",
            "Minimum 2 years operational experience",
            "Safety training certificates",
            "Basic English proficiency"
          ],
          benefits: [
            "Growing construction industry",
            "Stable employment contracts",
            "EU-standard safety protocols",
            "Professional development"
          ]
        }
      ],
      process: [
        "WhatsApp CV to +971 50 181 8023 for review",
        "Free eligibility assessment & consultation",
        "English interview (phone/video)",
        "Skills verification & documentation",
        "Employer connection & job offer",
        "Employment license application",
        "Medical examination & police clearance",
        "Visa processing & relocation support"
      ]
    },
    Croatia: {
      color: "blue",
      professions: [
        {
          name: "Hospitality Professionals",
          description: "Tourism and hospitality staff for Croatia's booming coastal tourism industry",
          requirements: [
            "Hospitality experience (minimum 2 years)",
            "English language skills (essential)",
            "Customer service background",
            "Flexibility for seasonal work"
          ],
          benefits: [
            "Beautiful coastal locations",
            "Growing tourism sector",
            "EU membership benefits",
            "Cultural diversity"
          ]
        },
        {
          name: "Trade Professions",
          description: "Construction workers, electricians, plumbers, and skilled craftsmen",
          requirements: [
            "Trade qualification/certification",
            "Minimum 3 years experience",
            "Technical skills proficiency",
            "Basic English communication"
          ],
          benefits: [
            "Infrastructure development projects",
            "Competitive European wages",
            "EU residence opportunities",
            "Long-term employment prospects"
          ]
        },
        {
          name: "Operators",
          description: "Construction equipment and heavy machinery operators",
          requirements: [
            "Valid operator certifications",
            "Proven operational experience (2+ years)",
            "Safety compliance knowledge",
            "English language basics"
          ],
          benefits: [
            "Construction boom",
            "EU-standard working conditions",
            "Career progression",
            "Family reunification possible"
          ]
        }
      ],
      process: [
        "Send CV to WhatsApp +971 50 181 8023",
        "Initial screening & consultation",
        "English proficiency interview",
        "Document collection & authentication",
        "Employer pairing & contract signing",
        "Work permit submission",
        "Embassy appointment & interview",
        "Visa approval & departure preparation"
      ]
    }
  };

  const data = countryData[country];

  return (
    <div className="space-y-6">
      {/* Important Notice */}
      <div className="bg-amber-900/30 border-2 border-amber-500/50 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-amber-200 mb-2">⚠️ Gulf Candidates Only</h4>
            <p className="text-amber-100 text-sm leading-relaxed">
              These work permit programs are exclusively available for candidates currently residing in Gulf countries (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman). 
              JioWW Global provides professional consultation and recruitment advisory services for eligible candidates.
            </p>
          </div>
        </div>
      </div>

      {/* Available Professions */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Available Professions in {country}
        </h3>
        <div className="space-y-4">
          {data.professions.map((profession, idx) => (
            <Card key={idx} className="bg-black/40 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{profession.name}</CardTitle>
                <CardDescription className="text-gray-300">{profession.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Requirements:
                  </h5>
                  <ul className="space-y-1 text-sm text-gray-300 ml-6">
                    {profession.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Benefits:
                  </h5>
                  <ul className="space-y-1 text-sm text-gray-300 ml-6">
                    {profession.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Step-by-Step Application Process
        </h3>
        <Card className="bg-gradient-to-br from-primary/10 to-amber-500/10 border-primary/30">
          <CardContent className="p-6">
            <div className="space-y-3">
              {data.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-amber-600 flex items-center justify-center text-black font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-gray-200 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interview Information */}
      <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Interview Information
        </h4>
        <ul className="space-y-2 text-sm text-blue-100">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <span><strong>Language:</strong> All interviews conducted in English</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <span><strong>Format:</strong> Initial screening via phone/video call</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <span><strong>Focus:</strong> Professional experience, skills verification, and job expectations</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <span><strong>Duration:</strong> 15-30 minutes for initial assessment</span>
          </li>
        </ul>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-primary/20 to-amber-500/20 border border-primary/40 p-6 rounded-lg text-center">
        <h4 className="text-xl font-bold text-white mb-3">Ready to Apply for {country}?</h4>
        <p className="text-gray-300 mb-4">
          Our immigration consultants are ready to guide you through the entire process
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            className="bg-gradient-to-r from-primary to-amber-600 text-black hover:shadow-xl"
            onClick={() => window.open('https://wa.me/971501818023?text=I\'m interested in ' + country + ' work permits. Please guide me.', '_blank')}
          >
            <DollarSign className="w-4 h-4 mr-2" />
            WhatsApp: +971 50 181 8023
          </Button>
        </div>
      </div>

      {/* Consultation Advisory */}
      <div className="bg-orange-900/20 border-2 border-orange-500/40 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-orange-200 mb-2">Consultation Advisory</h4>
            <p className="text-orange-100 text-sm leading-relaxed">
              JioWW Global is an immigration consultancy and recruitment advisory firm. We provide guidance, document preparation assistance, and application support. Final decisions are made by {country} Immigration and Employment Authorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Germany Skilled Worker Program (Open to All)
export const GermanySkilledProgram = () => {
  return (
    <div className="space-y-6">
      {/* Program Overview */}
      <div className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 border-2 border-yellow-500/50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-yellow-400" />
          Germany Skilled Worker Program
        </h3>
        <p className="text-gray-200 leading-relaxed">
          Germany's Skilled Worker Immigration Act welcomes qualified professionals from around the world. 
          This program is <strong className="text-yellow-300">open to all nationalities</strong> 
          and offers various pathways including the EU Blue Card, Skilled Worker Visa, and Job Seeker Visa.
        </p>
      </div>

      {/* Main Programs */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-black/40 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">EU Blue Card Germany</CardTitle>
            <CardDescription className="text-gray-300">For highly qualified professionals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h5 className="font-semibold text-white mb-2">Requirements:</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>University degree (Bachelor's or higher)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Job offer with minimum €45,300 annual salary (€41,042 for shortage occupations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Degree recognition in Germany</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Health insurance coverage</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">Benefits:</h5>
              <ul className="space-y-1 text-sm text-green-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Permanent residence after 21-33 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Family reunification immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Spouse can work without restrictions</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Skilled Worker Visa</CardTitle>
            <CardDescription className="text-gray-300">For vocational and professional qualifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h5 className="font-semibold text-white mb-2">Requirements:</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Recognized vocational training or university degree</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Concrete job offer from German employer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Sufficient German or English language skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Qualification recognition certificate</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">In-Demand Professions:</h5>
              <ul className="space-y-1 text-sm text-green-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>IT professionals & software engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Engineers (mechanical, electrical, civil)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Healthcare professionals (nurses, doctors)</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application Process */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Application Process
        </h3>
        <Card className="bg-gradient-to-br from-primary/10 to-amber-500/10 border-primary/30">
          <CardContent className="p-6">
            <div className="space-y-3">
              {[
                "Professional consultation & eligibility assessment",
                "Qualification recognition (via Anabin database or ZAB)",
                "Job search support & employer connections",
                "Employment contract signing",
                "Visa application at German embassy/consulate",
                "Document submission (passport, degree, job contract, etc.)",
                "Interview in English (if required)",
                "Visa approval & travel to Germany",
                "Registration with local authorities (Anmeldung)",
                "Residence permit issuance"
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-amber-600 flex items-center justify-center text-black font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-gray-200 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interview & Language Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Interview Process
          </h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Conducted in English or German</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Focus on qualifications and work experience</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Documentation verification</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-green-200 mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Language Requirements
          </h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span>German: B1 level recommended (A1 minimum)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span>English: Accepted for IT and international roles</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Free integration courses available in Germany</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-primary/20 to-amber-500/20 border border-primary/40 p-6 rounded-lg text-center">
        <h4 className="text-xl font-bold text-white mb-3">Interested in Germany Skilled Worker Program?</h4>
        <p className="text-gray-300 mb-4">
          Get expert consultation on qualification recognition, job search, and visa application
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            className="bg-gradient-to-r from-primary to-amber-600 text-black hover:shadow-xl"
            onClick={() => window.open('https://wa.me/971501818023?text=I\'m interested in Germany Skilled Worker Program. Please guide me.', '_blank')}
          >
            <DollarSign className="w-4 h-4 mr-2" />
            WhatsApp: +971 50 181 8023
          </Button>
        </div>
      </div>

      {/* Consultation Advisory */}
      <div className="bg-orange-900/20 border-2 border-orange-500/40 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-orange-200 mb-2">Consultation Advisory</h4>
            <p className="text-orange-100 text-sm leading-relaxed">
              JioWW Global is an immigration consultancy and recruitment advisory firm. We provide guidance, document preparation assistance, and application support. Final decisions are made by German Federal Employment Agency (BA) and Immigration Authorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Original European Work Permits (keeping for compatibility)
export const EuropeanWorkPermits = ({ country }: { country: 'Slovenia' | 'Malta' | 'Croatia' | 'Germany' }) => {
  const countryData = {
    Slovenia: {
      color: "green",
      programs: [
        {
          name: "EU Blue Card",
          category: "Highly Skilled Workers",
          requirements: [
            "University degree or 5+ years professional experience",
            "Job offer with salary 1.5x national average",
            "Valid employment contract",
            "Health insurance coverage"
          ],
          steps: [
            "Receive professional consultation & eligibility assessment",
            "Secure job offer from Slovenian employer",
            "Employer obtains work permit approval",
            "Apply for EU Blue Card at embassy/consulate",
            "Submit required documents & biometrics",
            "Attend interview if required",
            "Receive EU Blue Card decision",
            "Travel to Slovenia & register residence"
          ],
          validity: "1-2 years (renewable)"
        },
        {
          name: "Single Work Permit",
          category: "General Employment",
          requirements: [
            "Job offer from Slovenian employer",
            "Employer must prove no EU worker available",
            "Relevant qualifications or experience",
            "Clean criminal record"
          ],
          steps: [
            "Professional consultation for work permit options",
            "Employer applies for work permit quota",
            "Submit work permit application",
            "Obtain temporary residence permit",
            "Provide medical certificate",
            "Complete biometric enrollment",
            "Receive work & residence permit",
            "Begin employment in Slovenia"
          ],
          validity: "1 year (renewable)"
        }
      ]
    },
    Malta: {
      color: "yellow",
      programs: [
        {
          name: "Employment License (Work Permit)",
          category: "Employment-based",
          requirements: [
            "Job offer from Maltese employer",
            "Relevant qualifications and experience",
            "Medical fitness certificate",
            "Police clearance certificate"
          ],
          steps: [
            "Professional consultation & documentation review",
            "Employer applies for employment license",
            "Submit supporting documents",
            "Attend medical examination",
            "Complete employment license interview",
            "Receive employment license approval",
            "Apply for residence permit",
            "Begin work in Malta"
          ],
          validity: "1 year (renewable)"
        },
        {
          name: "EU Blue Card Malta",
          category: "Highly Skilled Workers",
          requirements: [
            "University degree or equivalent qualification",
            "Job offer with salary 1.5x national average",
            "Valid employment contract",
            "Professional experience in relevant field"
          ],
          steps: [
            "Professional consultation for EU Blue Card eligibility",
            "Secure job offer from Maltese employer",
            "Employer verifies qualification requirements",
            "Apply for EU Blue Card at embassy/consulate",
            "Submit required documents and biometrics",
            "Attend interview if required",
            "Receive EU Blue Card decision",
            "Travel to Malta and register residence"
          ],
          validity: "2 years (renewable)"
        }
      ]
    },
    Croatia: {
      color: "blue",
      programs: [
        {
          name: "Temporary Residence for Work",
          category: "Employment-based",
          requirements: [
            "Valid work permit from employer",
            "Employment contract",
            "Accommodation proof",
            "Financial means evidence"
          ],
          steps: [
            "Professional consultation & eligibility check",
            "Employer obtains work permit approval",
            "Apply for temporary residence permit",
            "Submit biometric data",
            "Provide health insurance proof",
            "Complete residence registration",
            "Receive residence permit",
            "Begin employment activities"
          ],
          validity: "1-2 years (renewable)"
        },
        {
          name: "EU Blue Card Croatia",
          category: "Highly Skilled Workers",
          requirements: [
            "University degree or equivalent qualification",
            "Job offer with competitive salary",
            "Valid employment contract",
            "Health insurance coverage"
          ],
          steps: [
            "Professional consultation for Blue Card pathway",
            "Secure employment offer from Croatian employer",
            "Employer verifies Blue Card requirements",
            "Apply for EU Blue Card",
            "Submit complete documentation",
            "Attend biometric appointment",
            "Receive Blue Card approval",
            "Register residence in Croatia"
          ],
          validity: "2 years (renewable)"
        }
      ]
    },
    Germany: {
      color: "red",
      programs: [
        {
          name: "Opportunity Visa (Job Seeker Visa)",
          category: "Job Search & Employment",
          requirements: [
            "University degree or vocational qualification",
            "Minimum 2 years professional experience",
            "German language skills (A1 minimum, B1 preferred)",
            "Financial means proof (€1,027/month)"
          ],
          steps: [
            "Professional consultation for Germany visa options",
            "Complete language certification (Goethe/TELC)",
            "Gather academic credentials & translations",
            "Apply for Opportunity Visa at German consulate",
            "Submit biometric data & attend interview",
            "Receive Opportunity Visa (6 months)",
            "Travel to Germany & search for employment",
            "Convert to residence permit after job offer"
          ],
          validity: "6 months (job search period)"
        },
        {
          name: "Skilled Worker Visa",
          category: "Employment-based",
          requirements: [
            "Recognized qualification or university degree",
            "Job offer from German employer",
            "German language skills (B1 level)",
            "Employment contract meeting salary requirements"
          ],
          steps: [
            "Professional consultation & skills evaluation",
            "Obtain credential recognition/skills assessment",
            "Secure job offer from German employer",
            "Apply for skilled worker visa",
            "Submit required documentation",
            "Attend consular interview",
            "Receive visa approval",
            "Enter Germany & begin employment"
          ],
          validity: "Up to 4 years (renewable)"
        },
        {
          name: "EU Blue Card Germany",
          category: "Highly Qualified Professionals",
          requirements: [
            "University degree (German or equivalent)",
            "Job offer with minimum salary €58,400/year",
            "Employment contract in shortage occupation",
            "German language skills (varies by profession)"
          ],
          steps: [
            "Professional consultation for Blue Card eligibility",
            "Verify university degree recognition",
            "Secure job offer meeting salary threshold",
            "Apply for EU Blue Card",
            "Submit complete application documents",
            "Complete biometric enrollment",
            "Receive Blue Card approval",
            "Travel to Germany & register residence"
          ],
          validity: "4 years (renewable, PR eligible after 21/33 months)"
        }
      ]
    }
  };

  const data = countryData[country];
  const colorClasses = {
    green: { border: "border-l-green-500", badge: "from-green-600 to-green-500" },
    yellow: { border: "border-l-yellow-500", badge: "from-yellow-600 to-orange-500" },
    blue: { border: "border-l-blue-500", badge: "from-blue-600 to-blue-500" },
    red: { border: "border-l-red-500", badge: "from-red-600 to-red-500" }
  };

  const colors = colorClasses[data.color as keyof typeof colorClasses];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Badge className={`mb-4 bg-gradient-to-r ${colors.badge} text-white`}>
          {country} Work Permit Programs - Only for Gulf Candidates
        </Badge>
        <h3 className="text-2xl font-bold mb-2">{country} Immigration Options</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          JioWW Global provides comprehensive professional consultation for {country} work permits and residence programs. 
          We guide you through documentation, application processes, and employer connections. Available only for Gulf Candidates.
        </p>
      </div>

      {data.programs.map((program, index) => (
        <motion.div
          key={program.name}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Card className={`${colors.border} border-l-4`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{program.name}</CardTitle>
                  <Badge variant="outline">{program.category}</Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Validity</div>
                  <div className="font-semibold text-primary">{program.validity}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-primary" />
                  Key Requirements
                </h4>
                <ul className="space-y-2">
                  {program.requirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Step-by-Step Process</h4>
                <div className="grid gap-3">
                  {program.steps.map((step, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {country === 'Slovenia' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Professional Consultation</h4>
              <p className="text-sm text-blue-700">
                JioWW Global is a licensed immigration consultancy and recruitment advisory. We provide documentation support, employer connections, and application guidance. Final decisions rest with {country} immigration authorities.
              </p>
            </div>
          </div>
        </div>
      )}

      {country === 'Malta' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Professional Consultation</h4>
              <p className="text-sm text-blue-700">
                JioWW Global is a licensed immigration consultancy and recruitment advisory. We provide documentation support, employer connections, and application guidance. Final decisions rest with {country} immigration authorities.
              </p>
            </div>
          </div>
        </div>
      )}

      {country === 'Croatia' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Professional Consultation</h4>
              <p className="text-sm text-blue-700">
                JioWW Global is a licensed immigration consultancy and recruitment advisory. We provide documentation support, employer connections, and application guidance. Final decisions rest with {country} immigration authorities.
              </p>
            </div>
          </div>
        </div>
      )}

      {country === 'Germany' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Professional Consultation</h4>
              <p className="text-sm text-blue-700">
                JioWW Global is a licensed immigration consultancy and recruitment advisory. We provide documentation support, employer connections, and application guidance. Final decisions rest with {country} immigration authorities.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
