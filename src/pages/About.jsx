import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="container body-section">
      <h1 className="page-title">Movie Finder - React</h1>
      <p>
        Find the current top and upcoming movies as well as search for details
        on some of your all-time favourites. This is a React application built
        using The Movie DataBase (tmdb) API. The project was built with the
        purpose of putting the React fundamental concepts into practice.
      </p>
      <br />
      <p>
        <b>Created by:</b> Aidan Byrne
      </p>
      <p>
        <b>Tools Used:</b> HTML, CSS, JavaScript, React, FontAwesome, The Movie
        Database API, FramerMotion
      </p>
      <br />
      <a
        href="https://github.com/aidanxbyrne/react-movie-finder"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="btn main-btn"
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaGithub style={{ marginRight: "5px" }} />
          View on Github
        </button>
      </a>
    </div>
  );
}

export default About;
