import React from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import classNames from 'classnames';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

function Layout ({children}: LayoutProps): JSX.Element {

  return (
    <>
    <Header/>
    <div>
        <Sidebar/>
        <div>
            {children}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Layout;