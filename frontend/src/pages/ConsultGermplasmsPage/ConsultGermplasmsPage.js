/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import Filters from '../../components/ConsultGermplasms/Filters';
import GermplasmTable from '../../components/ConsultGermplasms/GermplasmTable';
import styles from './ConsultGermplasmsPage.module.css';
import { GlobalContext } from '../../context/GlobalContext';

function ConsultGermplasmsPage() {
  const global = useContext(GlobalContext);
  const { apiResults, attributes } = global;
  const [filters, setFilters] = useState({
    germplasmNameFilter: '',
    numericFilterColumn: '',
    numericFilterOperator: 'maior que',
    numericFilterValue: 0,
    sortFilterApplied: false,
    sortFilterColumn: '',
    sortFilterOperator: 'Ascendente',
  });
  const [numericFiltersSelected, setNumericFiltersSelected] = useState([]);

  let numericFiltersAvaible = attributes.filter((attribute) => attribute !== 'nome');

  numericFiltersAvaible = numericFiltersAvaible.filter((numericFilterAvaible) => (
    !numericFiltersSelected
      .map((numericFilterSelected) => numericFilterSelected.numericFilterColumn)
      .includes(numericFilterAvaible)
  ));

  let filteredGermplasms = apiResults.filter(({ nome }) => (
    nome.toLowerCase().includes(filters.germplasmNameFilter.toLowerCase())
  ));

  // Generic function (loop) to apply multiples filters
  if (numericFiltersSelected.length !== 0) {
    numericFiltersSelected.forEach((numericFilterSelected) => {
      const {
        numericFilterColumn,
        numericFilterOperator,
        numericFilterValue,
      } = numericFilterSelected;

      filteredGermplasms = filteredGermplasms.filter((germplasm) => {
        switch (numericFilterOperator) {
        case 'maior que':
          return Number(germplasm[numericFilterColumn]) > Number(numericFilterValue);
        case 'menor que':
          return Number(germplasm[numericFilterColumn]) < Number(numericFilterValue);
        case 'igual a':
          return Number(germplasm[numericFilterColumn]) === Number(numericFilterValue);
        default:
          break;
        }
        return planet;
      });
    });
  }

  if (filters.sortFilterApplied === true) {
    const { sortFilterColumn, sortFilterOperator } = filters;

    const unknownValues = filteredGermplasms
      .filter((germplasm) => germplasm[sortFilterColumn] === '');

    let notUnknownValues = filteredGermplasms
      .filter((germplasm) => germplasm[sortFilterColumn] !== 'unknown');

    switch (sortFilterOperator) {
    case 'Ascendente':
      notUnknownValues = notUnknownValues.sort((a, b) => (
        Number(a[sortFilterColumn]) - Number(b[sortFilterColumn])));
      filteredGermplasms = [...notUnknownValues, ...unknownValues];
      break;

    case 'Descendente':
      notUnknownValues = notUnknownValues.sort((a, b) => (
        Number(b[sortFilterColumn]) - Number(a[sortFilterColumn])));
      filteredGermplasms = [...notUnknownValues, ...unknownValues];
      console.log(filteredGermplasms);
      break;

    default:
      break;
    }
  }

  const handleChangeFilters = ({ target }) => {
    const { name, value } = target;
    return setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const numericFilterSubmit = () => {
    const { numericFilterColumn, numericFilterOperator, numericFilterValue } = filters;

    if (numericFilterColumn !== '' && numericFilterValue !== '') {
      setNumericFiltersSelected((prevState) => [...prevState, {
        numericFilterColumn,
        numericFilterOperator,
        numericFilterValue,
      }]);
    }
  };

  const sortFilterSubmit = () => {
    const { sortFilterColumn } = filters;

    if (sortFilterColumn !== '') {
      setFilters((prevState) => ({
        ...prevState,
        sortFilterApplied: true,
      }));
    }
  };

  return (
    <section className={ styles['page-container'] }>
      <Filters
        attributes={ attributes }
        numericFiltersAvaible={ numericFiltersAvaible }
        filters={ filters }
        handleChangeFilters={ handleChangeFilters }
        numericFilterSubmit={ numericFilterSubmit }
        numericFiltersSelected={ numericFiltersSelected }
        sortFilterSubmit={ sortFilterSubmit }
      />
      <GermplasmTable
        germplasms={ filteredGermplasms }
        attributes={ attributes }
      />
    </section>
  );
}

export default ConsultGermplasmsPage;
