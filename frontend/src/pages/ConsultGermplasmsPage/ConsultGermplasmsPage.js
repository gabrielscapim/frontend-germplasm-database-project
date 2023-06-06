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
    columnFilterColumn: '',
    columnFilterOperator: 'igual a',
    columnFilterValue: '',
    sortFilterColumn: '',
    sortFilterOperator: 'Ascendente',
  });
  const [columnFiltersSelected, setcolumnFiltersSelected] = useState([]);

  const navigate = useNavigate();
  let columnFiltersAvaible = attributes.filter((attribute) => attribute !== 'nome');

  columnFiltersAvaible = columnFiltersAvaible.filter((columnFilterAvaible) => (
    !columnFiltersSelected
      .map((columnFilterSelected) => columnFilterSelected.columnFilterColumn)
      .includes(columnFilterAvaible)
  ));

  let filteredGermplasms = apiResults.filter(({ nome }) => (
    nome.toLowerCase().includes(filters.germplasmNameFilter.toLowerCase())
  ));

  // Generic function (loop) to apply multiples filters
  if (columnFiltersSelected.length !== 0) {
    columnFiltersSelected.forEach((columnFilterSelected) => {
      const {
        columnFilterColumn,
        columnFilterOperator,
        columnFilterValue,
      } = columnFilterSelected;

      filteredGermplasms = filteredGermplasms.filter((germplasm) => {
        switch (columnFilterOperator) {
        case 'maior que':
          return Number(germplasm[columnFilterColumn]) > Number(columnFilterValue);
        case 'menor que':
          return Number(germplasm[columnFilterColumn]) < Number(columnFilterValue);
        case 'igual a':
          if (!/^\d+$/.test(columnFilterValue)) {
            return germplasm[columnFilterColumn] === columnFilterValue;
          }
          return Number(germplasm[columnFilterColumn]) === Number(columnFilterValue);
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

  const columnFilterSubmit = () => {
    const { columnFilterColumn, columnFilterOperator, columnFilterValue } = filters;

    if (columnFilterColumn !== '' && columnFilterValue !== '') {
      setcolumnFiltersSelected((prevState) => [...prevState, {
        columnFilterColumn,
        columnFilterOperator,
        columnFilterValue,
      }]);

      setFilters((prevState) => ({
        ...prevState,
        columnFilterColumn: '',
        columnFilterOperator: 'igual a',
        columnFilterValue: '',
      }));
    }
  };

  const columnFilterDelete = (filterToDelete) => {
    const newcolumnFiltersSelected = columnFiltersSelected.filter((filter) => (
      filter.columnFilterColumn !== filterToDelete
    ));
    setcolumnFiltersSelected(newcolumnFiltersSelected);
  };

  const columnFilterDeleteAll = () => {
    setcolumnFiltersSelected([]);
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
          columnFiltersAvaible={ columnFiltersAvaible }
          filters={ filters }
          handleChangeFilters={ handleChangeFilters }
          columnFilterSubmit={ columnFilterSubmit }
          columnFiltersSelected={ columnFiltersSelected }
          columnFilterDelete={ columnFilterDelete }
          columnFilterDeleteAll={ columnFilterDeleteAll }
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
