import styles from './Header.module.css';

function Header() {
  const headerOptionDecoration = {
    textDecoration: 'underline',
    textUnderlineOffset: '5px',
    textDecorationColor: '#faf9f6',
  };
  const location = window.location.href;
  console.log(location);

  return (
    <header className={ styles.header }>
      <div className={ styles['header-title-options'] }>
        <h3>Germplasm Database</h3>
        <nav>
          <a
            href="/consult-germplasms"
            className={ styles['nav-option'] }
            style={ location.includes('consult') ? headerOptionDecoration : {} }
          >
            Consultar banco
          </a>
          <a
            href="/add-germplasm"
            className={ styles['nav-option'] }
            style={ location.includes('add') ? headerOptionDecoration : {} }
          >
            Adicionar novo
          </a>
        </nav>
      </div>
      {/* <div className={ styles['user-container'] }>
        <i className="bi bi-person-circle"> </i>
        Carlos Scapim
      </div> */}
    </header>
  );
}

export default Header;
