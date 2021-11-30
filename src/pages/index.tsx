//경로가 되는 부분

import type { NextPage } from 'next';
import Head from 'next/head';
import ImgContainer from '@src/components/ImgContainer/ImgContainer';
import styles from '../styles/Home.module.css';
import ContentContainer from '@src/components/ContentContainer/ContentContainer';
import ClickContainer from '@src/components/ClickContainer/ClickContainer';
import Layout from '../components/Layout';

const Home: NextPage = (pageProps) => {

  console.log(pageProps);
  return (
    <div className={styles.container}>
      <Head>
        <title>Onboarding Test_Bella </title>
        <meta name="onboarding test" content="onboarding test for bella" />
        <link rel="icon" href="/asset/logos/logo.png" />
      </Head>

      <main className={styles.main}>
        <ImgContainer />
        <ContentContainer />
        <ClickContainer />
      </main>
    </div>
  );
};

export default Home;
