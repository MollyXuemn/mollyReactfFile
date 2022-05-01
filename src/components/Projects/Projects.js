import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import avocado from "../../Assets/Projects/avocado.png";
import movtrack from "../../Assets/Projects/movtrack.png";
import beatmaker from "../../Assets/Projects/beatmaker.png";
import rentmanager from "../../Assets/Projects/rentmanager.jpeg";
import card from "../../Assets/Projects/card.jpg";
import myartproject from "../../Assets/Projects/myartproject.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avocado}
              isBlog={false}
              title="Avocado- Shopping Cart"
              description="This is a Shopping Cart Project, you can see the details of each item and add them into the shopping cart."
              link="https://github.com/MollyXuemn/Avocado-ShoppingCart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card}
              isBlog={false}
              title="Card Flipping Game"
              description="This is a Card Flipping Game, 
              the player can enter his name, the desired game size and 
              flip cards 2 by 2 until all the cards are turned upward, 
              finally it displays the player's score. "
              link="https://github.com/MollyXuemn/Memory"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beatmaker}
              isBlog={false}
              title="BeatMaker"
              description="This is a BeatMaker Project, you can play yourself inside the colorful grids and create your own music."
              link="https://github.com/MollyXuemn/BeatMaker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentmanager}
              isBlog={false}
              title="RentManager"
              description="Realization of a Java web application that has access to equipped data and manage customer data and their car's information "
              link="https://github.com/MollyXuemn/RentManager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movtrack}
              isBlog={false}
              title="MovTrack"
              description="Developed the system to detect the cause of pathology based on a large amount of motion data at home using
              algorithm optimization, Python, SQL et JSON; and design the architecture diagram with modelization tools like UML"
              link="https://github.com/MollyXuemn/MovTrack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myartproject}
              isBlog={false}
              title="MyArtProject"
              description="Developed a website by using the Three.js to make the 3-D effect of photos."
              link="https://mollyxuemn.github.io/MyArtProject/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
