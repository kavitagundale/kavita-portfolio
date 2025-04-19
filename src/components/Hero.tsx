
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center pt-16 pb-8 sm:pt-20 md:pt-24 lg:pt-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 pt-4 sm:pt-6 md:pt-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">
              Hello, I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Kavita Gundale
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 h-[40px] sm:h-[44px] md:h-[48px]">
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
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg">
              Turning ideas into fast, scalable web apps with modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1cmo9VsGPbjjfDWDq2sdhpmxr5nAEmA8f/view?usp=drivesdk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download size={16} className="sm:size-18" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm sm:text-base">
                <Mail size={16} className="sm:size-18" />
                Contact Me
              </Button>
              <Button 
                variant="secondary"
                className="flex items-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 text-sm sm:text-base"
                asChild
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center mb-6 sm:mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3
            }}
          >
            <motion.div 
              className="relative group w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
              whileHover={{
                scale: 1.05,
                transition: { 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              {/* Enhanced glow effect with blue color */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-300 ease-in-out"></div>
              
              <div className="relative z-10 w-full h-full">
                <Avatar className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg border-4 border-blue-100 dark:border-blue-900">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Profile Photo" 
                    className="object-cover w-full h-full" 
                  />
                  <AvatarFallback className="text-3xl bg-blue-50 text-blue-600">JD</AvatarFallback>
                </Avatar>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

