import { useContext } from 'react';
import Filters from '../../components/ConsultGermplasms/Filters';
import GermplasmTable from '../../components/ConsultGermplasms/GermplasmTable';
import styles from './ConsultGermplasmsPage.module.css';
import { GlobalContext } from '../../context/GlobalContext';

function ConsultGermplasmsPage() {
  const global = useContext(GlobalContext);
  const { apiResults, attributes } = global;

  return (
    <section className={ styles['page-container'] }>
      <Filters
        attributes={ attributes }
      />
      <GermplasmTable
        apiResults={ apiResults }
        attributes={ attributes }
      />
    </section>
  );
}

export default ConsultGermplasmsPage;
