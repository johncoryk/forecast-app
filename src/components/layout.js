import React from 'react';

import Header from './header';
import Footer from './footer';
import './styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <div className="content">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
