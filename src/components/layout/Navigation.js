import { FaFilm } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobile = () => {
    const nav = document.querySelector(".nav-right");

    if (!mobileNavOpen) {
      nav.classList.remove("closed-mobile-nav");
      setMobileNavOpen(true);
    } else {
      nav.classList.add("closed-mobile-nav");
      setMobileNavOpen(false);
    }
  };

  const closeMobile = () => {
    console.log(document.querySelector(".nav-right").classList);
    document.querySelector(".nav-right").classList.add("closed-mobile-nav");
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <FaFilm style={{ marginRight: "10px" }} />
            Movie Finder
          </Link>
        </div>
        <button className="hamburger-btn" onClick={() => openMobile()}>
          <GiHamburgerMenu size={30} />
        </button>
        <div className="nav-right closed-mobile-nav">
          <div className="nav-links d-flex">
            <NavLink
              onClick={() => closeMobile()}
              to="/"
              className="nav-link"
              activeclassname="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/top-movies"
              className="nav-link"
              activeclassname="active"
              onClick={() => closeMobile()}
            >
              Top Movies
            </NavLink>
            <NavLink
              to="/upcoming"
              className="nav-link"
              activeclassname="active"
              onClick={() => closeMobile()}
            >
              Upcoming
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              activeclassname="active"
              onClick={() => closeMobile()}
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
