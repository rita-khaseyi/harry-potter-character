import React from "react";

const Footer = () => {
  return (
    <footer className="text-white p-6" style={{ backgroundColor: "rgb(2, 39, 66)" }}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Harry Potter Fan Page. All rights reserved. Designed by Rita Khaseyi.</p>
      </div>
    </footer>
  );
};

export default Footer;