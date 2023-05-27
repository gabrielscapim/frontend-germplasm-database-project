import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
// import apiGET from '../services/apiGET';
import mockApi from '../helpers/mockApi';
import { loginRequest } from '../services/apiRequest';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [apiResults, setApiResults] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [germplasmsNames, setGermplasmsNames] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const TOKEN_EXPIRATION_TIME = 10000;

  useEffect(() => {
    // apiGET()
    //   .then((results) => {
    //     const noDeletedResults = results.filter(({ deletado }) => deletado === false);
    //     const deletedDeletadoColumn = noDeletedResults
    //       .map(({ deletado, ...result }) => result);
    //     setApiResults(deletedDeletadoColumn);
    //     setAttributes(Object.keys(deletedDeletadoColumn[0]));
    //     setGermplasmsNames(deletedDeletadoColumn.map(({ nome }) => nome));
    //   })
    //   .catch(() => {

    //   });
    setApiResults(mockApi);
    setAttributes(Object.keys(mockApi[0]));
    setGermplasmsNames(mockApi.map(({ nome }) => nome));
  }, []);

  const handleLoginClick = (userInput, passwordInput, setLoginFailed) => {
    console.log(isLoggedIn);
    loginRequest(userInput, passwordInput, setLoginFailed, setIsLoggedIn);
    setTimeout(() => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      console.log(isLoggedIn);
    }, TOKEN_EXPIRATION_TIME);
  };

  const setValue = useMemo(() => (
    { apiResults, attributes, germplasmsNames, handleLoginClick }));

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
