import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { 
  Code, 
  Database, 
  Server, 
  Wrench,
  GitBranch,
  Cloud,
  Layers,
  FileCode,
  FileBadge,
  PanelLeft,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Code,
    skills: [
      { name: "HTML5", level: 5 },
      { name: "CSS3", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "React.js", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Bootstrap", level: 4 },
      { name: "Material-UI", level: 4 },
      { name: "Redux", level: 4 },
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Python", level: 4 },
      { name: "Django", level: 4 },
      { name: "PHP", level: 5 },
      { name: "WordPress", level: 4 },
      { name: "C#", level: 3 },
      { name: "Express.js", level: 4 },
      { name: "Laravel", level: 4 },
      { name: "CodeIgniter", level: 4 },
    ]
  },
  {
    id: "database",
    name: "Database Management",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 4 },
      { name: "MySQL", level: 5 },
      { name: "PostgreSQL", level: 4 },
      { name: "SQL", level: 4 },
    ]
  },
  {
    id: "vcs",
    name: "Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", level: 5 },
      { name: "GitHub", level: 5 },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS EC2", level: 4 },
      { name: "AWS S3", level: 4 },
      { name: "AWS Lambda", level: 3 },
      { name: "AWS RDS", level: 3 },
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 sm:px-6">
        <SectionHeader 
          title="My Skills"
          subtitle="Here are the technologies and tools I specialize in"
        />
        
        <div className="grid md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Categories for desktop */}
          <div className="hidden md:block">
            <div className="space-y-2 sticky top-24">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center w-full px-3 py-2.5 text-left rounded-lg transition-all text-sm lg:text-base",
                    activeCategory === category.id 
                      ? "bg-primary text-white shadow-md"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <category.icon className="mr-2.5 h-4 w-4 lg:h-5 lg:w-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Categories for mobile - Horizontal scrollable list */}
          <div className="md:hidden -mx-4 px-4 mb-6">
            <div className="flex overflow-x-auto pb-3 space-x-2 hide-scrollbar">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center shrink-0 px-3 py-2.5 rounded-full text-sm transition-all",
                    activeCategory === category.id 
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  <category.icon className="mr-1.5 h-4 w-4" />
                  <span className="whitespace-nowrap">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Skills display */}
          <div className="md:col-span-3">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={cn(
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
                  activeCategory !== category.id && "hidden"
                )}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-2 sm:mb-2.5">
                      <h3 className="font-semibold text-sm sm:text-base">{skill.name}</h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div 
                            key={i}
                            className={cn(
                              "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mx-0.5",
                              i < skill.level ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <div 
                        className="bg-primary h-1.5 sm:h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
