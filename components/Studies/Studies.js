import styles from './Studies.module.css';
import Image from 'next/image';

function Studies() {
  return (
    <section id="studies" className={styles.studiesWrapper}>
      <div className={styles.outerContainer}>
        <div className={styles.container1}>
          <div className={styles.containerItem}>
            <Image
              src="/images/wp.png"
              alt="wordpress logo"
              width={100}
              height={100}
            />
            <p>WORDPRESS</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/images/html55.png"
              alt="html 5 logo"
              width={100}
              height={100}
            />
            <p>HTML 5</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/images/csspurple.png"
              alt="css3 logo"
              width={100}
              height={100}
            />
            <p>CSS 3</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/images/jsp.png"
              alt="javascript logo"
              width={100}
              height={100}
            />
            <p>Java Script</p>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.containerItem}>
            <Image
              src="/images/react.png"
              alt="reactjs logo"
              width={100}
              height={100}
            />
            <p>ReactJS</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/images/node.png"
              alt="nodejs logo"
              width={100}
              height={100}
            />
            <p>NodeJS</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/images/mongoDB.png"
              alt="mongodb logo"
              width={150}
              height={100}
            />
            <p>MongoDB</p>
          </div>
          <div className={styles.containerItem}>
            <Image
              src="/images/next.png"
              alt="nextjs logo"
              width={150}
              height={100}
            />
            <p>NextJS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Studies;
