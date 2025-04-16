
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Maximize, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  role?: string;
}

const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing integration.",
    image: "placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    role: "Lead Developer"
  },
  {
    id: "project2",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing skills and projects with dark/light theme support.",
    image: "placeholder.svg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "project3",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "placeholder.svg",
    tags: ["React", "Firebase", "Material UI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    role: "Frontend Developer"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title="My Projects"
          subtitle="Check out some of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden group cursor-pointer" onClick={() => setActiveProject(project.id)}>
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <Maximize className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                
                {project.role && (
                  <p className="mb-3 text-sm">
                    <span className="font-semibold">Role:</span>{" "}
                    <span className="text-primary">{project.role}</span>
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img 
                  src={projects.find(p => p.id === activeProject)?.image || "placeholder.svg"} 
                  alt={projects.find(p => p.id === activeProject)?.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {projects.find(p => p.id === activeProject)?.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {projects.find(p => p.id === activeProject)?.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects.find(p => p.id === activeProject)?.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  {projects.find(p => p.id === activeProject)?.demoUrl && (
                    <Button asChild>
                      <a href={projects.find(p => p.id === activeProject)?.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {projects.find(p => p.id === activeProject)?.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={projects.find(p => p.id === activeProject)?.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <Github className="w-5 h-5" />
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
