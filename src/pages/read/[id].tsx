import React from 'react';
import Layout from '../layout';
import data from "../../../public/data/posts.json"
import BlogPost from '@/domain/entities/BlogPost';

interface props {
  id: number;
}
interface Iparam {
  params: {
    id: string
  }
}

const ReadingPage: React.FC<props> = (props: props) => {
  if (!props.id) {
    return <p>loading...</p>
  }
  return (
    <Layout>
      <h1>Hello world!</h1>
      <p>reading id {props.id}</p>
      <h1>{props.id}</h1>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = data.map((post: BlogPost) => ({
    params: { id: post.id.toString() }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: Iparam) {
  return { props: { id: params.id } }
}


export default ReadingPage;
