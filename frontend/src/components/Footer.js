import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import './Footer.css'; // Pastikan untuk mengimpor file CSS

function Footer() {
  return (
    <footer className="footer bg-dark text-white p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Imam Ariadi</p>
          </Col>
          <Col>
            <a href="https://github.com/ImamAriadi2022" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaGithub size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;