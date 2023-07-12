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

  const getGermplasmsFromApi = async () => {
    try {
      const fetchApi = await apiRequest('GET', '/germplasm');
      setApiResults(fetchApi);
      console.log(fetchApi);
      setAttributes(Object.keys(fetchApi[0]));
      setGermplasmsNames(fetchApi.map(({ nome }) => nome));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getGermplasmsFromApi();
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
