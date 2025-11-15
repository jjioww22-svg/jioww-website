import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Star, Users, Globe, Award, TrendingUp, Calendar, Sparkles } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppChat';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black pt-32 md:pt-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <Badge className="bg-gradient-to-r from-primary/20 to-amber-400/20 text-primary border-primary/30 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Immigration Consultancy
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Your Gateway to</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Global Success
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              JioWW Global specializes in immigration services for 
              <span className="text-primary font-medium"> Canada, Australia, and Germany</span>, plus European work permits for 
              <span className="text-primary font-medium">Slovenia, Malta, and Croatia</span> (Gulf candidates only). 
              Transform your career with our expert professional consultation and proven success.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <WhatsAppButton
                message="Hi! I'm interested in getting a professional immigration assessment. Can you help me?"
                size="lg"
                className="bg-gradient-to-r from-primary to-amber-400 text-black hover:from-amber-400 hover:to-primary hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                Get Professional Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </WhatsAppButton>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm px-8 py-4"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Services
                  <Globe className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-primary mb-1">2,500+</div>
                <div className="text-gray-400 text-sm">Successful Cases</div>
              </div>
              <div className="text-center bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 3D Floating Cards */}
            <div className="relative w-full h-96 lg:h-[500px]" style={{ perspective: '1000px' }}>
              {/* Main Card */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-96 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 rounded-2xl shadow-2xl border border-primary/30 backdrop-blur-sm"
                animate={{ 
                  rotateY: [0, 10, 0, -10, 0],
                  rotateX: [0, 5, 0, -5, 0],
                  z: [0, 20, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="p-8 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-amber-400/5 rounded-2xl"></div>
                  
                  <motion.div
                    className="w-28 h-28 bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, #4ade80, #3b82f6, #1d4ed8)',
                      boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {/* Globe with continents */}
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      {/* Base ocean color */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                      
                      {/* Continents */}
                      <div className="absolute top-3 left-4 w-6 h-4 bg-green-400 rounded-full opacity-80"></div>
                      <div className="absolute top-6 right-5 w-4 h-6 bg-green-500 rounded-full opacity-80"></div>
                      <div className="absolute bottom-4 left-6 w-5 h-3 bg-green-400 rounded-full opacity-80"></div>
                      <div className="absolute bottom-6 right-4 w-3 h-4 bg-green-500 rounded-full opacity-80"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 bg-green-400 rounded-full opacity-80"></div>
                      
                      {/* Grid lines for globe effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/20"></div>
                      <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white/20"></div>
                      <div className="absolute left-1/4 top-0 w-0.5 h-full bg-white/10 rounded-full"></div>
                      <div className="absolute left-3/4 top-0 w-0.5 h-full bg-white/10 rounded-full"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute top-2 left-2 w-6 h-6 bg-white/30 rounded-full blur-sm"></div>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Global Reach</h3>
                  <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                    Connecting ambitious professionals to life-changing opportunities across 6 countries
                  </p>
                  
                  {/* Stats inside card */}
                  <div className="mt-6 grid grid-cols-2 gap-4 w-full relative z-10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">6+</div>
                      <div className="text-xs text-gray-400">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">50+</div>
                      <div className="text-xs text-gray-400">Programs</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Floating Country Flags */}
              {/* Canada Flag */}
              <motion.div
                className="absolute top-6 right-10 w-16 h-12 rounded-lg overflow-hidden shadow-2xl border-3 border-white/30"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity },
                  rotate: { duration: 4, repeat: Infinity },
                  scale: { duration: 2, repeat: Infinity }
                }}
                style={{
                  boxShadow: '0 8px 32px rgba(220, 38, 38, 0.3)'
                }}
              >
                <div className="w-full h-full bg-red-600 relative">
                  <div className="absolute left-0 top-0 w-1/3 h-full bg-red-600"></div>
                  <div className="absolute left-1/3 top-0 w-1/3 h-full bg-white flex items-center justify-center">
                    {/* Maple leaf simplified */}
                    <div className="w-4 h-4 bg-red-600 transform rotate-45 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-3 bg-red-600"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-1.5 bg-red-600"></div>
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 w-1/3 h-full bg-red-600"></div>
                </div>
              </motion.div>

              {/* Australia Flag */}
              <motion.div
                className="absolute top-24 right-2 w-16 h-12 rounded-lg overflow-hidden shadow-2xl border-3 border-white/30"
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity
                }}
                style={{
                  boxShadow: '0 8px 32px rgba(30, 64, 175, 0.4)'
                }}
              >
                <div className="w-full h-full bg-blue-800 relative">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-900">
                    <div className="absolute top-1 left-1 w-7 h-5 bg-red-600 relative">
                      <div className="absolute inset-0 bg-blue-800" style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 25%, 75% 25%, 75% 50%, 100% 50%, 100% 100%, 0 100%)"
                      }}></div>
                      <div className="absolute inset-0 bg-white" style={{
                        clipPath: "polygon(0 12.5%, 100% 12.5%, 100% 37.5%, 0 37.5%)"
                      }}></div>
                    </div>
                  </div>
                  {/* Southern Cross stars */}
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute bottom-2 right-5 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 right-3 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-6 right-4 w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </motion.div>

              {/* Germany Flag */}
              <motion.div
                className="absolute top-40 right-6 w-16 h-12 rounded-lg overflow-hidden shadow-2xl border-3 border-white/30"
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, -4, 4, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity
                }}
                style={{
                  boxShadow: '0 8px 32px rgba(234, 179, 8, 0.4)'
                }}
              >
                <div className="w-full h-full">
                  <div className="w-full h-1/3 bg-black"></div>
                  <div className="w-full h-1/3 bg-red-600"></div>
                  <div className="w-full h-1/3 bg-yellow-400"></div>
                </div>
              </motion.div>

              {/* Slovenia Flag */}
              <motion.div
                className="absolute bottom-24 right-2 w-16 h-12 rounded-lg overflow-hidden shadow-2xl border-3 border-white/30"
                animate={{ 
                  y: [0, 18, 0],
                  x: [0, -6, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3.2, 
                  repeat: Infinity
                }}
                style={{
                  boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)'
                }}
              >
                <div className="w-full h-full">
                  <div className="w-full h-1/3 bg-white"></div>
                  <div className="w-full h-1/3 bg-blue-600"></div>
                  <div className="w-full h-1/3 bg-red-600"></div>
                  {/* Coat of arms simplified */}
                  <div className="absolute top-2 left-2 w-6 h-6 bg-blue-700 rounded-sm border border-yellow-400"></div>
                </div>
              </motion.div>

              {/* Malta Flag */}
              <motion.div
                className="absolute bottom-8 right-10 w-16 h-12 rounded-lg overflow-hidden shadow-2xl border-3 border-white/30"
                animate={{ 
                  y: [0, -22, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3.8, 
                  repeat: Infinity
                }}
                style={{
                  boxShadow: '0 8px 32px rgba(220, 38, 38, 0.3)'
                }}
              >
                <div className="w-full h-full">
                  <div className="w-1/2 h-full bg-white relative">
                    {/* George Cross simplified */}
                    <div className="absolute top-1 left-1 w-3 h-2 bg-gray-400 rounded-sm"></div>
                  </div>
                  <div className="w-1/2 h-full bg-red-600"></div>
                </div>
              </motion.div>

              {/* Croatia Flag */}
              <motion.div
                className="absolute bottom-36 right-14 w-16 h-12 rounded-lg overflow-hidden shadow-2xl border-3 border-white/30"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -6, 6, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3.6, 
                  repeat: Infinity
                }}
                style={{
                  boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)'
                }}
              >
                <div className="w-full h-full">
                  <div className="w-full h-1/3 bg-red-600"></div>
                  <div className="w-full h-1/3 bg-white"></div>
                  <div className="w-full h-1/3 bg-blue-600"></div>
                  {/* Coat of arms simplified */}
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-red-600 rounded-sm border border-yellow-400">
                    <div className="w-full h-1/2 bg-white grid grid-cols-5 gap-px p-0.5">
                      <div className="bg-red-600 rounded-full"></div>
                      <div className="bg-white rounded-full"></div>
                      <div className="bg-red-600 rounded-full"></div>
                      <div className="bg-white rounded-full"></div>
                      <div className="bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-xl flex items-center justify-center shadow-2xl border border-primary/30"
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <TrendingUp className="h-6 w-6 text-primary" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 left-8 w-10 h-10 bg-black border-2 border-primary rounded-full flex items-center justify-center shadow-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                <Calendar className="h-5 w-5 text-primary" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 right-16 w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg flex items-center justify-center shadow-xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Award className="h-4 w-4 text-black" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}