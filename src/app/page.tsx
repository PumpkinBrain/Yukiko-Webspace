import React from "react";
import { Col, Container, Navbar, Row } from "reactstrap";

const LandingPage: React.FC = () => {
  return (
    <div className="text-light vh-100 p-3">
      <Row>
        <Col className="mt-5">
          <Container className="border border-4 p-4 bg-light">
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-center sub-title">Whoami</h2>
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
        <Col md="7">
          <Row>
            <Col className="text-center text-light pb-3">
              <h1>\.:THE Yukiko Webspace:./</h1>
            </Col>
          </Row>
          <Row>
            <Container className="border border-4 bg-light mb-3">
              <Navbar>
                <a href="">Home</a>
                <a href="">Portifolio</a>
                <a href="">Save the internet!</a>
                <a href="">Other links</a>
              </Navbar>
            </Container>
          </Row>
          <Row>
            <Container className="border border-4 bg-light mb-3 p-4">
              <h3 className="text-center">Welcome, webspace traveler, to my little corner of the web.
                We have coffee, weirdness and all things cute and macabre.
                <p>✨Enjoy your stay✨</p></h3>
              <Container className="d-flex justify-content-between">
                <img src="img/mana.png" className="chibi" />
                <img src="img/miku.png" className="chibi" />
              </Container>
            </Container>
          </Row>
          <Row>
            <Container className="border border-4 bg-light text-center">
              <h2 className="sub-title">My blog posts</h2>
              <p>coming soon...</p>
            </Container>
          </Row>
        </Col>
        <Col className="mt-5">
          <Container className="border bg-light border-4 p-4">
            <h2 className="sub-title text-center">Logs</h2>
            <h4>mar. 20th</h4>
            <p>redesign.... again... it looks a LOT better now tho, I'm happy with it.
              I guess messing around with figma and reactstrap was worth it after all</p>
          </Container>
          <Container className="border bg-light border-4 p-4">
            <h2 className="sub-title text-center">Todos</h2>
            <p>fix responsiveness for phone</p>
            <p>blog posting system (finally)</p>
            <p>portifolio page and think of some small project</p>
            <p>show friends :)</p>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage;
