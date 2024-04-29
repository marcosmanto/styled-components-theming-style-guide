import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {
  useEffect(() => {
    return () => {
      console.log('<Layout /> unmont');
    };
  }, []);

  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
