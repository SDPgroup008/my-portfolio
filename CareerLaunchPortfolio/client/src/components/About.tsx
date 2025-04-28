import { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="about" 
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
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900 mb-3">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              {/* Professional workspace image from stock photo */}
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Professional workspace" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary-900/20 hover:bg-primary-900/10 transition-colors duration-300"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="font-inter font-semibold text-2xl text-gray-900 mb-4"
            >
              Hello there! I'm Ssenkungu Reinol Martin
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-4 leading-relaxed"
            >
              A passionate and detail-oriented Computer Science graduate from Makerere University, with expertise in web development, mobile applications, and machine learning technologies.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-6 leading-relaxed"
            >
              My journey in technology began at Computing Palace during my internship, where I developed healthcare solutions. I've since expanded into environmental applications, audio processing with machine learning, and user-focused platforms. I thrive on creating solutions that have real impact in people's lives, from helping patients access therapy remotely to enabling communities to report environmental issues.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            >
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Education</h4>
                <p className="text-gray-700 flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  BSc in Computer Science
                </p>
                <p className="text-gray-600 ml-6">Makerere University, 2023</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                <p className="text-gray-700 flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Kampala, Uganda
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Card className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                <CardContent className="p-0">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-gray-700"
                  >
                    <Linkedin className="mr-2 h-5 w-5 text-primary-700" />
                    LinkedIn
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                <CardContent className="p-0">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-gray-700"
                  >
                    <Github className="mr-2 h-5 w-5 text-primary-700" />
                    GitHub
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                <CardContent className="p-0">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-gray-700"
                  >
                    <Twitter className="mr-2 h-5 w-5 text-primary-700" />
                    Twitter
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
