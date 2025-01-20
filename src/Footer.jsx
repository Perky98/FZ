import React from "react";
import './App.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="full-width" >
      © {currentYear} Futbalové zákulisie
    </footer>
  );
}

export default Footer;
