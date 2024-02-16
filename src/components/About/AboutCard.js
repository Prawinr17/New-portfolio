import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praveen R </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            I am currently employed as a Ui Developer at Svvatech.
            <br />
            I have completed  BCA from <span className="purple"> Jamal Mohamed College Trichy,Tamilnadu. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "HARD WORK IS WORTHLESS FOR THOSE THAT DON’T BELIEVE IN THEMSELVES!"{" "}
          </p>
          <footer className="blockquote-footer">Praveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
