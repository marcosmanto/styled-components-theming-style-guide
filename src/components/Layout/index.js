import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component {
  handleScroll() {
    console.log('scroll event');
  }

  // add event listeners at component creation
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  // remove event listeners before component is destroyed
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    console.log('<Layout /> unmont');
  }

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}
