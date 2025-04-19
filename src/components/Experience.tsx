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
    title: "IT Trainer",
    company: "Smartpacey Technologies Pvt.Ltd.",
    duration: "October 2024 - Present",
    description: [
      "Designed and developed 50+ custom learning materials, coding exercises, and real-world projects, improving hands-on learning for 200+ students",
      "Provided one-on-one mentorship to 100+ students, assisting in debugging, optimizing code, and strengthening problem-solving skills, leading to a 30% improvement in coding efficiency",
      "Built a custom CMS for 500+ assignment submissions and real-time progress tracking, streamlining learning management for multiple batches of students",
      "Guided students in deploying 50+ web applications and configuring hosting environments, ensuring real-world readiness",
      "Trained students in version control (Git, GitHub), coding best practices, and technical interview preparation, contributing to a 40% increase in job placements"
    ]
  },
  {
    title: "PHP Developer",
    company: "Comzent Technologies Pvt.Ltd.",
    duration: "Jun 2023 - September 2024",
    description: [
      "Optimized database queries, reducing load time by 40%",
      "Developed and maintained multiple web applications and software solutions using PHP, ensuring performance and scalability",
      "Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime",
      "Collaborated with cross-functional teams to design, develop, and implement new features, enhancing functionality and user experience",
      "Implemented a custom CMS solution for the website, software reducing content management time by 50% and improving overall website and software functionality"
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
