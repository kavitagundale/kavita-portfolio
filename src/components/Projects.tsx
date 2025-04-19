
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, Users, Droplets, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "Charitable Website",
    description: "A platform facilitating donations, volunteer management, and event organization",
    icon: Heart,
    achievements: [
      "Facilitated 500+ donations",
      "Managed 100+ volunteer registrations",
      "Streamlined 50+ events",
      "Enhanced operational efficiency"
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Class Management System",
    description: "Responsive UI and backend system for managing class entries",
    icon: Users,
    achievements: [
      "Managed 200+ class entries",
      "Improved accessibility",
      "Enhanced user experience",
      "Streamlined administration"
    ],
    tags: ["React", "Laravel", "MySQL", "Bootstrap"]
  },
  {
    title: "Water Purifier Website",
    description: "Fully responsive e-commerce website for water purification products",
    icon: Droplets,
    achievements: [
      "30% boost in user engagement",
      "100+ products managed",
      "Seamless browsing experience",
      "Optimized product visibility"
    ],
    tags: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"]
  },
  {
    title: "School & College Software",
    description: "Comprehensive educational management system",
    icon: GraduationCap,
    achievements: [
      "Supported 5000+ users",
      "Enhanced system performance",
      "Improved scalability",
      "Optimized user experience"
    ],
    tags: ["PHP", "Laravel", "MySQL", "React"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeader 
          title="Projects"
          subtitle="A selection of my best work"
        />
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="space-y-1">
                  <div className="flex items-center">
                    <project.icon className="mr-2 h-4 w-4" />
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <ul className="list-disc pl-4 space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i}>{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
