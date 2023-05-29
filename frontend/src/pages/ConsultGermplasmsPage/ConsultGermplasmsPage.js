import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Filters from '../../components/ConsultGermplasms/Filters';
import GermplasmTable from '../../components/Common/GermplasmTable';
import styles from './ConsultGermplasmsPage.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import Header from '../../components/Header/Header';

function ConsultGermplasmsPage() {
  const global = useContext(GlobalContext);
  const { apiResults, attributes } = global;
  const [filters, setFilters] = useState({
    germplasmNameFilter: '',
    numericFilterColumn: '',
    numericFilterOperator: 'menor que',
    numericFilterValue: '',
    sortFilterColumn: '',
    sortFilterOperator: 'Ascendente',
  });
  const [numericFiltersSelected, setNumericFiltersSelected] = useState([]);

  const navigate = useNavigate();
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
    break;

  default:
    break;
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

      setFilters((prevState) => ({
        ...prevState,
        numericFilterColumn: '',
        numericFilterOperator: 'maior que',
        numericFilterValue: '',
      }));
    }
  };

  const numericFilterDelete = (filterToDelete) => {
    const newNumericFiltersSelected = numericFiltersSelected.filter((filter) => (
      filter.numericFilterColumn !== filterToDelete
    ));
    setNumericFiltersSelected(newNumericFiltersSelected);
  };

  const numericFilterDeleteAll = () => {
    setNumericFiltersSelected([]);
  };

  const deleteGermplasm = async (id) => {
    if (window.confirm(`Deseja excluir o germoplasma de id igual a ${id}?`)) {
      const germplasmSelected = apiResults.find((result) => result.id === id);
      try {
        await axios.put('http://localhost:8080/api/germplasm', { ...germplasmSelected, deletado: true });
        window.alert('Germoplasma excluído com sucesso!');
        window.location.reload();
      } catch (error) {
        window.alert('Erro: não foi possível excluir o germoplasmama,'
        + ' tente novamente mais tarde.');
      }
    }
  };

  const editGermplasm = (id) => {
    if (window.confirm(`Deseja editar o germoplasma de id igual a ${id}?`)) {
      navigate(`/edit-germplasm/id/${id}`);
    }
  };

  return (
    <>
      <Header />
      <section className={ styles['page-container'] }>
        <Filters
          attributes={ attributes }
          numericFiltersAvaible={ numericFiltersAvaible }
          filters={ filters }
          handleChangeFilters={ handleChangeFilters }
          numericFilterSubmit={ numericFilterSubmit }
          numericFiltersSelected={ numericFiltersSelected }
          numericFilterDelete={ numericFilterDelete }
          numericFilterDeleteAll={ numericFilterDeleteAll }
        />
        <GermplasmTable
          germplasms={ filteredGermplasms }
          attributes={ attributes }
          deleteGermplasm={ deleteGermplasm }
          editGermplasm={ editGermplasm }
        />
      </section>
    </>
  );
}

export default ConsultGermplasmsPage;
