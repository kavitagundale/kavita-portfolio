
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { 
  Code, 
  Database, 
  Server, 
  Wrench,
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
    name: "Frontend",
    icon: Layers,
    skills: [
      { name: "HTML", level: 5 },
      { name: "CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "React.js", level: 4 },
      { name: "Bootstrap", level: 4 },
      { name: "jQuery", level: 3 },
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    skills: [
      { name: "PHP", level: 4 },
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 3 },
    ]
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    skills: [
      { name: "MySQLi", level: 4 },
      { name: "MongoDB", level: 3 },
    ]
  },
  {
    id: "tools",
    name: "Other Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 4 },
      { name: "GitHub", level: 4 },
      { name: "Postman", level: 3 },
      { name: "AJAX", level: 4 },
      { name: "VS Code", level: 5 },
    ]
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title="My Skills"
          subtitle="Here are the technologies and tools I specialize in"
        />
        
        <div className="grid md:grid-cols-4 gap-6 lg:gap-12">
          {/* Categories for desktop */}
          <div className="hidden md:block">
            <div className="space-y-2 sticky top-24">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center w-full px-4 py-3 text-left rounded-lg transition-all",
                    activeCategory === category.id 
                      ? "bg-primary text-white shadow-md"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <category.icon className="mr-3 h-5 w-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Categories for mobile */}
          <div className="md:hidden mb-8">
            <div className="flex overflow-x-auto pb-3 space-x-3 scrollbar-none">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all",
                    activeCategory === category.id 
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  <category.icon className="mr-2 h-4 w-4" />
                  <span>{category.name}</span>
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
                  "grid grid-cols-1 sm:grid-cols-2 gap-5",
                  activeCategory !== category.id && "hidden"
                )}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div 
                            key={i}
                            className={cn(
                              "w-2 h-2 rounded-full mx-0.5",
                              i < skill.level ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
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
