import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Link href="/">{`{ simbolmina : dev }`}</Link>
            </div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navMenu}>
              <li className={styles.navItem}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#about">About Me</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#skills">Skills</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li className={`${styles.navItem} ${styles.contact}`}>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
