
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          &copy; {1900 + new Date().getYear()}, Designed by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
