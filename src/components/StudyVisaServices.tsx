import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { GraduationCap, BookOpen, Users, Clock, DollarSign, Globe, ArrowRight, FileText, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WhatsAppButton } from './WhatsAppChat';

const studyCountries = [
  {
    name: 'Canada',
    description: 'World-class education with post-graduation work permits and direct pathways to permanent residence.',
    image: 'https://images.unsplash.com/photo-1669508595978-9db290965da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjE5MDU4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Most Popular',
    features: ['PGWP Up to 3 Years', 'PR Pathway', 'Work While Study'],
    color: 'from-red-500/20 to-white/20',
    nameGradient: 'from-red-500 to-red-300',
    type: 'Study Visa',
    ieltsRequirement: 'Required - IELTS 6.0-6.5 or equivalent (TOEFL, PTE)',
    programs: [
      {
        title: 'Post Graduate Work Permit (PGWP)',
        duration: '1-3 years work permit',
        intake: 'Jan, May, Sep',
        fees: 'CAD 15,000 - 35,000/year',
        description: 'Study in Canada and get up to 3 years work permit after graduation'
      },
      {
        title: 'Study Permit with Pathway to PR',
        duration: '2-4 years program',
        intake: 'Multiple intakes',
        fees: 'CAD 12,000 - 50,000/year',
        description: 'Direct pathway from study to permanent residence'
      },
      {
        title: 'Master\'s & PhD Programs',
        duration: '1-4 years',
        intake: 'Jan, Sep',
        fees: 'CAD 18,000 - 40,000/year',
        description: 'Advanced degrees with excellent post-study opportunities'
      }
    ],
    benefits: [
      'Work while studying (20hrs/week)',
      'Post-graduation work permit',
      'Pathway to permanent residence',
      'World-class education system',
      'Safe and multicultural environment'
    ]
  },
  {
    name: 'Australia',
    description: 'Premium education with up to 4 years post-study work rights and pathways to skilled migration.',
    image: 'https://images.unsplash.com/photo-1650526799235-187f324b6387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBvdXRkb29yfGVufDF8fHx8MTc2MTkwNTg1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'High Demand',
    features: ['PSW Up to 4 Years', 'Skilled Migration', 'Work Rights'],
    color: 'from-blue-500/20 to-green-500/20',
    nameGradient: 'from-blue-500 to-green-400',
    type: 'Study Visa',
    ieltsRequirement: 'Required - IELTS 5.5-6.5 or equivalent (PTE, TOEFL)',
    programs: [
      {
        title: 'Student Visa (Subclass 500)',
        duration: 'Course duration + 2-4 years PSW',
        intake: 'Feb, Jul',
        fees: 'AUD 20,000 - 45,000/year',
        description: 'Study in Australia with post-study work rights'
      },
      {
        title: 'Graduate Temporary Visa (485)',
        duration: '2-4 years work permit',
        intake: 'Year-round',
        fees: 'AUD 1,680 visa fee',
        description: 'Work in Australia after completing studies'
      },
      {
        title: 'Skilled Migration Pathway',
        duration: 'Permanent pathway',
        intake: 'Ongoing',
        fees: 'Varies',
        description: 'Direct route to Australian permanent residence'
      }
    ],
    benefits: [
      'Work 48hrs/fortnight while studying',
      'Post-study work visa up to 4 years',
      'High-quality education standards',
      'Excellent lifestyle and climate',
      'Strong job market for graduates'
    ]
  },
  {
    name: 'New Zealand',
    description: 'Quality education with post-study work visa and pathway to skilled residence, known for safety and lifestyle.',
    image: 'https://images.unsplash.com/photo-1701679532499-c2413aa5abb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBaZWFsYW5kJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwY2FtcHVzfGVufDF8fHx8MTc2MTkwNjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Emerging',
    features: ['PSW Up to 3 Years', 'PR Pathway', 'Safe Environment'],
    color: 'from-blue-400/20 to-green-400/20',
    nameGradient: 'from-blue-400 to-green-500',
    type: 'Study Visa',
    ieltsRequirement: 'Required - IELTS 6.0 overall or equivalent (PTE, TOEFL)',
    programs: [
      {
        title: 'Student Visa',
        duration: 'Course duration',
        intake: 'Feb, Jul',
        fees: 'NZD 22,000 - 32,000/year',
        description: 'Study in New Zealand with excellent work rights'
      },
      {
        title: 'Post-Study Work Visa',
        duration: '1-3 years work visa',
        intake: 'Year-round',
        fees: 'NZD 700 visa fee',
        description: 'Work in New Zealand after graduation'
      },
      {
        title: 'Skilled Migrant Category',
        duration: 'Permanent pathway',
        intake: 'Ongoing',
        fees: 'Varies',
        description: 'Pathway to New Zealand permanent residence'
      }
    ],
    benefits: [
      'Work 20hrs/week while studying',
      'Post-study work visa up to 3 years',
      'World-renowned education quality',
      'Safe and welcoming environment',
      'Lower cost compared to Australia/UK'
    ]
  },
  {
    name: 'United Kingdom',
    description: 'Prestigious universities with 2-year Graduate Route visa and global recognition.',
    image: 'https://images.unsplash.com/photo-1716654716574-fbe502812021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSyUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMGNhbXB1cyUyMGxpYnJhcnl8ZW58MXx8fHwxNzYxOTA1ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Premium',
    features: ['Graduate Route', 'World Rankings', 'Work Visa'],
    color: 'from-blue-600/20 to-red-600/20',
    nameGradient: 'from-blue-600 to-red-500',
    type: 'Study Visa',
    ieltsRequirement: 'Required - IELTS 6.0-6.5 (UKVI) or equivalent',
    programs: [
      {
        title: 'Student Visa (Tier 4)',
        duration: 'Course duration',
        intake: 'Sep, Jan, May',
        fees: 'GBP 15,000 - 35,000/year',
        description: 'Study at world-renowned UK universities'
      },
      {
        title: 'Graduate Route Visa',
        duration: '2 years (3 for PhD)',
        intake: 'Year-round',
        fees: 'GBP 822 visa fee',
        description: 'Work in the UK after graduation'
      },
      {
        title: 'Skilled Worker Visa',
        duration: 'Up to 5 years',
        intake: 'Ongoing',
        fees: 'Varies',
        description: 'Long-term work visa leading to settlement'
      }
    ],
    benefits: [
      'Work up to 20hrs/week while studying',
      '2-year post-study work visa',
      'World-class universities',
      'Gateway to Europe',
      'Rich cultural heritage'
    ]
  },
  {
    name: 'Germany',
    description: 'Low-cost quality education with 18-month post-study work visa and EU opportunities.',
    image: 'https://images.unsplash.com/photo-1644490167203-a217beaa3170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW55JTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxOTA1ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Affordable',
    features: ['Low/No Tuition', 'EU Access', '18 Month PSW'],
    color: 'from-red-500/20 to-yellow-500/20',
    nameGradient: 'from-red-500 to-yellow-400',
    type: 'Study Visa',
    ieltsRequirement: 'Flexible - Some universities accept MOI or Duolingo',
    programs: [
      {
        title: 'Germany Student Visa',
        duration: 'Course duration + 18 months',
        intake: 'Mar, Sep',
        fees: 'EUR 500 - 20,000/year',
        description: 'Study in Germany with excellent post-study opportunities'
      },
      {
        title: 'Job Seeker Visa',
        duration: '18 months',
        intake: 'Year-round',
        fees: 'EUR 75 visa fee',
        description: 'Search for employment after graduation'
      },
      {
        title: 'EU Blue Card',
        duration: 'Up to 4 years',
        intake: 'Ongoing',
        fees: 'Varies',
        description: 'Work permit for highly qualified professionals'
      }
    ],
    benefits: [
      'Low-cost or free education',
      'Work opportunities while studying',
      'EU mobility and opportunities',
      'Strong economy and job market',
      'High quality of life'
    ]
  },
  {
    name: 'Poland',
    description: 'Affordable European education with many English-taught programs. Several universities accept Medium of Instruction (MOI) certificates instead of IELTS.',
    image: 'https://images.unsplash.com/photo-1568986890521-d9856b35bcd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb2xhbmQlMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzYxOTA1ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Asian Favorite',
    features: ['No IELTS Option', 'Affordable Fees', 'EU Access'],
    color: 'from-red-600/20 to-white/20',
    nameGradient: 'from-red-600 to-white',
    type: 'Study Visa',
    ieltsRequirement: 'Not Mandatory - MOI Certificate Accepted',
    programs: [
      {
        title: 'Bachelor Programs (English)',
        duration: '3-4 years',
        intake: 'Sep, Feb',
        fees: 'EUR 2,000 - 4,000/year',
        description: 'English-taught programs without IELTS requirement'
      },
      {
        title: 'Master Programs (English)',
        duration: '1.5-2 years',
        intake: 'Sep, Feb',
        fees: 'EUR 2,500 - 5,000/year',
        description: 'Advanced degrees with MOI certificate option'
      },
      {
        title: 'Medical Programs',
        duration: '6 years',
        intake: 'Sep',
        fees: 'EUR 10,000 - 13,000/year',
        description: 'Popular MD programs for Asian students'
      }
    ],
    benefits: [
      'MOI certificate accepted (no IELTS needed)',
      'Very affordable tuition fees',
      'Work permit during studies',
      'Schengen visa access to EU',
      'Safe and welcoming environment'
    ]
  },
  {
    name: 'Italy',
    description: 'World-renowned education in arts, design, and engineering. Many universities accept previous English education proof without IELTS.',
    image: 'https://images.unsplash.com/photo-1683561780884-dd8d0bac9e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFseSUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMGNhbXB1c3xlbnwxfHx8fDE3NjE5MDU4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Design Hub',
    features: ['Flexible English Proof', 'Rich Culture', 'EU Pathway'],
    color: 'from-green-600/20 to-red-600/20',
    nameGradient: 'from-green-600 to-red-600',
    type: 'Study Visa',
    ieltsRequirement: 'Flexible - University Interview or MOI Accepted',
    programs: [
      {
        title: 'Public Universities',
        duration: '3 years (Bachelor), 2 years (Master)',
        intake: 'Sep',
        fees: 'EUR 900 - 4,000/year',
        description: 'Low-cost quality education at public institutions'
      },
      {
        title: 'Fashion & Design Programs',
        duration: '1-3 years',
        intake: 'Sep, Jan',
        fees: 'EUR 10,000 - 20,000/year',
        description: 'World-class design and fashion institutes'
      },
      {
        title: 'Engineering & Business',
        duration: '2 years (Master)',
        intake: 'Sep, Feb',
        fees: 'EUR 3,000 - 15,000/year',
        description: 'Top-ranked programs with global recognition'
      }
    ],
    benefits: [
      'Many universities waive IELTS for MOI holders',
      'Extremely affordable public universities',
      '1-year post-study work visa',
      'Rich cultural and historical experience',
      'Gateway to European job market'
    ]
  },
  {
    name: 'Hungary',
    description: 'Popular for medical and engineering programs. Several universities accept MOI certificates and have flexible English requirements for Asian students.',
    image: 'https://images.unsplash.com/photo-1606996704811-46b5a48e9025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIdW5nYXJ5JTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwY2FtcHVzfGVufDF8fHx8MTc2MTkwNTg1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Medical Education',
    features: ['MOI Accepted', 'Medical Programs', 'Affordable'],
    color: 'from-red-500/20 to-green-500/20',
    nameGradient: 'from-red-500 to-green-500',
    type: 'Study Visa',
    ieltsRequirement: 'Not Required - MOI or University Test',
    programs: [
      {
        title: 'Medical Programs (MD)',
        duration: '6 years',
        intake: 'Sep, Feb',
        fees: 'EUR 7,200 - 18,000/year',
        description: 'Highly sought-after medical degrees by Asian students'
      },
      {
        title: 'Engineering Programs',
        duration: '3-4 years (Bachelor), 2 years (Master)',
        intake: 'Sep, Feb',
        fees: 'EUR 3,500 - 6,000/year',
        description: 'Quality engineering education without IELTS'
      },
      {
        title: 'Business & Management',
        duration: '2 years',
        intake: 'Sep, Feb',
        fees: 'EUR 4,000 - 8,000/year',
        description: 'MBA and business programs with flexible entry'
      }
    ],
    benefits: [
      'No IELTS - MOI certificate sufficient',
      'Recognized medical degrees (WHO listed)',
      'Low cost of living',
      'EU member state benefits',
      'Strong Asian student community'
    ]
  },
  {
    name: 'France',
    description: 'Excellence in education with affordable public universities. Many programs accept English proficiency proof through interviews or MOI certificates.',
    image: 'https://images.unsplash.com/photo-1638569775144-a87baa6a4d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGcmFuY2UlMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzYxOTA1ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Prestige',
    features: ['Interview Based', 'Low Tuition', 'EU Opportunities'],
    color: 'from-blue-600/20 to-red-600/20',
    nameGradient: 'from-blue-600 to-red-600',
    type: 'Study Visa',
    ieltsRequirement: 'Flexible - Campus France Interview or B2 Certificate',
    programs: [
      {
        title: 'Public Universities',
        duration: '3 years (Licence), 2 years (Master)',
        intake: 'Sep',
        fees: 'EUR 170 - 600/year',
        description: 'Highly subsidized quality education'
      },
      {
        title: 'Grandes Écoles',
        duration: '2-5 years',
        intake: 'Sep, Feb',
        fees: 'EUR 500 - 15,000/year',
        description: 'Elite French institutions for engineering & business'
      },
      {
        title: 'MBA & Business Schools',
        duration: '1-2 years',
        intake: 'Sep, Jan',
        fees: 'EUR 10,000 - 35,000/year',
        description: 'World-ranked business programs'
      }
    ],
    benefits: [
      'Campus France interview can replace IELTS',
      'Extremely low fees at public universities',
      '2-year post-study work permit',
      'Learn French - global language advantage',
      'Excellent quality of life'
    ]
  },
  {
    name: 'Czech Republic',
    description: 'High-quality education at affordable costs. Free education in Czech language, and English programs accept MOI certificates for Asian students.',
    image: 'https://images.unsplash.com/photo-1606996704811-46b5a48e9025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDemVjaCUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMGNhbXB1c3xlbnwxfHx8fDE3NjE5MDU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Budget Friendly',
    features: ['Free Czech Programs', 'MOI Accepted', 'Low Living Cost'],
    color: 'from-blue-500/20 to-red-500/20',
    nameGradient: 'from-blue-500 to-red-500',
    type: 'Study Visa',
    ieltsRequirement: 'Not Mandatory - MOI or University Test',
    programs: [
      {
        title: 'Czech-Taught Programs',
        duration: '3 years (Bachelor), 2 years (Master)',
        intake: 'Sep',
        fees: 'FREE',
        description: 'Free education in Czech language'
      },
      {
        title: 'English-Taught Programs',
        duration: '3-4 years (Bachelor), 2 years (Master)',
        intake: 'Sep',
        fees: 'EUR 2,000 - 8,000/year',
        description: 'Affordable English programs without IELTS'
      },
      {
        title: 'Engineering & IT',
        duration: '2 years',
        intake: 'Sep, Feb',
        fees: 'EUR 3,000 - 6,000/year',
        description: 'Strong technical education'
      }
    ],
    benefits: [
      'FREE education in Czech language',
      'MOI certificate accepted for English programs',
      'Very low cost of living',
      'Central European location',
      'Work opportunities for students'
    ]
  },
  {
    name: 'Netherlands',
    description: '100% English-taught programs with high academic standards. Some universities flexible with English proficiency requirements.',
    image: 'https://images.unsplash.com/photo-1713204966088-73a7e9f4a27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXRoZXJsYW5kcyUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMGNhbXB1c3xlbnwxfHx8fDE3NjE5MDU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Quality Education',
    features: ['English Programs', 'Job Opportunities', '1 Year PSW'],
    color: 'from-orange-600/20 to-blue-600/20',
    nameGradient: 'from-orange-600 to-blue-600',
    type: 'Study Visa',
    ieltsRequirement: 'Required but alternatives accepted (TOEFL, Cambridge, MOI)',
    programs: [
      {
        title: 'Bachelor Programs',
        duration: '3-4 years',
        intake: 'Sep, Feb',
        fees: 'EUR 6,000 - 15,000/year',
        description: 'Comprehensive undergraduate education in English'
      },
      {
        title: 'Master Programs',
        duration: '1-2 years',
        intake: 'Sep, Feb',
        fees: 'EUR 8,000 - 20,000/year',
        description: 'World-class graduate programs'
      },
      {
        title: 'Research & PhD',
        duration: '4 years',
        intake: 'Year-round',
        fees: 'Often funded',
        description: 'Excellent research opportunities'
      }
    ],
    benefits: [
      'All programs taught in English',
      'TOEFL, Cambridge, or MOI alternatives to IELTS',
      '1-year job search visa after graduation',
      'High employment rate',
      'International environment'
    ]
  },
  {
    name: 'Spain',
    description: 'Growing destination for international students with increasing English-taught programs. Many universities have flexible English requirements.',
    image: 'https://images.unsplash.com/photo-1740698367121-dffeef92ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGFpbiUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMGNhbXB1c3xlbnwxfHx8fDE3NjE5MDU4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popularity: 'Emerging',
    features: ['Growing Programs', 'Affordable', 'Vibrant Culture'],
    color: 'from-red-600/20 to-yellow-500/20',
    nameGradient: 'from-red-600 to-yellow-500',
    type: 'Study Visa',
    ieltsRequirement: 'Flexible - University Interview or B2 Certificate',
    programs: [
      {
        title: 'Public Universities',
        duration: '4 years (Bachelor), 1-2 years (Master)',
        intake: 'Sep',
        fees: 'EUR 750 - 3,500/year',
        description: 'Low-cost quality education'
      },
      {
        title: 'Business & MBA',
        duration: '1-2 years',
        intake: 'Sep, Jan',
        fees: 'EUR 8,000 - 25,000/year',
        description: 'International business programs'
      },
      {
        title: 'Tourism & Hospitality',
        duration: '2-4 years',
        intake: 'Sep',
        fees: 'EUR 5,000 - 12,000/year',
        description: 'Leading programs in hospitality management'
      }
    ],
    benefits: [
      'Many universities waive IELTS for interviews',
      'Very affordable public education',
      'Learn Spanish - 2nd most spoken language',
      'Excellent climate and lifestyle',
      '1-year post-study job search visa'
    ]
  }
];

