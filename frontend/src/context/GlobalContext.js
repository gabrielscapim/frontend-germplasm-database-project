import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import fetchApi from '../services/fetchApi';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [apiResults, setApiResults] = useState([]);
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    fetchApi()
      .then((results) => {
        setApiResults(results);
        setAttributes(Object.keys(results[0]));
      });
  }, []);

  const setValue = useMemo(() => ({ apiResults, attributes }));

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
