import React from "react";
import { Col, Container, Navbar, Row } from "reactstrap";

const LandingPage: React.FC = () => {
  return (
    <Container className="vh-100">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1>\.:THE Yukiko Webspace:./</h1>
        </Col>
      </Row>
      <Row>
        <Col md="2">
          <Container className="border border-5">
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-center">whoami</h2>
              <img src="img/profilepic.jpg" className="w-75 h-auto" />
              <p className="text-center">I am yukiko, a young person who enjoys all things
                internet and alternative. I was kinda bored of
                doomscrolling through social media so I decided
                to make this little place so I can yap about my
                interests</p>
              <Container className="border border-2">
                blinkies hier!
              </Container>
            </div>
          </Container>
        </Col>
        <Col md="7">
          <Row>
            <Container className="border border-5">
              <Navbar>
                <a>Home</a>
                <a>Portifolio</a>
                <a>Save the internet!</a>
                <a>Other links</a>
              </Navbar>
            </Container>
          </Row>
          <Row>
            <Container className="border border-5">
              <h2 className="text-center">Welcome, webspace traveler, to my little corner of the web.
                We have coffee, weirdness and all things cute and macabre.
                <p>✨Enjoy your stay✨</p></h2>
            </Container>
          </Row>
          <Row>
            <Container className="border border-5">
              <h2>blogs</h2>
            </Container>
          </Row>
        </Col>
        <Col md="2">
          <Container className="border border-5">
            <h2>logs</h2>
          </Container>
        </Col>
      </Row>
    </Container >
  )
}

export default LandingPage;
