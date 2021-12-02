import React from 'react';
// nav || footer 와 같이 공통적으로 있어야 하는 부분을 감싸는 컴포넌트.
import Head from 'next/head';
import Header from './common/header/Header';
import styles from '../styles/Home.module.css';
import Footer from './common/footer/Footer';

function Layout({ children }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Onboarding Test_Bella </title>
        <meta name="onboarding test" content="onboarding test for bella" />
        <link rel="icon" href="/assets/icons/logo.png" />
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
