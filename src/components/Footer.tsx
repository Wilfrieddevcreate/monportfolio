import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-400">
      © {new Date().getFullYear()} Wilfried. Tous droits réservés.
    </footer>
  );
};

export default Footer;
