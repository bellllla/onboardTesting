import React from 'react';
import styles from './ContentsContainer.module.scss';

function ContentContainer({}) {

  return (
    <section className={styles.section_2}>
      <p>05.01.2021 - 06.01.2021</p>
      <h1>Your warm shelter</h1>

      <ul className={styles.flex_grid}>
        <li>Gwanak-gu</li>
        <li>Hongik University</li>
        <li>Hongik station</li>
      </ul>

    </section>
  );
}

export default ContentContainer;
