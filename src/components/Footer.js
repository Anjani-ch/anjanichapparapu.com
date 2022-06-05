import React from 'react';

function Footer() {
  return (
    <footer className="p-4 font-medium border-t border-slate-400 text-center md:p-6 dark:bg-gray-800">
      &copy; {new Date().getFullYear()} Anjani Chapparapu. All Rights Reserved.
    </footer>
  )
}

export default Footer;