import styles from './About.module.css';
import Image from 'next/image';

function About() {
  return (
    <section id="about" className={styles.aboutWrapper}>
      <div className={styles.aboutContainer}>
        <div className={styles.info}>
          <div className={styles.aboutMe}>
            <span>ABOUT ME</span>
          </div>
          <h2>I am a web developer since 2020</h2>
          <p>
            My first web project was to create a website for my own podcast
            years ago. I had an udemy course about Wordpress, an unnecesseraly
            long and detailed course at that, and created my website. {`It's `}
            still on wp but {`I'll `} recreate it with NextJS soon.
          </p>
          <p>
            Things happened and I have decided to change my proffession into web
            developer at late 2020 and since then studying web development.
            After some research I have decided to become a{' '}
            <span className={styles.purple}> MERN </span>
            developer and started learning by udemy bootcamps.
          </p>
          <p>
            Although the adventure to learn was not flawless it was fun to
            experience. After spending hundereds of hours on studying and
            practice I think I am now ready to get into business, especially
            with team at large scale application.
          </p>
        </div>
        <div className={styles.lang}>
          <div className={styles.logoContainer}>
            <div className={styles.logoItem}>
              <Image
                src="/Images/react.png"
                alt="ReactJS"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/Images/node.png"
                alt="NodeJS"
                width={90}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/Images/mongoDB.png"
                alt="MongoDB"
                width={175}
                height={100}
              />
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.aboutMe}>
              <span>MY SKILLS</span>
            </div>
            <h2>REACT, NODE, MongoDB</h2>
            <p>
              I am working on <span className={styles.purple}> MERN</span>{' '}
              projects and confident to get into serious and large scale
              applications. Especially NextJS is my favorite and I created this
              website with <span className={styles.purple}> NextJS </span> as
              well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
