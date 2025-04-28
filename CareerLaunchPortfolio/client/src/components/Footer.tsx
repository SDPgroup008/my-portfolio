import { Link } from 'wouter';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];
  
  const contactInfo = [
    { 
      icon: <Mail className="text-primary-500 mr-2 h-4 w-4" />, 
      text: 'ssenkungu.martin@example.com',
      href: 'mailto:ssenkungu.martin@example.com'
    },
    { 
      icon: <Phone className="text-primary-500 mr-2 h-4 w-4" />, 
      text: '+256 712 345 678',
      href: 'tel:+256712345678'
    },
    { 
      icon: <MapPin className="text-primary-500 mr-2 h-4 w-4" />, 
      text: 'Kampala, Uganda',
      href: null
    }
  ];
  
  const socialLinks = [
    { icon: <Linkedin className="text-xl" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="text-xl" />, href: '#', label: 'GitHub' },
    { icon: <Twitter className="text-xl" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="text-xl" />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-inter font-bold text-2xl mb-4">Ssenkungu Reinol Martin</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Computer Science graduate from Makerere University specializing in web, mobile, and machine learning technologies with a focus on environmental, healthcare, and social impact projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center">
                  {info.icon}
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {currentYear} Ssenkungu Reinol Martin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
