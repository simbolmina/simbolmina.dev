import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.heroContent}>
          <div>
            <span className={styles.intro}>
              {`Hi, I am Bilal Arkan. I'm a..`}
            </span>
          </div>
          <div className={styles.wrapper}>
            <ul className={styles.dynamicText}>
              <li>
                <span>ReactJS</span>
              </li>
              <li>
                <span>NodeJS</span>
              </li>
              <li>
                <span>MongoDB</span>
              </li>
              <li>
                <span>M.E.R.N.</span>
              </li>
            </ul>
          </div>
          <span className={styles.developer}>Developer</span>
        </div>
        <div className={styles.heroInfo}>
          <div className={styles.heroInfoItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={styles.icon}
            >
              <path
                fill="#6741d9"
                d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
              />
            </svg>
            <Link href="mailto:simbolmina@gmail.com">
              <span className={styles.heroInfoItemLink}>
                simbolmina@gmail.com
              </span>
            </Link>
          </div>
          <div className={styles.heroInfoItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className={styles.icon}
            >
              <path
                fill="#6741d9"
                d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
              />
            </svg>
            Istanbul, Turkey
          </div>
          <div className={styles.heroInfoItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={styles.icon}
            >
              <path
                fill="#6741d9"
                d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"
              />
            </svg>
            <Link href="#contact">
              <span className={styles.heroInfoItemLink}>Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <div
          className={styles.heroImage}
          style={{ borderRadius: '50%', overflow: 'hidden' }}
        >
          <Image
            src="/images/avatar.png"
            alt="Bilal ARKAN, drawing from Sevgi Bilgin ARKAN"
            width={400}
            height={400}
          />
        </div>
        <p>
          Image from{' '}
          <a
            href="https://www.instagram.com/sba.illustrations/"
            rel="noreferrer"
            target="_blank"
          >
            Sevgi Bilgin ARKAN
          </a>
        </p>
      </div>
    </section>
  );
}

export default Hero;
