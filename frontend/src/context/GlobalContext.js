/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { createContext } from 'react';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const test = 'teste';

  return (
    <GlobalContext.Provider
      value={ {
        test,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
