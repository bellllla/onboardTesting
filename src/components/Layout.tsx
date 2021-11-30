// nav || footer 와 같이 공통적으로 있어야 하는 부분을 감싸는 컴포넌트.
import React from 'react';
import Sample from './Sample';
import styles from '../styles/Home.module.css';

function Layout({ children }): JSX.Element {

  return (
    <>
      <Sample/>
        <main>{children}</main>
    </>
  );
}

export default Layout;
