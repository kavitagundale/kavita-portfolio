import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { Download, Mail, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3
          }}
        >
          <motion.div 
            className="relative group w-64 h-64 md:w-80 md:h-80"
            whileHover={{
              scale: 1.05,
              transition: { 
                duration: 0.3,
                type: "spring",
                stiffness: 300
              }
            }}
          >
            {/* Stylish glow and shadow effect */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-300 ease-in-out"></div>
            
            <div className="relative z-10 w-full h-full">
              <Avatar className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Profile Photo" 
                  className="object-cover w-full h-full" 
                />
                <AvatarFallback className="text-3xl">JD</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
