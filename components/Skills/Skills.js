import styles from './Skills.module.css';
import Image from 'next/image';
// import Link from 'next/link'

function Skills() {
  const itemData = [
    {
      id: '01',
      image: '/images/course-01.jpg',
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      info: '11 section • 150 classes • 37 hours',
      link: 'https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/',
    },
    {
      id: '02',
      image: '/images/course-02.jpg',
      title: 'The Complete JavaScript Course 2022: From Zero to Expert!',
      info: '21 section • 320 classes • 69 hours',
      link: 'https://www.udemy.com/course/the-complete-javascript-course/',
    },
    {
      id: '03',
      image: '/images/course-03.jpg',
      title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
      info: '31 section • 494 classes • 49 hours',
      link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
    },
    {
      id: '04',
      image: '/images/course-04.jpg',
      title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2022',
      info: '15 sections • 229 classes • 42 hours',
      link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/',
    },
    {
      id: '05',
      image: '/images/course-05.jpg',
      title: 'React, NodeJS, Express & MongoDB - The MERN Fullstack Guide',
      info: '14 sections • 208 classes • 19 hours',
      link: 'https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/',
    },
    {
      id: '06',
      image: '/images/course-06.jpg',
      title: 'Next.js & React - The Complete Guide (incl. Two Paths!)',
      info: '15 sections • 274 classes • 25 hours',
      link: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
    },
  ];
  return (
    <section id="skills" className={styles.skillsWrapper}>
      <div className={styles.titleContainer}>
        <h2>EDUCATION AND BOOTCAMPS I HAD</h2>
        <p>
          My journey of web development is mostly self-thought experience using
          online bootcamps. Here is some of bootcamps I took.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.educationContainer}>
          <div className={styles.educationTitle}>
            <span className={styles.educationTitleText}>EDUCATION</span>
          </div>
          <div className={styles.schoolContainer}>
            <div className={styles.educationSchool}>
              <div className={styles.educationShoolC1}>
                <div className={styles.educationSchoolYear}>2020</div>
                <div className={styles.educationSchoolDegree}>
                  Bachelors degree in Philosopy
                </div>
              </div>
              <div className={styles.educationShoolC2}>
                <h3 className={styles.educationSchoolUniversity}>
                  Ondokuz Mayis University
                </h3>
                <div className={styles.educationSchoolInfo}>
                  Philosopy is my most exiting passion. I do have a{' '}
                  <a
                    href="https://www.filozofunyolu.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Podcast
                  </a>{' '}
                  about that.
                </div>
              </div>
            </div>
            <div className={styles.educationSchool}>
              <div className={styles.educationShoolC1}>
                <div className={styles.educationSchoolYear}>2022</div>
                <div className={styles.educationSchoolDegree}>
                  2 Year-College in Computer Programming
                </div>
              </div>
              <div className={styles.educationShoolC2}>
                <h3 className={styles.educationSchoolUniversity}>
                  Atatürk University
                </h3>
                <div className={styles.educationSchoolInfo}>
                  After deciding web development I started computer programming
                  to learn fundemantels of programming
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.courseContainer}>
          <div className={styles.itemContainer}>
            {itemData.map(item => {
              return (
                <div className={styles.item} key={item.id}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={125}
                    />
                  </div>
                  <div className={styles.infoContainer}>
                    <h3>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </h3>
                    <p>{item.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
