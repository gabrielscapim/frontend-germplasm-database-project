import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={ styles.footer }>
      <a
        href="https://www.linkedin.com/in/gabrielscapim/"
        target="_blank"
        rel="noreferrer"
      >
        <h5
          className={ styles.signature }
        >
          Developed by Electrical Engineer Gabriel Scapim
        </h5>
      </a>
      <h5 className={ styles.version }>
        Version: 1.0.0
      </h5>
    </footer>
  );
}

export default Footer;
