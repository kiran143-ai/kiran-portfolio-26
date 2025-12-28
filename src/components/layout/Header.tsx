import { Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import resumePdf from "@/assets/KiranYeligeti_ProductDesigner_26.pdf";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "CASE STUDY", path: "/case-study" },
  { name: "BLOG POST", path: "/blog" },
  { name: "ABOUT", path: "/about" },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="font-script text-2xl text-logo-red hover:opacity-80 transition-opacity"
          >
            Kiran Yeligeti
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link",
                  location.pathname === link.path && "nav-link-active"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={resumePdf}
              download="KiranYeligeti_ProductDesigner_26.pdf"
              className="btn-primary flex items-center gap-2"
            >
              <span>RESUME</span>
              <Download size={14} />
            </a>

            <a
              href="mailto:kiran.yelligeti@gmail.com"
              className="btn-outline"
            >
              E-MAIL ME
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "nav-link text-base",
                    location.pathname === link.path && "nav-link-active"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={resumePdf}
                  download="KiranYeligeti_ProductDesigner_26.pdf"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <span>RESUME</span>
                  <Download size={14} />
                </a>

                <a
                  href="mailto:kiran.yelligeti@gmail.com"
                  className="btn-outline text-center"
                >
                  E-MAIL ME
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
