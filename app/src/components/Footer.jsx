import React from "react";

const Footer = () => {
  return (
    <footer className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="d-flex justify-content-center mb-3">
            <i className="bi bi-facebook mx-2 footer-icon"></i>
            <i className="bi bi-instagram mx-2 footer-icon"></i>
            <i className="bi bi-twitter-x mx-2 footer-icon"></i>
            <i className="bi bi-youtube mx-2 footer-icon"></i>
          </div>
          <div className="row text-center footer-links">
            <div className="col">
              <a href="#">Audio and Subtitles</a>
            </div>
            <div className="col">
              <a href="#">Media Center</a>
            </div>
            <div className="col">
              <a href="#">Privacy</a>
            </div>
            <div className="col">
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="row text-center mt-2">
            <div className="col">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row text-center mt-2 copyright">
            <div className="col">© 1997-2023 Netflix, Inc.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
