import React from 'react';
import styles from './ShowImgModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  setOpenModal: boolean;
}

function ShowImgModal({ setOpenModal }: Props) {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={styles.img_modal_container} onClick={closeModal}>
      <div className={styles.img_modal_wrapper}>
        <FontAwesomeIcon 
        className = {styles.exit_icon}
        icon={faSignOutAlt} />
        <div className={styles.big_img} />
      </div>
    </div>
  );
}

export default ShowImgModal;
