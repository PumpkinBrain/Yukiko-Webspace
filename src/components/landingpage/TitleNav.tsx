import { Col, Container, Navbar, Row } from "reactstrap"

interface Props {
  displayClasses?: string
}
const TitleNav: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Row>
        <Col className={`text-center text-light pb-3 ${props.displayClasses}`}>
          <h1>\.:THE Yukiko Webspace:./</h1>
        </Col>
      </Row>
      <Row>
        <Container className={`border border-4 bg-light mb-3 ${props.displayClasses}`}>
          <Navbar>
            <a href="">Home</a>
            <a href="">Portifolio</a>
            <a href="">Save the internet!</a>
            <a href="">Other links</a>
          </Navbar>
        </Container>
      </Row>
    </>
  )
}

export default TitleNav;
