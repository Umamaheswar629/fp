import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4">
      <Container>
        <Row>
          <Col className="text-center py-3">
            © 2024 BookIT. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
