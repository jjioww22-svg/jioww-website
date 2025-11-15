import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Users, Briefcase, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sikhTruckDriverImage from 'figma:asset/7321c021dda61fcafeb9b5bd2668a98234c574c8.png';
import engineerImage from 'figma:asset/3e90363d4d4ef9c88949dbf94a34b7d0600fe349.png';
import skilledTradesImage from 'figma:asset/c432a90b10e08fae88c72d79b8747ec619d14443.png';
import hospitalityImage from 'figma:asset/aa3352a33d7d6cd65f624c12c8c7b0ae64fdc401.png';
import financeBusinessImage from 'figma:asset/ad3da5d88d646e77a2536ada21cbeffb67276079.png';
import healthcareImage from 'figma:asset/238c459e426d93c69efea4b38e24bddace8eaf00.png';

const professionalCategories = [
  {
    id: 1,
    title: "Information Technology",
    subtitle: "Software & Tech Professionals",
    description: "High-demand IT professionals including software developers, data scientists, cybersecurity experts, and system architects.",
    image: "https://images.unsplash.com/photo-1758611970983-ff9f0ec0b0c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHByb2dyYW1tZXIlMjBwZXJzb24lMjBjb2Rpbmd8ZW58MXx8fHwxNzU4NzA1NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    opportunities: "850+",
    demand: "Very High",
    gradient: "from-gray-800/60 to-gray-900/60"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    subtitle: "Medical Professionals",
    description: "Licensed healthcare professionals including doctors, nurses, pharmacists, physiotherapists, and medical technicians.",
    image: healthcareImage,
    opportunities: "620+",
    demand: "Critical",
    gradient: "from-gray-800/60 to-gray-900/60"
  },
  {
    id: 3,
    title: "Engineering & Construction",
    subtitle: "Technical Professionals",
    description: "Engineers, architects, project managers, and skilled trades professionals in construction and manufacturing.",
    image: engineerImage,
    opportunities: "480+",
    demand: "High",
    gradient: "from-gray-800/60 to-gray-900/60"
  },
  {
    id: 4,
    title: "Finance & Business",
    subtitle: "Business Professionals",
    description: "Financial analysts, accountants, business consultants, marketing professionals, and management executives.",
    image: financeBusinessImage,
    opportunities: "390+",
    demand: "Steady",
    gradient: "from-gray-800/60 to-gray-900/60"
  },
  {
    id: 5,
    title: "Hospitality & Culinary",
    subtitle: "Service Industry",
    description: "Executive chefs, hotel managers, tourism professionals, and specialized culinary arts professionals.",
    image: hospitalityImage,
    opportunities: "280+",
    demand: "Growing",
    gradient: "from-gray-800/60 to-gray-900/60"
  },
  {
    id: 6,
    title: "Education & Research",
    subtitle: "Academic Professionals",
    description: "University professors, researchers, education administrators, and specialized academic professionals.",
    image: "https://images.unsplash.com/photo-1758685848226-eedca8f6bce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcHJvZmVzc29yJTIwcGVyc29uJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9uJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzU4NzA1NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    opportunities: "210+",
    demand: "Moderate",
    gradient: "from-gray-800/60 to-gray-900/60"
  },
  {
    id: 7,
    title: "Transportation & Logistics",
    subtitle: "Truck Drivers & Transport",
    description: "Professional truck drivers, logistics coordinators, and transportation specialists in high demand globally.",
    image: sikhTruckDriverImage,
    opportunities: "320+",
    demand: "High",
    gradient: "from-gray-800/60 to-gray-900/60"
  },
  {
    id: 8,
    title: "Skilled Trades",
    subtitle: "Trade Professionals",
    description: "Welders, electricians, plumbers, carpenters, and specialized trade professionals with recognized certifications.",
    image: skilledTradesImage,
    opportunities: "410+",
    demand: "Very High",
    gradient: "from-gray-800/60 to-gray-900/60"
  }
];

export function ProfessionalCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % professionalCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % professionalCategories.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + professionalCategories.length) % professionalCategories.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getSlideStyle = (index: number) => {
    const position = index - currentIndex;
    const absPosition = Math.abs(position);
    
    if (absPosition > 2) return { display: 'none' };
    
    const translateX = position * 120;
    const scale = position === 0 ? 1 : 0.8 - (absPosition * 0.1);
    const zIndex = 5 - absPosition;
    const opacity = position === 0 ? 1 : 0.6 - (absPosition * 0.2);
    
    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      zIndex,
      opacity: Math.max(opacity, 0.1),
    };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
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
            Professional Categories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Profession, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
              {" "}Your Pathway
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover immigration opportunities tailored to your professional expertise. 
            JioWW Global provides professional consultation to match skilled professionals with the right immigration programs.
          </p>
        </motion.div>

        {/* 3D Slider Container */}
        <div className="relative h-[600px] flex items-center justify-center mb-12">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
            {professionalCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="absolute w-80 h-96"
                style={getSlideStyle(index)}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <Card className="h-full bg-gradient-to-br from-black/90 to-gray-900/90 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group cursor-pointer overflow-hidden"
                      onClick={() => goToSlide(index)}>
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80`}></div>
                    
                    {/* Overlay Stats */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Badge className="bg-black/50 text-white border-primary/30">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {category.demand}
                      </Badge>
                      <Badge className="bg-black/50 text-primary border-primary/30">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {category.opportunities}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{category.subtitle}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 border-primary/30 hover:bg-primary/20 hover:border-primary text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 border-primary/30 hover:bg-primary/20 hover:border-primary text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {professionalCategories.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Current Category Details */}
        <motion.div
          key={currentIndex}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center text-primary mb-2">
                <Users className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">{professionalCategories[currentIndex].opportunities}</span>
              </div>
              <p className="text-gray-300 text-sm">Active Opportunities</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center text-primary mb-2">
                <TrendingUp className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">{professionalCategories[currentIndex].demand}</span>
              </div>
              <p className="text-gray-300 text-sm">Market Demand</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center text-primary mb-2">
                <Briefcase className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold">6+</span>
              </div>
              <p className="text-gray-300 text-sm">Countries Available</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-gradient-to-r from-primary to-amber-400 text-black hover:from-amber-400 hover:to-primary px-8 py-3">
              Explore {professionalCategories[currentIndex].title} Opportunities
            </Button>
          </div>
        </motion.div>
      </div>


    </section>
  );
}