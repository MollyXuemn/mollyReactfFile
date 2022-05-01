import React from "react";
import Card from "react-bootstrap/Card"; 
import { AiFillCaretRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">XUE MEINI </span>
            from <span className="purple"> JiangSu, China.</span>
            <br />
            I am a junior pursuing Digital engineering Degree's In Paris
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiFillCaretRight/> Yoga (5 years) 
            </li>
            <li className="about-activity">
              <AiFillCaretRight/> Swimming (10 years)
            </li>
            <li className="about-activity">
              <AiFillCaretRight/> Travelling
            </li>
            <li className="about-activity">
              <AiFillCaretRight/> Reading
            </li> 
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be the change you wish to see in the world."{" "}
          </p>
          <footer className="blockquote-footer">Molly</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
