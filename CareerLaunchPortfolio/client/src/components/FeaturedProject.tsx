import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, Database, Bell } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const phoneVariants = {
    hidden: { opacity: 0, rotate: -12 },
    visible: { opacity: 1, rotate: -6, transition: { duration: 0.8, delay: 0.2 } }
  };

  const smallPhoneVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 12, transition: { duration: 0.8, delay: 0.4 } }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-600 font-medium">Featured Project</span>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900 mt-2 mb-3">EcoGuardian Mobile App</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div 
              className="p-8 md:p-12 flex flex-col justify-center"
              variants={itemVariants}
            >
              <span className="text-sm font-medium text-primary-600 mb-2">Environmental Conservation App</span>
              <h3 className="font-inter font-semibold text-2xl md:text-3xl text-gray-900 mb-4">
                Empowering Communities to Protect Their Environment
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                EcoGuardian is a Flutter-based mobile application I developed with my team during recess that helps communities report and track environmental degradation activities such as deforestation, swamp encroachment, and improper waste disposal using camera evidence and precise location tracking.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mt-1">
                    <Camera className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Camera Integration</h4>
                    <p className="text-sm text-gray-600">Capture evidence of environmental issues</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Location Tracking</h4>
                    <p className="text-sm text-gray-600">Precise Google Maps integration</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mt-1">
                    <Database className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Real-time Database</h4>
                    <p className="text-sm text-gray-600">Firebase & Firestore backend</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mt-1">
                    <Bell className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Alert System</h4>
                    <p className="text-sm text-gray-600">Notify authorities of incidents</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Flutter</span>
                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Firebase</span>
                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Firestore</span>
                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Google Maps API</span>
                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Dart</span>
              </div>
              
              <Button 
                variant="navButton" 
                size="lg" 
                className="w-fit"
              >
                View Project Details
              </Button>
            </motion.div>
            
            <div className="bg-gray-100">
              <div className="relative h-full w-full bg-gradient-to-br from-primary-900/20 to-primary-700/20 flex items-center justify-center p-8">
                <motion.div 
                  className="relative w-[280px] h-[580px] bg-black rounded-[36px] p-2 shadow-2xl"
                  variants={phoneVariants}
                >
                  <div className="absolute top-0 w-1/3 h-6 bg-black rounded-b-xl left-1/3"></div>
                  <div className="w-full h-full bg-primary-100 rounded-[32px] overflow-hidden relative">
                    {/* Phone screen showing app */}
                    <img 
                      src="https://images.unsplash.com/photo-1604689598793-b43e0e7b1812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                      alt="EcoGuardian App Screenshot" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                    <div className="absolute bottom-8 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                        <h4 className="font-medium text-primary-900 text-sm mb-1">New Report</h4>
                        <p className="text-xs text-gray-700">Illegal dumping detected near Nakivubo Channel</p>
                        <div className="mt-2 flex justify-between">
                          <span className="text-xs text-primary-700">2 mins ago</span>
                          <button className="text-xs bg-primary-700 text-white px-2 py-1 rounded">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-10 right-10 w-[180px] h-[360px] bg-black rounded-[24px] p-1 shadow-xl hidden md:block"
                  variants={smallPhoneVariants}
                >
                  <div className="w-full h-full bg-primary-200 rounded-[22px] overflow-hidden">
                    {/* Second phone showing map view */}
                    <img 
                      src="https://images.unsplash.com/photo-1628446890356-1e57c086f060?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                      alt="EcoGuardian Map View" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
