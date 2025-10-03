import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wanderlust from "../../Assets/Projects/wanderlust.png";
import elderlycare from "../../Assets/Projects/elderlycare.png";
import docappointment from "../../Assets/Projects/docappointment.png";
import blog from "../../Assets/Projects/blog.png";

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
              imgPath={blog}
              isBlog={false}
              title="Full Stack Doctor Appointment Website"
              description="Responsive booking platform enabling patients to schedule appointments and doctors to
 manage availability"
              ghLink="https://github.com/SakshiJagdhane/temporary"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="NearMeExplorers"
              description="NearMe Explorer is a location-based web that helps users discover nearby places, services, and attractions in real-time."
              ghLink="https://github.com/SakshiJagdhane/MWA-Blog_Website"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elderlycare}
              isBlog={false}
              title="Elderly_Care_Website"
              description="An Elderly Care website provides information, services, and resources to support the health, safety, and well-being of senior citizens and their caregivers"
              ghLink="https://github.com/SakshiJagdhane/Elderly__care__website"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              isBlog={false}
              title="WanderLust"
              description="Wanderlust is a travel-focused platform that inspires, guides, and helps users plan trips, explore destinations, and share travel experiences"
              ghLink="https://github.com/SakshiJagdhane/Wanderlust"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
