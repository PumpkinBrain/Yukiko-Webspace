import { Col, Container, Row } from "reactstrap";
import Image from "next/image";

const Whoami: React.FC = () => {
  return (
    <>
      <Container className="border border-4 p-4 bg-light">
        <div className="d-flex flex-column align-items-center">
          <h2 className="text-center sub-title">Whoami</h2>
          <Image width={0} height={0} src="img/profilepic.jpg" alt="a profile picture" className="w-50 h-auto mb-3 mt-3" />
          <p className="text-center">I am yukiko, a young person who enjoys all things
            internet and alternative. I was kinda bored of
            doomscrolling through social media so I decided
            to make this little place so I can yap about my
            interests</p>
          <Container className="p-0">
            <Row>
              <Col>
                <a href='https://blinkies.cafe' target='_blank'><Image width={0} height={0} className="w-100 h-auto" src='https://blinkies.cafe/b/display/blinkiesCafe-badge.gif' alt='blinkies.cafe | make your own blinkies!' /></a>
                <a href="https://koshka.love"><Image width={0} height={0} className="w-100 h-auto" src="https://koshka.love/Koshkabutton.gif.pagespeed.ce.uEPsov_WG4.gif" alt="koshka.love" /></a>
              </Col>
              <Col>
                <a href='https://neo-neighborhoods.neocities.org/Petsburgh/'><Image width={0} height={0} className="w-100 h-auto" src='https://neo-neighborhoods.neocities.org/Petsburgh/petsburgh88.gif' alt='petsburgh.neocities | make your own blinkies!' /></a>
                <a href="https://neocities.org"><Image width={0} height={0} className="w-100 h-auto" src="https://sparklelobster.neocities.org/neocities.gif" alt="neocities.org" /></a>
              </Col>
            </Row>
            <Image width={0} height={0} className="w-100 h-auto" src="img/blinkies/blinkiesCafe-bH.gif" alt="" />
          </Container>
        </div>
      </Container>
    </>
  )
}
export default Whoami;
