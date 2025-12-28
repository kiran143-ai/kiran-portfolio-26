import { Linkedin, Youtube, Instagram, Dribbble, Facebook } from "lucide-react";

/* Custom Behance Icon */
const BehanceIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 7h-6V5h6v2zm-9.5 5.1c.9-.3 1.6-1.1 1.6-2.2 0-1.7-1.3-2.9-3.7-2.9H2v12h8.6c2.7 0 4.3-1.3 4.3-3.4 0-1.5-.9-2.6-2.4-2.5zM6 9h3.7c.8 0 1.3.4 1.3 1.1 0 .7-.5 1.1-1.3 1.1H6V9zm4 7H6v-3h4c1 0 1.6.6 1.6 1.5 0 .9-.6 1.5-1.6 1.5zm7.8-6.6c-2.2 0-3.8 1.6-3.8 4.1 0 2.6 1.6 4.1 4 4.1 1.7 0 3-1 3.4-2.4h-1.9c-.2.6-.7 1-1.5 1-1 0-1.7-.6-1.8-1.8h5.3v-.5c0-2.7-1.6-4.5-3.7-4.5zm-1.7 3.1c.1-1.1.8-1.7 1.7-1.7.9 0 1.6.6 1.7 1.7h-3.4z" />
  </svg>
);

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kiranyeligeti",
    label: "LinkedIn",
  },
  {
    icon: BehanceIcon,
    href: "https://www.behance.net/KiranYeligeti",
    label: "Behance",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@AGILITYDESIGN-KY",
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/kiranyeligeti/",
    label: "Instagram",
  },
  {
    icon: Dribbble,
    href: "https://dribbble.com/KiranYeligeti",
    label: "Dribbble",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/kiran.yeligeti/",
    label: "Facebook",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
  © {new Date().getFullYear()} – All rights reserved
</p>


          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
