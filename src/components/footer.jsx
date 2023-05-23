import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
        <div>
        <p> ⓒ {year} Designed and Built by <span>Christian</span></p>
      <p>All Rights Reserved</p>
        </div>
      
      <div className="coffee"><SiBuymeacoffee/></div>
    </footer>
  );
}

export default Footer;
