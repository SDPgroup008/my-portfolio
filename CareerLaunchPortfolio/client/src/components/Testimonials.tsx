import { useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap, Award, Calendar, Building, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Education() {
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

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Makerere University",
      location: "Kampala, Uganda",
      period: "2019 - 2023",
      description: "Specialized in software engineering and machine learning. Graduated with First Class Honors.",
      icon: <GraduationCap className="h-10 w-10 text-primary-600" />
    },
    {
      id: 2,
      degree: "Web Development Certification",
      institution: "Computing Palace Institute",
      location: "Kampala, Uganda",
      period: "2022",
      description: "Advanced certification in modern frontend and backend technologies including React, Node.js, and cloud deployment.",
      icon: <Award className="h-10 w-10 text-primary-600" />
    },
    {
      id: 3,
      degree: "Machine Learning Specialization",
      institution: "Google Africa Developer Scholarship",
      location: "Online Program",
      period: "2021",
      description: "Completed intensive training in machine learning algorithms, deep learning, and AI application development.",
      icon: <Award className="h-10 w-10 text-primary-600" />
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="education"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900 mb-3">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional development through formal education and certifications.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
            >
              <Card className="bg-white h-full flex flex-col shadow-lg border-t-4 border-primary-600 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="rounded-full bg-primary-50 p-3">
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 flex-grow flex flex-col">
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">{item.degree}</h3>
                  
                  <div className="flex items-center text-gray-700 mb-2">
                    <Building className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 mb-4">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
