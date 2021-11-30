import React from 'react';
import styles from './ContentContainer.module.css';

function ContentContainer() {
  return (
    <section className={styles.section_2}>
      <p>05.01.2021 - 06.01.2021</p>
      <h1>Your warm shelter</h1>

      <div className={styles.grid}>
        <p>gwangk-gu</p>
        <p>Hongik University</p>
        <p>Hongik station</p>
      </div>

    </section>
  );
}

export default ContentContainer;