export function StudyVisaServices() {
  return (
    <section id="study-visa" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
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
            <GraduationCap className="h-4 w-4 mr-2" />
            Study Visa Programs
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Study Abroad Opportunities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            JioWW Global offers expert consultation for study visa applications including European countries with 
            flexible or NO IELTS requirements, post-study work opportunities, and pathways to permanent residence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {studyCountries.map((country, index) => (
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
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </CardTitle>
                  <CardDescription className="text-gray-300 mt-3">{country.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {country.ieltsRequirement && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <p className="text-xs text-green-400 font-semibold flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        IELTS: {country.ieltsRequirement}
                      </p>
                    </div>
                  )}
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
                          View Programs
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent 
                      className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-black/95 to-gray-900/95 border-primary/20"
                    >
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2 text-white">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <span>Study in {country.name}</span>
                        </DialogTitle>
                        <DialogDescription className="text-gray-300">
                          Complete study visa programs and opportunities in {country.name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6 space-y-6">
                        {/* IELTS Requirement */}
                        {country.ieltsRequirement && (
                          <div className="bg-green-500/10 border-2 border-green-500/30 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="text-lg font-semibold text-green-300 mb-2">English Language Requirement</h4>
                                <p className="text-green-100 text-sm leading-relaxed">
                                  {country.ieltsRequirement}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Programs */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <BookOpen className="h-5 w-5 text-primary mr-2" />
                            Available Programs
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {country.programs.map((program, idx) => (
                              <Card key={idx} className="bg-gradient-to-br from-gray-900/80 to-black/80 border-primary/20">
                                <CardHeader>
                                  <CardTitle className="text-white text-lg">{program.title}</CardTitle>
                                  <CardDescription className="text-gray-300">{program.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm">
                                  <div className="flex items-center space-x-2 text-gray-300">
                                    <Clock className="h-4 w-4 text-primary" />
                                    <span>Duration: {program.duration}</span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-gray-300">
                                    <Globe className="h-4 w-4 text-primary" />
                                    <span>Intake: {program.intake}</span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-gray-300">
                                    <DollarSign className="h-4 w-4 text-primary" />
                                    <span>Fees: {program.fees}</span>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Users className="h-5 w-5 text-primary mr-2" />
                            Why Choose {country.name}?
                          </h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            {country.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4 border-t border-primary/20">
                          <WhatsAppButton
                            message={`Hi! I'm interested in professional study visa consultation for ${country.name}. Can you help me?`}
                            className="w-full bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-500 hover:to-primary transition-all duration-300"
                          >
                            Get Professional Study Visa Consultation for {country.name}
                          </WhatsAppButton>
                        </div>
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
                <h3 className="text-2xl font-bold mb-2 text-white">Start Your Study Abroad Journey</h3>
                <p className="text-gray-300">
                  Get expert professional consultation from our education consultants for your study visa application
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message="Hi! I'm interested in professional study visa consultation. Can you help me?"
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 backdrop-blur-sm"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Book Professional Consultation
                </WhatsAppButton>
                <WhatsAppButton
                  message="Hi! I'm ready to start my study visa application. Can you guide me?"
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