import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Yordanos </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />I am a computer-science graduate and a full-stack software
            developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Making and listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends and experimenting new
              things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Motivated by the fear of being average"{" "}
          </p>
          <footer className="blockquote-footer">fav quote.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
