import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  Send 
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Contact form submission options
  // Option 1: Using Netlify Functions (recommended when deployed to Netlify)
  const NETLIFY_FUNCTION_ENDPOINT = '/.netlify/functions/contact';
  
  // Option 2: Using Formspree for static form submissions
  // You'll need to create a Formspree form that forwards to reinolmartin01@gmail.com and reinolmartin001@gmail.com
  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID after you create one
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
  
  // Option 3: Direct email using mailto link as fallback (less ideal but provides another option)
  const createMailtoLink = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    return `mailto:reinolmartin01@gmail.com?cc=reinolmartin001@gmail.com&subject=${subject}&body=${body}`;
  };
  
  // Detect if we're on Netlify by checking the URL
  const isNetlify = window.location.hostname.includes('.netlify.app') || 
                    window.location.hostname.includes('.netlify.com');
  
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Choose endpoint based on deployment platform
      const endpoint = isNetlify ? NETLIFY_FUNCTION_ENDPOINT : FORMSPREE_ENDPOINT;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Try sending via API first
    contactMutation.mutate(formData, {
      onError: (error) => {
        // If API fails, offer direct email option as fallback
        const mailtoLink = createMailtoLink(formData);
        
        toast({
          title: "Could not send message directly",
          description: (
            <div className="space-y-2">
              <p>There was an issue sending your message. You can:</p>
              <a 
                href={mailtoLink}
                className="block p-2 mt-2 bg-primary-100 text-primary-700 rounded hover:bg-primary-200 transition-colors text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Email Client & Send Manually
              </a>
            </div>
          ),
          variant: "destructive",
          duration: 10000, // 10 seconds
        });
      }
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-600" />,
      title: "Email",
      content: "reinolmartin01@gmail.com",
      href: "mailto:reinolmartin01@gmail.com"
    },
    {
      icon: <Mail className="text-primary-600" />,
      title: "Alternative Email",
      content: "reinolmartin001@gmail.com",
      href: "mailto:reinolmartin001@gmail.com"
    },
    {
      icon: <Phone className="text-primary-600" />,
      title: "Phone",
      content: "0755556323",
      href: "tel:+256755556323"
    },
    {
      icon: <Phone className="text-primary-600" />,
      title: "Alternative Phone",
      content: "0764336256",
      href: "tel:+256764336256"
    },
    {
      icon: <MapPin className="text-primary-600" />,
      title: "Location",
      content: "Kampala, Uganda",
      href: null
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/SDPgroup008" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" }
  ];

  return (
    <section 
      id="contact" 
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
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900 mb-3">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through the form below or directly via email or social media.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="bg-gray-50 shadow-md h-full">
              <CardContent className="p-6 md:p-8">
                <motion.h3 
                  variants={itemVariants}
                  className="font-inter font-semibold text-xl text-gray-900 mb-6"
                >
                  Contact Information
                </motion.h3>
                
                <motion.div 
                  variants={containerVariants}
                  className="space-y-4 mb-8"
                >
                  {contactInfo.map((info, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-900">{info.title}</h4>
                        {info.href ? (
                          <a href={info.href} className="text-primary-700 hover:text-primary-800">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.h4 
                  variants={itemVariants}
                  className="font-medium text-gray-900 mb-3"
                >
                  Connect With Me
                </motion.h4>
                <motion.div 
                  variants={itemVariants}
                  className="flex space-x-4"
                >
                  {socialLinks.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.href} 
                      className="w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="shadow-md">
              <CardContent className="p-6 md:p-8">
                <motion.h3 
                  variants={itemVariants}
                  className="font-inter font-semibold text-xl text-gray-900 mb-6"
                >
                  Send Me a Message
                </motion.h3>
                
                <form onSubmit={handleSubmit}>
                  <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
                  >
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" 
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" 
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" 
                      placeholder="What is this regarding?"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition" 
                      placeholder="Your message here..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Button 
                      type="submit"
                      variant="navButton"
                      size="xl"
                      className="w-full"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
