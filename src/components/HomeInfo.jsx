import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hello World! I'm
        <span className="font-semibold mx-2 text-white">Andrew</span>
        <br />an aspiring Computer Engineer from Marinduque
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Passionate about technology, creativity,
          <br /> and continuous learning
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Explore my portfolio to discover
          <br /> my background, interests, and goals
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Want to connect with me online?
          <br /> My profile links are ready for you
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          View contacts
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
