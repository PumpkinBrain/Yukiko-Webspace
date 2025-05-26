import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import TitleNav from "@/ui/components/landingpage/TitleNav";
import Whoami from "@/ui/components/landingpage/Whoami";
import data from "../../public/data/posts.json"
import BlogPost from "@/domain/entities/BlogPost";

const LandingPage: React.FC = () => {
  return (
    <div className="text-light vh-100 p-3">
      <TitleNav displayClasses="d-block d-md-none" />
      <Row>
        <Col className="d-none d-md-block mt-5" md="3">
          <Whoami />
        </Col>
        <Col md="6" className="px-4 p-md-2">
          <TitleNav displayClasses="d-none d-md-block" />
          <Row>
            <Container className="border border-4 bg-light mb-3 p-4">
              <h3 className="text-center">Welcome, webspace traveler, to my little corner of the web.
                We have coffee, weirdness and all things cute and macabre.
                <p>✨Enjoy your stay✨</p></h3>
              <Container className="d-flex justify-content-between">
                <Image width={0} height={0} src="img/mana.png" className="chibi" alt="" />
                <Image width={0} height={0} src="img/miku.png" className="chibi" alt="" />
              </Container>
            </Container>
          </Row>
          <Row>
            <Container className="border border-4 bg-light text-center p-2">
              <h2 className="sub-title">My blog posts</h2>
              <p>check out my blog articles!</p>
              {
                data.map((post: BlogPost) => {
                  return (
                    <Container className="bg-light p-1 mb-1" key={post.file}>
                      <a href={`/read/${post.id}`}><h3>{post.title}</h3></a>
                      {post.date} - {post.tag}
                      <br />
                      {post.description}
                    </Container>
                  )
                })
              }
            </Container>
          </Row>
        </Col>
        <Col className="d-block d-md-none mt-5" md="3">
          <Whoami />
        </Col>
        <Col className="mt-5" md="3">
          <Container className="border bg-light border-4 p-4">
            <h2 className="sub-title text-center">Logs</h2>
            <h4>apr. 16th</h4>
            <p>So the app router made me struggle to do the static export with dynmic routes
              so now I&apos;m moving over to the pages router</p>
            <h4>mar. 28th</h4>
            <p>Fixed cd pipeline</p>
            <h4>mar. 20th</h4>
            <p>redesign.... again... it looks a LOT better now tho, I&apos;m happy with it.
              I guess messing around with figma and reactstrap was worth it after all</p>
          </Container>
          <Container className="border bg-light border-4 p-4">
            <h2 className="sub-title text-center">Todos</h2>
            <p>fix responsiveness for phone</p>
            <p>move stuff to pages router</p>
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
