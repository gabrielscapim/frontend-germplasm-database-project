import { useContext } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import styles from './LoginPage.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import Loading from '../../components/Common/Loading';

function LoginPage() {
  const global = useContext(GlobalContext);
  const {
    handleLoginClick,
    isloginFailed,
    loginState, handleLoginChange,
    isLoading } = global;

  const { loginInput, passwordInput } = loginState;

  return (
    <section className={ styles['page-container'] }>
      <form className={ styles['form-container'] }>
        <Input
          type="text"
          id="user-input"
          label="Nome de usuário"
          name="loginInput"
          placeholder="Digite seu nome de usuário"
          handleChange={ handleLoginChange }
          inputValue={ loginInput }
          maxInputLength={ 30 }
        />
        <Input
          type="password"
          id="password-input"
          label="Senha"
          name="passwordInput"
          placeholder="Digite sua senha"
          handleChange={ handleLoginChange }
          inputValue={ passwordInput }
          maxInputLength={ 30 }
        />
        { isloginFailed
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
        {
          isLoading && <Loading />
        }
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
          disabled={ false }
          onClick={ handleLoginClick }
        />
      </form>
    </section>
  );
}

export default LoginPage;
