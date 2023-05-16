/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
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
    sortFilterColumn: '',
    sortFilterOperator: 'Ascendente',
  });

  const numericFilters = attributes.filter((attribute) => attribute !== 'nome');

  const handleChangeFilters = ({ target }) => {
    const { name, value } = target;
    return setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let filteredGermplasms = apiResults.filter(({ nome }) => (
    nome.toLowerCase().includes(filters.germplasmNameFilter.toLowerCase())
  ));

  const numericFilterSubmit = () => {

  };

  const sortFilterSubmit = () => {

  };

  return (
    <section className={ styles['page-container'] }>
      <Filters
        attributes={ attributes }
        filters={ filters }
        handleChangeFilters={ handleChangeFilters }
        numericFilterSubmit={ numericFilterSubmit }
      />
      <GermplasmTable
        germplasms={ filteredGermplasms }
        attributes={ attributes }
      />
    </section>
  );
}

export default ConsultGermplasmsPage;
