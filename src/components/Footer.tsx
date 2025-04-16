
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using 
              <span className="font-medium text-primary ml-1">React & TailwindCSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
