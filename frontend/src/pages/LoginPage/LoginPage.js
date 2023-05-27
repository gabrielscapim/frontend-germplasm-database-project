import { useContext, useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import styles from './LoginPage.module.css';
import { GlobalContext } from '../../context/GlobalContext';

function LoginPage() {
  const global = useContext(GlobalContext);
  const { handleLoginClick } = global;

  const [state, setState] = useState({
    userInput: '',
    passwordInput: '',
  });
  const [loginFailed, setLoginFailed] = useState(false);

  const { userInput, passwordInput } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className={ styles['page-container'] }>
      <form className={ styles['form-container'] }>
        <Input
          type="text"
          id="user-input"
          label="Nome de usuário"
          name="userInput"
          placeholder="Digite seu nome de usuário"
          handleChange={ handleChange }
          inputValue={ userInput }
          maxInputLength={ 30 }
        />
        <Input
          type="password"
          id="password-input"
          label="Senha"
          name="passwordInput"
          placeholder="Digite sua senha"
          handleChange={ handleChange }
          inputValue={ passwordInput }
          maxInputLength={ 30 }
        />
        { loginFailed
          && (
            <p
              style={ {
                fontSize: '14px',
                color: '#dc3545',
                marginBottom: '8px' } }
            >
              Usuário ou senha incorretos
            </p>
          )}
        <Button
          id="login-button"
          label="Entrar"
          type="button"
          componentStyles={ {
            backgroundColor: '#006400',
            border: '1px solid #006400',
            height: '38px',
            marginBottom: '12px',
            marginTop: '8px',
            width: '100%',
          } }
          onClick={ () => handleLoginClick(userInput, passwordInput, setLoginFailed) }
          // disabled={ newGermplasm.nome === '' }
        />
      </form>
    </section>
  );
}

export default LoginPage;
