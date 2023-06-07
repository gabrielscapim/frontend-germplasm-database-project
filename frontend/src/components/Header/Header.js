import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const headerOptionDecoration = {
    textDecoration: 'underline',
    textUnderlineOffset: '5px',
    textDecorationColor: '#faf9f6',
  };
  const location = window.location.href;
  const navigate = useNavigate();

  const exitClick = () => {
    if (window.confirm('Deseja sair da aplicação?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenGenerationTime');
      navigate('/login');
    }
  };

  return (
    <header className={ styles.header }>
      <div className={ styles['header-title-options'] }>
        <h3>Germplasm Database</h3>
        <nav>
          <div>
            <a
              href="/consult-germplasms"
              // eslint-disable-next-line sonarjs/no-duplicate-string
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
          </div>
          <button
            type="button"
            onClick={ exitClick }
            className={ styles['button-option'] }
          >
            Sair
          </button>
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
