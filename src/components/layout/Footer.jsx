import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>Aidan Byrne | 2021</p>
        <div className="social-icons">
          <a
            href="https://github.com/aidanxbyrne"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} color="#FFF" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
