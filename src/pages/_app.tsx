//server side 
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faSignOutAlt)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
