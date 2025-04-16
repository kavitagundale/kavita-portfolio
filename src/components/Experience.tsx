
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description: [
      "Led the development of a high-traffic e-commerce platform using React, Node.js, and MongoDB",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Optimized database queries resulting in 50% faster page load times"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    duration: "Jun 2020 - Dec 2021",
    description: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Integrated third-party APIs and services",
      "Improved site performance by implementing lazy loading and code splitting"
    ]
  },
  {
    title: "PHP Developer",
    company: "Digital Solutions",
    duration: "Jan 2019 - May 2020",
    description: [
      "Built custom WordPress themes and plugins for clients",
      "Maintained and upgraded legacy PHP applications",
      "Implemented database design and optimization",
      "Collaborated with the QA team to ensure high-quality deliverables"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title="Work Experience"
          subtitle="My professional journey and roles"
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-4 md:gap-0`}
              >
                {/* Timeline marker */}
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {exp.company}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
