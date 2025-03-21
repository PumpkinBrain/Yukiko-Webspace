import React from "react";
import Image from "next/image";
import { Col, Container, Navbar, Row } from "reactstrap";

const LandingPage: React.FC = () => {
  return (
    <div className="text-light vh-100 p-3">
      <Row>
        <Col className="mt-5">
          <Container className="border border-4 p-4 bg-light">
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-center sub-title">Whoami</h2>
              <Image src="img/profilepic.jpg" alt="a profile picture" className="w-50 h-auto mb-3 mt-3" />
              <p className="text-center">I am yukiko, a young person who enjoys all things
                internet and alternative. I was kinda bored of
                doomscrolling through social media so I decided
                to make this little place so I can yap about my
                interests</p>
              <Container className="p-0">
                <Row>
                  <Col>
                    <a href='https://blinkies.cafe' target='_blank'><Image src='https://blinkies.cafe/b/display/blinkiesCafe-badge.gif' alt='blinkies.cafe | make your own blinkies!' /></a>
                    <a href="https://koshka.love"><Image src="https://koshka.love/Koshkabutton.gif.pagespeed.ce.uEPsov_WG4.gif" alt="koshka.love" /></a>
                  </Col>
                  <Col>
                    <a href='https://neo-neighborhoods.neocities.org/Petsburgh/'><Image src='https://neo-neighborhoods.neocities.org/Petsburgh/petsburgh88.gif' alt='petsburgh.neocities | make your own blinkies!' /></a>
                    <a href="https://neocities.org"><Image src="https://sparklelobster.neocities.org/neocities.gif" alt="neocities.org" /></a>
                  </Col>
                </Row>
                <Image src="img/blinkies/blinkiesCafe-bH.gif" alt="" />
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
                <Image src="img/mana.png" className="chibi" alt="" />
                <Image src="img/miku.png" className="chibi" alt="" />
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
            <p>redesign.... again... it looks a LOT better now tho, I&apos;m happy with it.
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
