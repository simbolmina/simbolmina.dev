import styles from './Studies.module.css';
import Image from 'next/image';

function Studies() {
  return (
    <section id="studies" className={styles.studiesWrapper}>
      <div className={styles.outerContainer}>
        <div className={styles.container1}>
          <div className={styles.containerItem}>
            <Image
              src="/Images/wp.png"
              alt="wordpress logo"
              width={100}
              height={100}
            />
            {/* <img
              src="/Images/wp.png"
              alt="ReactJS"
              className={styles.logoItem}
            /> */}
            <p>WORDPRESS</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/Images/html55.png"
              alt="html 5 logo"
              width={100}
              height={100}
            />
            {/* <img
              src="/Images/html55.png"
              alt="ReactJS"
              className={styles.logoItem}
            /> */}
            <p>HTML 5</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/Images/csspurple.png"
              alt="css3 logo"
              width={100}
              height={100}
            />
            {/* <img
              src="/Images/csspurple.png"
              alt="ReactJS"
              className={styles.logoItem}
            /> */}
            <p>CSS 3</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/Images/jsp.png"
              alt="javascript logo"
              width={100}
              height={100}
            />
            {/* <img
              src="/Images/jsp.png"
              alt="ReactJS"
              className={styles.logoItem}
            /> */}
            <p>Java Script</p>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.containerItem}>
            <Image
              src="/Images/react.png"
              alt="reactjs logo"
              width={100}
              height={100}
            />
            {/* <img
              src="/Images/react.png"
              alt="ReactJS"
              className={styles.logoItem}
            /> */}
            <p>ReactJS</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/Images/wp.png"
              alt="nodejs logo"
              width={100}
              height={100}
            />
            {/* <img
              src="/Images/node.png"
              alt="ReactJS"
              className={styles.logoItem}
            /> */}
            <p>NodeJS</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/Images/mongoDB.png"
              alt="mongodb logo"
              width={150}
              height={100}
            />
            {/* <img
              src="/Images/mongoDB.png"
              alt="ReactJS"
              className={styles.logoItem}
            /> */}
            <p>MongoDB</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/Images/next.png"
              alt="nextjs logo"
              width={150}
              height={100}
            />
            {/* <img
              src="/Images/next.png"
              alt="ReactJS"
              className={styles.logoItem}
            /> */}
            <p>NextJS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Studies;
