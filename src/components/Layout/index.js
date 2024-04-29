import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {
  useEffect(() => {
    function handleScroll() {
      console.log('scroll event');
    }
    document.addEventListener('scroll', handleScroll);

    // unmount function is passed trough this return
    return () => {
      // when component is removed from DOM exclude all listeners
      // without this evt listeners keep active
      // and consuming resources even with component destroyed
      document.removeEventListener('scroll', handleScroll);
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
