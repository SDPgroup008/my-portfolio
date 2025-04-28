import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Code, Layers, Drill, Brain } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { downloadFile } from '@/lib/utils';

export default function Skills() {
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

  const handleResumeDownload = () => {
    // In a real implementation, this would point to an actual file
    downloadFile('/resume.pdf', 'Ssenkungu_Reinol_Martin_Resume.pdf');
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary-600 mr-3 text-2xl" />,
      skills: ["Dart", "JavaScript", "Python", "Java", "HTML/CSS", "SQL"]
    },
    {
      title: "Frameworks & Technologies",
      icon: <Layers className="text-primary-600 mr-3 text-2xl" />,
      skills: ["Flutter", "Firebase", "Firestore", "React", "React Native", "Node.js", "Django", "DRF", "REST APIs"]
    },
    {
      title: "Tools & Platforms",
      icon: <Drill className="text-primary-600 mr-3 text-2xl" />,
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Google Maps API", "Dreamweaver"]
    },
    {
      title: "Machine Learning & Data Science",
      icon: <Brain className="text-primary-600 mr-3 text-2xl" />,
      skills: ["VGG19", "WaveNet", "RNN", "Audio Processing", "Spectrograms", "Feature Extraction", "Data Analysis"]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="text-primary-600 mr-3 text-2xl" />,
      skills: ["Problem Solving", "Team Collaboration", "Project Management", "Communication", "Adaptability", "Critical Thinking"]
    }
  ];

  return (
    <section 
      id="skills" 
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
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900 mb-3">My Skills</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A versatile skill set built through academic training and hands-on project experience.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-inter text-xl font-semibold text-primary-800 mb-4 flex items-center">
                {category.icon}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-4 py-2 bg-white rounded-full text-gray-800 border border-gray-200 shadow-sm hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Button 
            variant="navButton" 
            size="xl" 
            onClick={handleResumeDownload}
            className="px-6 py-3"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
