"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavbarMobile({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Zatvori meni kada se promeni stranica
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Dugme za mobilni */}
      <button
        className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon">
          <i className={isOpen ? "ti-close" : "ti-menu"}></i>
        </span>
      </button>

      {/* Meni koji reaguje na isOpen */}
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbar">
        {children}
      </div>
    </>
  );
}