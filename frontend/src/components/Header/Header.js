import styles from './Header.module.css';

function Header() {
  return (
    <header className={ styles.header }>
      <div className={ styles['header-title-options'] }>
        <h3>Germplasm Database</h3>
        <nav>
          <a
            href="/consult-germplasms"
            className={ styles['nav-option'] }
          >
            Consultar banco
          </a>
          <a
            href="/add-germplasm"
            className={ styles['nav-option'] }
          >
            Adicionar novo
          </a>
        </nav>
      </div>
      <div className={ styles['user-container'] }>
        <i className="bi bi-person-circle"> </i>
        Carlos Scapim
      </div>
    </header>
  );
}

export default Header;
