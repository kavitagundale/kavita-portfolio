
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { Download, Mail, Github } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-primary font-medium mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              John Doe
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-[40px]">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'Frontend Specialist',
                  2000,
                  'Backend Engineer',
                  2000
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
              Turning ideas into fast, scalable web apps with modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </Button>
              <Button 
                variant="secondary"
                className="flex items-center gap-2"
                asChild
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-lg">Your Photo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
