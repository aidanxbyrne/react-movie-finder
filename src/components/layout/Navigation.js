import { FaFilm } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-content container">
        <div className="nav-left">
          <Link
            to="/"
            className="nav-logo"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaFilm style={{ marginRight: "10px" }} />
            Movie Finder
          </Link>
        </div>
        <div className="nav-right">
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
