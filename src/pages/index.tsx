import React, { useState } from 'react';
import ImgContainer from '../components/imgContainer/ImgContainer';
import ContentsContainer from '../components/contentsContainer/ContentsContainer';
import ClickContainer from '../components/clickContainer/ClickContainer';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import ShowImgModal from '../components/common/modal/ShowImgModal';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const showImgHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      {!openModal ? (
        <div className={styles.section_wrapper}>
          <ImgContainer showImgHandler={showImgHandler} />
          <ContentsContainer />
          <ClickContainer />
        </div>
      ) : (
        <ShowImgModal 
        setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Home;
