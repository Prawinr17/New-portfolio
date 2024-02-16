import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/Moneterrey.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Forsa.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
          {/* <Col md={4} className="project-card"> */}
          {/* <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Monterrey Security"
              description="A Event Oraganiation Website. Build with WordPress,With some customizations css and Javascript."
              ghLink="https://github.com/Prawinr17/Monterrey-Security"
              demoLink="https://www.monterreysecurity.com/"
            /> */}
          {/* </Col> */}

          {/* <Col md={4} className="project-card"> */}
          {/* <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Forsa"
              description="People managment system oraganized by Egypt goverment Funded by World Bank. And developed by React.js,Tailwind Css,Asp.Net Core and Postgresql With Microservices."
              ghLink="https://github.com/Prawinr17/FORSA"
              demoLink="#"
            /> */}
          {/* </Col> */}
          <h1>No Reacnt Work</h1>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
