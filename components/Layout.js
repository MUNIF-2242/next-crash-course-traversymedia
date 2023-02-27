import React from 'react';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
