import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="container">
      <h1 className="page-title">Movie Finder - React</h1>
      <p>
        A React application to search for movies and view the current top-rated
        and upcoming movies. This Project was built using The Movie DataBase
        (tmdb) API. The project was built with the purpose of putting the React
        fundamental concepts into practice.
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
