import Layout from '../layout';
import data from "../../../public/data/posts.json"
import BlogPost from '@/domain/entities/BlogPost';
import { Col, Container, Row } from 'reactstrap';
import TitleNav from '@/ui/components/landingpage/TitleNav';
import Markdown from 'react-markdown';
import Head from 'next/head';

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
    <html>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      < Layout >
        <Col className='mx-5'>
          <Row className='text-light px-4 mt-5'>
            <Col>
              <TitleNav displayClasses='' />
              <Row>
                <Container className='bg-light'>
                  <Col className='p-5'>
                    <h1 className='text-center'>{props.postData.title}</h1>
                    <p className='sub-title text-center'>{props.postData.description}</p>
                    <Container className='px-5 py-2'>
                      <Markdown>{props.postText}</Markdown>
                    </Container>
                  </Col>
                </Container>
              </Row>
            </Col>
          </Row>
        </Col>
      </Layout >
    </html>
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
  const response = await fetch(selectedPostData!.file);
  const text = await response.text();
  return { props: { postData: selectedPostData, postText: text } }
}


export default ReadingPage;
