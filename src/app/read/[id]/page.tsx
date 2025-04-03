'use client';
import router from 'next/router';
import React from 'react';

const ReadingPage: React.FC = () => {
  const { id } = router.query
  return (
    <>
      <h1>Hello world!</h1>
      <p>reading id {id}</p>
    </>
  )
}

export default ReadingPage;
