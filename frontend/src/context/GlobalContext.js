import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
// import apiGET from '../services/apiGET';
import mockApi from '../helpers/mockApi';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [apiResults, setApiResults] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [germplasmsNames, setGermplasmsNames] = useState([]);

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
