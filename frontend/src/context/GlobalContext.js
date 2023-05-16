import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
// import fetchApi from '../services/fetchApi';
import mockApi from '../helpers/mockApi';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [apiResults, setApiResults] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [germplasmsNames, setGermplasmsNames] = useState([]);

  useEffect(() => {
    // fetchApi()
    //   .then((results) => {
    //     setApiResults(results);
    //     setAttributes(Object.keys(results[0]));
    //   });
    setApiResults(mockApi);
    setAttributes(Object.keys(mockApi[0]));
    setGermplasmsNames(mockApi.map(({ nome }) => nome));
  }, []);

  const setValue = useMemo(() => ({ apiResults, attributes, germplasmsNames }));

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
