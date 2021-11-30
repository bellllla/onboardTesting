import React from 'react'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import "@styles/global.css";
import "@styles/index.css"

export default function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}