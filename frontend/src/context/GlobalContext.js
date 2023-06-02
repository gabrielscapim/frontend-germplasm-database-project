import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
// import apiGET from '../services/apiGET';
import { useNavigate } from 'react-router-dom';
// import mockApi from '../helpers/mockApi';
import { apiRequest, loginRequest } from '../services/apiRequest';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [apiResults, setApiResults] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [germplasmsNames, setGermplasmsNames] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const TOKEN_EXPIRATION_TIME = 10000000;
  const navigate = useNavigate();

  useEffect(() => {
    apiRequest('GET', '/germplasm')
      .then((results) => {
        const noDeletedResults = results.filter(({ deletado }) => deletado === false);
        const deletedDeletadoColumn = noDeletedResults
          .map(({ deletado, ...result }) => result);
        setApiResults(deletedDeletadoColumn);
        setAttributes(Object.keys(deletedDeletadoColumn[0]));
        setGermplasmsNames(deletedDeletadoColumn.map(({ nome }) => nome));
      })
      .catch((error) => {
        console.log(error);
      });
    // setApiResults(mockApi);
    // setAttributes(Object.keys(mockApi[0]));
    // setGermplasmsNames(mockApi.map(({ nome }) => nome));
    // apiRequest('GET', '/germplasm').then((response) => console.log(response));
  }, []);

  const handleLoginClick = (userInput, passwordInput, setLoginFailed) => {
    loginRequest(userInput, passwordInput, setLoginFailed, setIsLoggedIn);
    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenGenerationTime');
      setIsLoggedIn(false);
      navigate('/login');
    }, TOKEN_EXPIRATION_TIME);
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/consult-germplasms');
  }, [isLoggedIn]);

  const setValue = useMemo(() => (
    { apiResults,
      attributes,
      germplasmsNames,
      handleLoginClick,
      isLoggedIn,
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
