import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary-800 to-primary-600 text-white relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Building the <span className="text-primary-200">digital future</span>, one line of code at a time
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8">
              Computer Science graduate from Makerere University, passionate about creating innovative solutions in web, mobile, and machine learning technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="heroButton" size="xl" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex">
              {/* Left side floating tags */}
              <div className="absolute -left-24 top-1/4 transform -translate-y-1/2 hidden md:flex flex-col gap-3">
                <div className="bg-white px-3 py-2 rounded-lg shadow-lg border-r-4 border-primary-600 animate-pulse">
                  <div className="text-sm font-medium text-gray-800">Software Engineer</div>
                </div>
                <div className="bg-white px-3 py-2 rounded-lg shadow-lg border-r-4 border-green-500">
                  <div className="text-sm font-medium text-gray-800">Web Developer</div>
                </div>
                <div className="bg-white px-3 py-2 rounded-lg shadow-lg border-r-4 border-yellow-500">
                  <div className="text-sm font-medium text-gray-800">ML Enthusiast</div>
                </div>
              </div>

              <div className="absolute inset-0 bg-primary-600 rounded-full shadow-lg transform translate-x-2 translate-y-2"></div>
              {/* Profile image */}
              <div className="absolute inset-0 w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img 
                  src="/attached_assets/WhatsApp Image 2025-04-25 at 17.24.00_2b470744.jpg" 
                  alt="Ssenkungu Reinol Martin Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Right side element */}
              <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 bg-white px-4 py-3 rounded-lg shadow-lg border-l-4 border-primary-600 hidden md:block">
                <div className="text-sm font-medium text-gray-800">Computer Science Graduate</div>
                <div className="text-xs text-primary-600">Makerere University</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
