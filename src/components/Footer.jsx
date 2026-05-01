import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { socialLinks } from "../constants";

const Footer = () => {
  const { isDarkMode } = useTheme();

  const footerTextClass = isDarkMode 
    ? "text-white" 
    : "text-slate-600";

  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p className={footerTextClass}>
          © 2026 <strong>Andrew B. Limpiada Jr.</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
