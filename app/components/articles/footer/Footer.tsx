import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-50 dark:bg-black border-t border-purple-200 dark:border-gray-700">
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        &copy;{new Date().getFullYear()} Dev Francis. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
