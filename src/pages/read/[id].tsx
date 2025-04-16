import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../layout';

const ReadingPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <p>loading...</p>
  }
  return (
    <Layout>
      <h1>Hello world!</h1>
      <p>reading id {id}</p>
      <h1>{id}</h1>
    </Layout>
  )
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "test" }]
}


export default ReadingPage;
