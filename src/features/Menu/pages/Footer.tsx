// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[57px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-sm font-bold">
      <p>Copyright © {new Date().getFullYear()} WorkScale. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
