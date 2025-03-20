import React from "react";
import { Col, Container, Navbar, Row } from "reactstrap";

const LandingPage: React.FC = () => {
  return (
    <div className="text-light vh-100 p-3">
      <Row>
        <Col md="3" className="mt-5">
          <Container className="border border-5 p-4 bg-light">
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-center">Whoami</h2>
              <img src="img/profilepic.jpg" className="w-50 h-auto mb-3 mt-3" />
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
        <Col md="6">
          <Row>
            <Col className="text-center text-light pb-3">
              <h1>\.:THE Yukiko Webspace:./</h1>
            </Col>
          </Row>
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
            <Container className="border border-5 text-center">
              <h2>My blog posts</h2>
            </Container>
          </Row>
        </Col>
        <Col md="3" className="mt-5">
          <Container className="border border-5">
            <h2>logs</h2>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage;
