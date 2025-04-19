
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Kavita Gundale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
