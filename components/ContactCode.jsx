import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'aumbarai2004@gmail.com',
    href: 'mailto:aumbarai2004@gmail.com',
  },
  {
    social: 'phone',
    link: '+91 9316341142',
    href: 'tel:+919316341142',
  },
  {
    social: 'location',
    link: 'Khambhailia, Dwarka, Gujarat, India',
    href: '#',
  },
  {
    social: 'github',
    link: 'Aum-Barai',
    href: 'https://github.com/Aum-Barai',
  },
  {
    social: 'linkedin',
    link: 'Aum-Barai',
    href: 'https://www.linkedin.com/in/aum-barai-b19638248/',
  },
  {
    social: 'twitter',
    link: 'AumBarai',
    href: 'https://x.com/AumBarai',
  },
  {
    social: 'instagram',
    link: 'Aum_Barai',
    href: 'https://www.instagram.com/aum_barai/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
