import styles from './Contact.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const [send, setSend] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async values => {
    const { fullname, email, subject, message } = values;

    if (fullname && email && subject && message) {
      const response = await fetch('/api/sendgrid', {
        method: 'post',
        body: JSON.stringify({
          fullname,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setSend(true);
        setTimeout(() => {
          setSend(false);
        }, 3000);
      }
    }
    reset();
  };

  return (
    <section id="contact" className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.heading}>
          <span>
            <span>CONTACT ME</span>
          </span>
          <h2>{`Let's`} work together</h2>
          <p>You can contact me through this form or mail me instead.</p>
        </div>
        <div
          className={styles.formContainer}
          onSubmit={handleSubmit(submitHandler)}
        >
          <form className={styles.form}>
            <input
              {...register('fullname', {
                required: 'Name should be at least 3 characters',
                minLength: 3,
              })}
              type="text"
              placeholder="Your name"
              className={styles.formInput}
            />

            <p className={styles.errorMessage}>{errors.fullname?.message}</p>
            <input
              {...register('email', {
                required: 'Please enter a valid email address',
              })}
              type="email"
              placeholder="Enter your email"
              className={styles.formInput}
            />
            <p className={styles.errorMessage}>{errors.email?.message}</p>
            <input
              {...register('subject', { required: 'Please enter a subject' })}
              type="text"
              placeholder="Subject"
              className={styles.formInput}
            />
            <p className={styles.errorMessage}>{errors.subject?.message}</p>
            <textarea
              {...register('message', {
                required: 'Please enter your message',
              })}
              placeholder="Enter your message"
              className={`${styles.formInput} ${styles.message}`}
              rows={4}
            ></textarea>
            <p className={styles.errorMessage}>{errors.message?.message}</p>

            <button className={`${styles.btn} ${send ? styles.green : ''}`}>
              {send ? 'Message Is Sent' : 'Send Message'}{' '}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
