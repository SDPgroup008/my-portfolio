import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { downloadFile } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    // In a real implementation, this would point to an actual file
    downloadFile('/resume.pdf', 'Ssenkungu_Reinol_Martin_Resume.pdf');
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#hero" className="text-primary-700 font-inter font-bold text-2xl">
          Ssenkungu Reinol Martin
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Button 
              key={link.href}
              variant="navLink" 
              asChild
              className="nav-link after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-700 after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Button 
            onClick={handleResumeDownload}
            variant="navButton" 
            size="default" 
            className="ml-4"
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white w-full absolute top-full left-0 shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="py-2 text-gray-700 hover:text-primary-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                onClick={() => {
                  handleResumeDownload();
                  setIsOpen(false);
                }}
                variant="navButton" 
                size="default" 
                className="w-full mt-2"
              >
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
