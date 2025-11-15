import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Users, Globe, TrendingUp, CheckCircle, Star } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Clients Served', value: '2,500+', color: 'text-blue-500' },
  { icon: Globe, label: 'Countries', value: '5+', color: 'text-green-500' },
  { icon: Award, label: 'Success Rate', value: '95%', color: 'text-yellow-500' },
  { icon: TrendingUp, label: 'Years Experience', value: '15+', color: 'text-purple-500' }
];

const features = [
  'Licensed Immigration Consultancy',
  'Professional Recruitment Advisory',
  'Multilingual Consultation Team',
  'Complete Documentation Support',
  'Professional Application Guidance',
  'Post-Consultation Follow-up'
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    country: 'Canada',
    text: 'JioWW Global\'s consultation made my Canadian PR application seamless. Their expert guidance through the Express Entry process was invaluable.',
    rating: 5
  },
  {
    name: 'Marco Silva',
    country: 'Australia',
    text: 'Professional consultation service with excellent results. Their guidance helped me get my skilled migration visa approved efficiently!',
    rating: 5
  },
  {
    name: 'Ana Kovač',
    country: 'Slovenia',
    text: 'The consultation team helped me understand the EU Blue Card process completely. Excellent advisory service for European immigration.',
    rating: 5
  }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4">About JioWW Global</Badge>
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About JioWW Global
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                With over 15 years of experience in international immigration consultation, JioWW Global 
                is a trusted immigration consultancy and recruitment advisory firm. We have guided 
                thousands of professionals through their immigration journey, providing expert professional consultation 
                for work permits, permanent residency applications, and career opportunities abroad.
              </p>
              
              <p>
                As a licensed immigration consultancy, we understand that every client's situation is unique. 
                Our experienced professional consultation team provides personalized advisory services, comprehensive 
                document review, and strategic guidance to maximize your application's success potential. 
                We stay current with immigration policies and requirements across all our service countries.
              </p>
              
              <p>
                From initial professional consultation to application submission guidance, JioWW Global provides 
                expert advisory support every step of the way. Our role is to educate, guide, 
                and support you through the immigration process while you maintain full control of 
                your application journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    z: 50
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-border/50 shadow-lg">
                    <CardContent className="p-0 space-y-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <stat.icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                      </motion.div>
                      <motion.div 
                        className="text-2xl font-bold"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: 'linear' }
              }}
            >
              <Award className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">What Our Clients Say</h3>
            <p className="text-muted-foreground">Real stories from real people who achieved their immigration goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 20
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-card to-card/80 border-border/50 shadow-lg">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">Migrated to {testimonial.country}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}