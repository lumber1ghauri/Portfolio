import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="WhatsappWeb-Clone"
              description="I have made a project using MERN Stack with React.js as a frontend. I have tried to make it exactly like whatsapp, you can interact and chat with your friends and family on this chat app but its just waiting it to get live. The Communication Tool that I used is Socket.io which helps in communication with CORS"
              ghLink="https://github.com/lumber1ghauri/whatsapp-clone"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DarbAgency"
              description="A blog website built with React.js and Gatsby.js. The website is built with the aim to provide a platform for developers to share their knowledge and experience with the community. The website is built with the aim to provide a platform for developers to share their knowledge and experience with the community."
              ghLink="https://github.com/lumber1ghauri"
              demoLink="https://darbagency.live-website.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SmoothMaths"
              description="An educational website built with Wordpress and Elementor. The website is for a client who is a maths tutor. The website is built with the aim to provide online maths classes to students. The website is built with the aim to provide online maths classes to students."
              ghLink="https://github.com/lumber1ghauri"
              demoLink="https://smoothmaths.co.uk/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
