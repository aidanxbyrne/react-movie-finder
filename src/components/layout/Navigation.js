import { FaFilm } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const openMobile = () => {
    let nav = document.querySelector(".nav-right");
    if (nav.classList.contains("closed-mobile-nav")) {
      nav.classList.remove("closed-mobile-nav");
    } else {
      nav.classList.add("closed-mobile-nav");
    }
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
            <NavLink to="/" className="nav-link" activeclassname="active">
              Home
            </NavLink>
            <NavLink
              to="/top-movies"
              className="nav-link"
              activeclassname="active"
            >
              Top Movies
            </NavLink>
            <NavLink
              to="/upcoming"
              className="nav-link"
              activeclassname="active"
            >
              Upcoming
            </NavLink>
            <NavLink to="/about" className="nav-link" activeclassname="active">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
