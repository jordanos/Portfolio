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
import eventManagement from "../../Assets/Projects/event-management.png";
import ricaEcommerce from "../../Assets/Projects/rica-ecommerce.jpg";
import taskManager from "../../Assets/Projects/task-manager.png";
import telegramBot from "../../Assets/Projects/telegram-voice-chat.jpg";

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
              imgPath={eventManagement}
              isBlog={false}
              title="Event management SaaS app"
              description="A webapp made for managing events in a modern way. I was involved in building the front-end portal which is made with ReactJS. It's a role-based system, supports caching, live data using websockets and highly interactive. The software is a subscription plan based service which also has a public website and a mobile app for event ticket purchasing."
              demoLink="https://drive.google.com/file/d/1rCs6IQnYAyP8xsPXhGUHNhL6W9osTbGs/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ricaEcommerce}
              isBlog={false}
              title="Rica shopping"
              description="This ecommerce mobile app lets users sell and buy items online. it's made with flutter and MERN stack and I was involved in building the back-end, front-end admin portal and I also contributed to the mobile app that was made with flutter."
              ghLink="https://github.com/jordanos/MERN-ecommerce"
              demoLink="https://play.google.com/store/apps/details?id=com.ricamobile.rica"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManager}
              isBlog={false}
              title="Task manager"
              description="A full-stack task manager webapp that let users create and track their daily tasks. I've used MERN stack for this project."
              ghLink="https://github.com/jordanos/task-manager"
              demoLink="https://drive.google.com/file/d/179-a5hgSJU_LMVJZ0mzfY3N03DlL8EI_/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telegramBot}
              isBlog={false}
              title="Stranger voice chat bot"
              description="A telegram bot that let random strangers pair for a voice chat with their choice of discussion topic. I used python, postgresql and telegram bot API. Even-though this was one of my first real-world projects, I learned a lot from it and it got around 1000 visitors within a week. The bot has capabilities like: a feature to filter voice chat partners with gender for a small amount of fee."
              demoLink="https://drive.google.com/file/d/1jO9TyXrdNJ5zuZ667x2V2AzK66Zq0fU-/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
