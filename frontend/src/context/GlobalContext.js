import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRequest, loginRequest } from '../services/apiRequest';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [apiResults, setApiResults] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [germplasmsNames, setGermplasmsNames] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isloginFailed, setIsLoginFailed] = useState(false);
  const [loginState, setLoginState] = useState({
    loginInput: '',
    passwordInput: '',
  });

  const navigate = useNavigate();
  const location = window.location.href;

  const handleLoginChange = ({ target }) => {
    const { name, value } = target;
    return setLoginState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginClick = async () => {
    const { loginInput, passwordInput } = loginState;

    const isLoggedinTrue = await loginRequest(loginInput, passwordInput);

    if (isLoggedinTrue) {
      navigate('/consult-germplasms');
      setIsLoginFailed(false);
      setIsLoggedIn(true);

      return null;
    }

    setIsLoginFailed(true);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem('token') && location.includes('consult-germplasm')) {
      console.log('requisitou');
      apiRequest('GET', '/germplasm')
        .then((results) => {
          setApiResults(results);
          setAttributes(Object.keys(results[0]));
          setGermplasmsNames(results.map(({ nome }) => nome));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  const setValue = useMemo(() => (
    { apiResults,
      attributes,
      germplasmsNames,
      handleLoginChange,
      handleLoginClick,
      isLoggedIn,
      isloginFailed,
      loginState,
      setLoginState,
    }));

  return (
    <GlobalContext.Provider
      value={ setValue }
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
