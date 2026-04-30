import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
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
