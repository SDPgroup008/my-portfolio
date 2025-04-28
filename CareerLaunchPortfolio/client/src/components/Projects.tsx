import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const projects = [
    {
      id: 1,
      title: "EcoGuardian Mobile App",
      description: "A mobile application that helps communities report environmental degradation activities like deforestation, swamp encroachment, and improper waste disposal using cameras and Google Maps integration.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Firebase", "Firestore", "Dart", "Google Maps API"],
      featured: true,
      link: "#"
    },
    {
      id: 2,
      title: "SmartRehab",
      description: "A web-based healthcare system developed during my internship at Computing Palace that helps patients access therapy services remotely through live sessions with doctors or therapists, with options for physical meetings when necessary.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Dreamweaver", "Web Development"],
      featured: true,
      link: "#"
    },
    {
      id: 3,
      title: "Audio Source Separation",
      description: "A machine learning research project that explores techniques for separating audio sources from music recordings. We converted audio files into spectrograms and used models like VGG19, WaveNet, and RNN for feature extraction.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Machine Learning", "VGG19", "WaveNet", "RNN"],
      featured: false,
      link: "#"
    },
    {
      id: 4,
      title: "Issue Management System",
      description: "An ongoing collaborative project that helps students report academic issues such as missing marks or coursework to lecturers, department heads, and registrars, with status tracking functionality.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Django", "Django REST Framework", "APIs"],
      featured: false,
      link: "#"
    },
    {
      id: 5,
      title: "YoVibe",
      description: "A personal project that connects users with entertainment venues and events. It features registration for venue owners and event organizers, plus a machine learning model that analyzes and rates venue liveliness.",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firestore", "Machine Learning"],
      featured: false,
      link: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900 mb-3">My Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent work and coding projects that showcase my skills and interests.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden shadow-md hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  {project.featured && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
                      <div className="p-4">
                        <span className="text-xs font-medium bg-primary-600 text-white px-2 py-1 rounded">Featured</span>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="text-primary-700 font-medium hover:text-primary-800 transition flex items-center"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Button 
            variant="navButton" 
            size="lg"
            className="inline-flex items-center"
          >
            View All Projects <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
