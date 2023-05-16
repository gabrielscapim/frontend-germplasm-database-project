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
  });

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

  return (
    <section className={ styles['page-container'] }>
      <Filters
        attributes={ attributes }
        filters={ filters }
        handleChangeFilters={ handleChangeFilters }
      />
      <GermplasmTable
        germplasms={ filteredGermplasms }
        attributes={ attributes }
      />
    </section>
  );
}

export default ConsultGermplasmsPage;
