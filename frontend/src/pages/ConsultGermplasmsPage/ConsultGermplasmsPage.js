import GermplasmTable from '../../components/GermplasmTable';
import styles from './ConsultGermplasmsPage.module.css';

function ConsultGermplasmsPage() {
  return (
    <section className={ styles['page-container'] }>
      <GermplasmTable />
    </section>
  );
}

export default ConsultGermplasmsPage;
