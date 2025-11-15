import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import harpreetSinghImage from 'figma:asset/4e987d1db09c1119eed631350d8cedce629a124c.png';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    nationality: "Indian",
    profession: "Software Engineer",
    destination: "Canada",
    program: "Express Entry - Federal Skilled Worker",
    image: "https://images.unsplash.com/photo-1627776880991-808c5996527b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjBtYWxlJTIwdGVzdGltb25pYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg3MDIyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "JioWW Global made my Canadian PR dream come true! Their expert guidance through Express Entry was invaluable. I received my ITA and successfully landed in Toronto. Highly recommend their services!",
    rating: 5,
    drawScore: "482 CRS Points",
    successDate: "March 2025"
  },
  {
    id: 2,
    name: "Maria Santos",
    nationality: "Filipino",
    profession: "Executive Chef",
    destination: "Malta",
    program: "Malta Work Permit - Hospitality",
    image: "https://images.unsplash.com/photo-1741243412269-be61e7d2be0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGhvc3BpdGFsaXR5JTIwY2hlZiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODcwMjIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Amazing experience with JioWW Global! They secured my Malta work permit for a luxury resort in Valletta. The hospitality sector opportunities in Malta are incredible. Professional service throughout!",
    rating: 5,
    drawScore: "Employment License",
    successDate: "January 2025"
  },
  {
    id: 3,
    name: "Binod Thapa",
    nationality: "Nepali",
    profession: "Truck Driver",
    destination: "Slovenia",
    program: "Slovenia Work Permit - Transportation",
    image: "https://images.unsplash.com/photo-1708364171715-16eaf0b2d8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbGklMjB0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODcwMjIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "JioWW Global helped me get my Slovenia work permit as a truck driver. The benefits are excellent, and I can travel across EU. Thank you for making this possible!",
    rating: 5,
    drawScore: "EU Blue Card",
    successDate: "February 2025"
  },
  {
    id: 4,
    name: "Priya Sharma",
    nationality: "Indian",
    profession: "Elementary Teacher",
    destination: "Canada",
    program: "Express Entry - Canadian Experience Class",
    image: "https://images.unsplash.com/photo-1622460241924-a114e6abe1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZWFjaGVyJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg3MDIyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Outstanding service! Got selected in recent Express Entry draw with 475 points. JioWW Global's strategy for improving my CRS score was perfect. Now teaching in Vancouver!",
    rating: 5,
    drawScore: "475 CRS Points",
    successDate: "April 2025"
  },
  {
    id: 5,
    name: "Sarah Chen",
    nationality: "Filipino",
    profession: "Mechanical Engineer",
    destination: "Australia",
    program: "Skilled Independent Visa (189)",
    image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMHByb2Zlc3Npb25hbCUyMGVuZ2luZWVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg3MDIyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "JioWW Global made my Australian PR journey smooth! Their expertise in skills assessment and state nomination was exceptional. Living in Melbourne now with my family!",
    rating: 5,
    drawScore: "85 Points",
    successDate: "May 2025"
  },
  {
    id: 6,
    name: "Carlos Rivera",
    nationality: "Filipino",
    profession: "Construction Worker",
    destination: "Croatia",
    program: "Croatia Work Permit - Skilled Trades",
    image: "https://images.unsplash.com/photo-1592112820722-c6e61c9d5af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMHRyYWRlJTIwd29ya2VyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4NzAyMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Excellent support for my Croatia work permit! The construction opportunities are amazing and I'm earning great money. JioWW Global handled everything professionally!",
    rating: 5,
    drawScore: "Trade Certification",
    successDate: "December 2024"
  },
  {
    id: 7,
    name: "Anjali Patel",
    nationality: "Indian",
    profession: "IT Consultant",
    destination: "Australia",
    program: "Skilled Nominated Visa (190)",
    image: "https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NzAyMjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "JioWW Global's guidance was instrumental in getting my NSW nomination and Australia PR. Their knowledge of state requirements is unmatched. Highly professional team!",
    rating: 5,
    drawScore: "90 Points",
    successDate: "June 2025"
  },
  {
    id: 8,
    name: "Raj Gurung",
    nationality: "Nepali",
    profession: "Business Analyst",
    destination: "Canada",
    program: "Provincial Nominee Program (PNP)",
    image: "https://images.unsplash.com/photo-1630267208813-bf459d57cf82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbGklMjBwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4NzAyMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Got my Ontario PNP nomination through JioWW Global! Their strategic approach for PNP applications is excellent. Now settled in Toronto with my family. Thank you!",
    rating: 5,
    drawScore: "467 CRS Points",
    successDate: "July 2025"
  },
  {
    id: 9,
    name: "Isabella Torres",
    nationality: "Filipino",
    profession: "Registered Nurse",
    destination: "Australia",
    program: "Employer Sponsored Visa (482)",
    image: "https://images.unsplash.com/photo-1675186914580-94356f7c012c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODcwMjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "JioWW Global found me a sponsored nursing position in Brisbane! The process was smooth and their employer connections are genuine. Living my Australian dream now!",
    rating: 5,
    drawScore: "Employer Sponsored",
    successDate: "August 2025"
  },
  {
    id: 10,
    name: "Vikram Singh",
    nationality: "Indian",
    profession: "Project Manager",
    destination: "Germany",
    program: "EU Blue Card - Skilled Worker",
    image: "https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsJTIwbWFsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODcwMjIzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Exceptional service for my Germany Blue Card! JioWW Global's knowledge of German immigration laws and job market insights were invaluable. Working in Berlin now!",
    rating: 5,
    drawScore: "EU Blue Card",
    successDate: "September 2025"
  },
  {
    id: 11,
    name: "Harpreet Singh",
    nationality: "Indian (Punjabi)",
    profession: "Heavy Truck Driver",
    destination: "Slovenia",
    program: "Slovenia Work Permit - Transportation",
    image: harpreetSinghImage,
    review: "ਜਿਓ ਡਬਲਿਊ ਡਬਲਿਊ ਗਲੋਬਲ ਨੇ ਮੇਰਾ ਸਲੋਵੇਨਿਆ ਟਰੱਕ ਡਰਾਈਵਰ ਜੌਬ ਲਗਵਾ ਦਿੱਤਾ! JioWW Global arranged my Slovenia truck driver permit from Dubai. Excellent benefits and I can travel all over EU. Thank you for helping me achieve this dream!",
    rating: 5,
    drawScore: "Work Permit",
    successDate: "August 2025"
  },
  {
    id: 12,
    name: "Jasbir Singh",
    nationality: "Indian (Punjabi)",
    profession: "Heavy Truck Driver",
    destination: "Slovenia",
    program: "Slovenia Work Permit - Transportation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjB0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODcwNTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "ਧੰਨਵਾਦ ਜਿਓ ਡਬਲਿਊ ਡਬਲਿਊ ਗਲੋਬਲ! Thanks to JioWW Global, I got my Slovenia heavy truck driver position from Chandigarh. Excellent compensation with full benefits and can visit all EU countries. My family is very happy with this opportunity. Excellent professional guidance!",
    rating: 5,
    drawScore: "Work Permit",
    successDate: "June 2025"
  },
  {
    id: 13,
    name: "Rahul Mehta",
    nationality: "Indian",
    profession: "MBA Student",
    destination: "Canada",
    program: "Study Permit - Post Graduate Work Permit",
    image: "https://images.unsplash.com/photo-1748542685954-e49304dd4c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudCUyMGdyYWR1YXRlJTIwaGFwcHl8ZW58MXx8fHwxNzU5NzU4MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    review: "JioWW Global made my Canadian study visa process seamless! I'm now pursuing my MBA in Toronto with a pathway to 3-year PGWP. Their professional consultation helped me choose the right university and program. Highly recommend for study visa guidance!",
    rating: 5,
    drawScore: "Study Permit",
    successDate: "September 2024"
  },
  {
    id: 14,
    name: "Sophia Martinez",
    nationality: "Filipino",
    profession: "Engineering Student",
    destination: "Australia",
    program: "Student Visa Subclass 500",
    image: "https://images.unsplash.com/photo-1726390415698-3c60d6b16c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMHN0dWRlbnQlMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc1OTc1ODA1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    review: "Amazing support from JioWW Global for my Australian student visa! Now studying civil engineering in Sydney with post-study work rights. Their expert team guided me through every step from university selection to visa approval. Living my dream!",
    rating: 5,
    drawScore: "4-Year PSW Rights",
    successDate: "February 2025"
  },
  {
    id: 15,
    name: "Neha Sharma",
    nationality: "Indian",
    profession: "Masters Student",
    destination: "United Kingdom",
    program: "UK Student Visa - Graduate Route",
    image: "https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc1OTc1ODA1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    review: "JioWW Global's professional consultation was outstanding! Got my UK student visa and now studying at a top London university with 2-year Graduate Route visa. Their guidance on documentation and interview preparation was perfect. Thank you team!",
    rating: 5,
    drawScore: "2-Year Graduate Route",
    successDate: "January 2025"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary bg-primary/10">
            Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how JioWW Global's professional consultation has helped individuals from India, Nepal, and Philippines 
            achieve their immigration and study abroad dreams across Canada, Australia, and Europe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
              <Card className="h-full bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  {/* Client Profile */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-primary">{testimonial.profession}</p>
                      <p className="text-xs text-gray-400">{testimonial.nationality}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/30" />
                    <p className="text-gray-300 text-sm leading-relaxed pl-4">
                      {testimonial.review}
                    </p>
                  </div>

                  {/* Success Details */}
                  <div className="space-y-3 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-white">{testimonial.destination}</span>
                      </div>
                      <Badge variant="outline" className="text-xs border-primary/40 text-primary">
                        {testimonial.drawScore}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-400">{testimonial.successDate}</span>
                    </div>
                    
                    <div className="text-xs text-gray-500 bg-gray-800/50 p-2 rounded">
                      {testimonial.program}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-amber-400/10 border-primary/30 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Ready to Write Your Success Story?</h3>
              <p className="text-gray-300">
                Join thousands of successful professionals who trusted JioWW Global's professional consultation for their immigration and study abroad journey
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Badge className="bg-gradient-to-r from-red-500 to-white text-black px-3 py-1">🇨🇦 Canada PR & Study</Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1">🇦🇺 Australia PR & Study</Badge>
                <Badge className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1">🇬🇧 UK Study</Badge>
                <Badge className="bg-gradient-to-r from-red-500 to-yellow-500 text-black px-3 py-1">🇩🇪 Germany (Gulf)</Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1">🇸🇮 Slovenia (Gulf)</Badge>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1">🇲🇹 Malta (Gulf)</Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-3 py-1">🇭🇷 Croatia (Gulf)</Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}