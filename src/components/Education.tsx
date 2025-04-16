
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  courses?: string[];
}

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    duration: "2016 - 2020",
    description: "Graduated with honors. Focused on web development and software engineering principles.",
    courses: [
      "Advanced Web Development",
      "Database Systems",
      "Data Structures & Algorithms",
      "Software Engineering Practices",
      "Mobile Application Development"
    ]
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Tech Academy",
    duration: "2015",
    description: "Intensive 12-week program covering full-stack development fundamentals."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title="Education"
          subtitle="My academic background and qualifications"
        />
        
        <div className="grid gap-8 md:grid-cols-2">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all p-6"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{item.institution}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{item.duration}</span>
                  </div>
                  
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                  )}
                  
                  {item.courses && item.courses.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        Relevant Coursework
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.courses.map((course, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Certifications</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2022" },
              { name: "React Developer Certification", issuer: "Meta", year: "2021" },
              { name: "PHP Advanced Certification", issuer: "PHP.org", year: "2020" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-primary/10 rounded-full p-2 mr-3">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
