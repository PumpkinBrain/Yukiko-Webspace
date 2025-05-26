import Layout from '../layout';
import data from "../../../public/data/posts.json"
import BlogPost from '@/domain/entities/BlogPost';
import { Col, Container, Row } from 'reactstrap';
import TitleNav from '@/ui/components/landingpage/TitleNav';
import Markdown from 'react-markdown';

interface Iprops {
  postData: BlogPost;
  postText: string;
}
interface Iparam {
  params: {
    id: string
  }
}
const ReadingPage: React.FC<Iprops> = (props: Iprops) => {

  return (
    < Layout >
      <Col className='mx-5'>
        <Row className='text-light px-4 mt-5'>
          <Col>
            <TitleNav displayClasses='' />
            <Row>
              <Container className='bg-light'>
                <Col>
                  <h2 className='sub-title text-center'>{props.postData.title}</h2>
                  <p className='sub-title text-center'>{props.postData.description}</p>
                </Col>
                <p className='text-center'>content</p>
                <Markdown>{props.postText}</Markdown>
              </Container>
            </Row>
          </Col>
        </Row>
      </Col>
    </Layout >
  )
}

export async function getStaticPaths() {
  const paths = data.map((post: BlogPost) => ({
    params: { id: post.id.toString() }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: Iparam) {
  const selectedPostData = data.find((post: BlogPost) => post.id.toString() === params.id);
  const response = await fetch("https://raw.githubusercontent.com/DanielMendes42/DanielMendes42/refs/heads/main/README.md");
  const text = await response.text();
  return { props: { postData: selectedPostData, postText: text } }
}


export default ReadingPage;
