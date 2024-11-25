import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { Overview } from './components/sections/Overview';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-blue-900 text-white">
      <Navigation />
      <Hero />
      <Overview />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;