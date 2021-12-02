import React,{useState} from 'react'
import styles from './ImgContainer.module.css';

interface Props {
  showImgHandler: any;
}

function ImgContainer({ showImgHandler }: Props):JSX.Element {

  const [more , setMore] = useState<boolean>(false)
  
  const focusTextHandler = () => {
    setMore(true);
  }
  const notFocusTextHandler = () => {
    setMore(false);
  }

  return (
    <>
      <section className={styles.section_1}>
        <div className={styles.main_img} 
        onMouseEnter = {focusTextHandler}
        onMouseLeave = {notFocusTextHandler}
        onClick={showImgHandler}>
          <h2 
          className = {more===true?
            styles.focused
            :
            styles.not_focused
          }
          >크게 보기</h2>
        </div>
      </section>
    </>
  );
}


export default ImgContainer;