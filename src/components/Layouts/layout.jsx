import React from 'react';
import Footer from '../Navigations/Footer/footer';
import Header from '../Navigations/header/header';



const Layout = ({ children }) => {
    return (
      <>
        <React.Fragment>
        <Header className="header"/>
        <main>{children}</main>
        <Footer className="footer"/>
        </React.Fragment>
      </>
    )
  }
  
  export default Layout