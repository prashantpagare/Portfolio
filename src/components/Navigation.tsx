import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'Overview', id: 'overview' },
  { title: 'Skills', id: 'skills' },
  { title: 'Projects', id: 'projects' },
  { title: 'Experience', id: 'experience' },
  { title: 'Contact', id: 'contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => 
        document.getElementById(link.id)
      );
      
      const current = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (current !== -1) {
        setActiveSection(navLinks[current].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-purple-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-end py-4">
          <ul className="flex space-x-8">
            {navLinks.map(({ title, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === id ? 'text-blue-400' : 'text-purple-200'
                  }`}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};