
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { Download, Mail, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{ 
                boxShadow: [
                  "0px 0px 0px rgba(59, 130, 246, 0)",
                  "0px 0px 30px rgba(59, 130, 246, 0.5)",
                  "0px 0px 0px rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Circular glowing backdrop */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="absolute inset-0 rounded-full overflow-hidden p-2">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  {/* Animated gradient background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.2) 100%)",
                        "linear-gradient(225deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.2) 100%)",
                        "linear-gradient(315deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.2) 100%)",
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.2) 100%)"
                      ]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <Avatar className="w-full h-full rounded-full shadow-lg hover:scale-[1.03] transition-transform duration-300">
                    <AvatarImage 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop" 
                      alt="Profile Photo" 
                      className="object-cover" 
                    />
                    <AvatarFallback className="text-3xl">JD</AvatarFallback>
                  </Avatar>
                  
                  {/* Rotating orbital rings */}
                  <motion.div 
                    className="absolute inset-[-8px] rounded-full border border-primary/30"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.div 
                    className="absolute inset-[-16px] rounded-full border border-primary/20"
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.div 
                    className="absolute inset-[-24px] rounded-full border border-primary/10"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
              
              {/* Particle effects */}
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-primary/60 blur-sm"
                animate={{
                  x: [0, 30, 10, -20, 0],
                  y: [0, -20, 10, 15, 0],
                  opacity: [0, 1, 0.5, 0],
                  scale: [0, 1, 0.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{ top: '30%', left: '10%' }}
              />
              
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-accent/60 blur-sm"
                animate={{
                  x: [0, -15, 10, 25, 0],
                  y: [0, 20, 0, -20, 0],
                  opacity: [0, 0.8, 0.2, 0],
                  scale: [0, 0.8, 0.3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.5,
                }}
                style={{ top: '60%', right: '15%' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
