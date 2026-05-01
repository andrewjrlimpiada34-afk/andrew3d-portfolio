import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const CTA = () => {
  const { isDarkMode } = useTheme();

const ctaTextClass = isDarkMode 
    ? "text-white" 
    : "text-slate-800";

return (
    <section className="cta">
      <p className={`cta-text ${ctaTextClass} ${isDarkMode ? '!text-white' : ''}`}>
        Interested in my portfolio journey? <br className="sm:block hidden" />
        Let's connect and explore more.
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
