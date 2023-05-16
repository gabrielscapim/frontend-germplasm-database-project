import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.css';
import Input from '../Common/Input';
import Select from '../Common/Select';
import Button from '../Common/Button';
import Datalist from '../Common/Datalist';
import { GlobalContext } from '../../context/GlobalContext';
import { verifyNumericInput } from '../../helpers/verifyInputs';

function Filters(
  { numericFiltersAvaible,
    attributes,
    handleChangeFilters,
    filters,
    numericFilterSubmit,
    numericFiltersSelected,
    numericFilterDelete,
    numericFilterDeleteAll,
  },
) {
  const ROW_CLASS = 'filters-row';
  const purpleButtonStyles = {
    backgroundColor: '#684f92',
    border: '1px solid #684f92',
    height: '36px',
    marginLeft: '2%',
  };
  const global = useContext(GlobalContext);
  const { germplasmsNames } = global;

  const {
    germplasmNameFilter,
    numericFilterColumn,
    numericFilterOperator,
    numericFilterValue,
    sortFilterColumn,
    sortFilterOperator,
  } = filters;

  const verifyGermplasmNameFilter = germplasmsNames.includes(germplasmNameFilter);
  const verifyNumericFilterColumn = numericFiltersAvaible.includes(numericFilterColumn);
  const verifySortFilterColumn = attributes.includes(sortFilterColumn);

  return (
    <div className={ styles['filters-container'] }>
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="germplasm-name-filter"
          label="Filtrar por nome"
          options={ germplasmsNames }
          name="germplasmNameFilter"
          placeholder="Digite o nome de um germoplasma"
          handleChange={ handleChangeFilters }
          value={ germplasmNameFilter }
        />
      </div>
      { !verifyGermplasmNameFilter
        && germplasmNameFilter !== ''
          && (
            <p style={ { fontSize: '14px', color: '#dc3545' } }>
              Digite um nome existente
            </p>
          )}
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="column-order"
          label="Coluna a ser ordenada"
          options={ attributes.filter((attr) => attr !== 'nome') }
          name="sortFilterColumn"
          placeholder="Digite a coluna a ser ordenada"
          handleChange={ handleChangeFilters }
          value={ sortFilterColumn }
        />
        <Select
          id="column-sort-input-asc"
          label="Operador"
          options={ [
            'Ascendente',
            'Descendente',
          ] }
          name="sortFilterOperator"
          handleChange={ handleChangeFilters }
          inputValue={ sortFilterOperator }
        />
      </div>
      { !verifySortFilterColumn
          && sortFilterColumn !== ''
          && (
            <p style={ { fontSize: '14px', color: '#dc3545' } }>
              Digite uma coluna existente
            </p>
          )}
      { verifySortFilterColumn
          && sortFilterColumn !== ''
          && (
            <p style={ { fontSize: '14px' } }>
              {`Filtro de ordenação aplicado: ${sortFilterColumn} ${sortFilterOperator}`}
            </p>
          )}
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="column-filter"
          label="Coluna a ser filtrada"
          options={ numericFiltersAvaible }
          name="numericFilterColumn"
          placeholder="Digite a coluna a ser filtrada"
          handleChange={ handleChangeFilters }
          value={ numericFilterColumn }
        />
        <Select
          id="comparison-filter"
          label="Operador"
          options={ [
            'maior que',
            'menor que',
            'igual a',
          ] }
          name="numericFilterOperator"
          handleChange={ handleChangeFilters }
          inputValue={ numericFilterOperator }
        />
        <Input
          id="value-filter"
          label="Valor"
          type="number"
          name="numericFilterValue"
          labelClassName="general-input-label"
          inputClassName="value-input"
          handleChange={ handleChangeFilters }
          inputValue={ numericFilterValue }
        />
        <Button
          id="button-filter"
          label="Filtrar"
          type="button"
          disabled={ !verifyNumericFilterColumn
            || !verifyNumericInput(numericFilterValue) }
          componentStyles={ purpleButtonStyles }
          onClick={ numericFilterSubmit }
        />
      </div>
      { !verifyNumericFilterColumn
          && numericFilterColumn !== ''
          && (
            <p style={ { fontSize: '14px', color: '#dc3545' } }>
              Digite uma coluna existente
            </p>
          )}
      { !verifyNumericInput(numericFilterValue)
          && numericFilterValue !== ''
          && (
            <p style={ { fontSize: '14px', color: '#dc3545' } }>
              Digite um valor acima de 0
            </p>
          )}
      <div className={ styles[ROW_CLASS] }>
        <Button
          id="button-filter"
          label="Remover todos os filtros"
          type="button"
          disabled={ false }
          componentStyles={ {
            backgroundColor: '#dc3545',
            border: '1px solid #dc3545',
            height: '38px',
            marginBottom: '12px',
            marginTop: '12px',
          } }
          onClick={ numericFilterDeleteAll }
        />
      </div>
      { numericFiltersSelected.length > 0 && (
        <h6>Filtros aplicados:</h6>
      )}
      { numericFiltersSelected.map((filter) => (
        <div
          key={ `${filter.numericFilterColumn}-applied` }
          className={ styles['delete-filter-container'] }
        >
          <button
            style={ {
              marginRight: '1%',
              padding: '0px',
              border: 'none',
              background: 'none',
            } }
            onClick={ () => numericFilterDelete(filter.numericFilterColumn) }
          >
            <i className="bi bi-trash"> </i>
          </button>
          <p>
            {
              `${filter.numericFilterColumn} 
              ${filter.numericFilterOperator} 
              ${filter.numericFilterValue}`
            }
          </p>
        </div>
      )) }
    </div>
  );
}

Filters.propTypes = {
  numericFiltersAvaible: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  attributes: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  handleChangeFilters: PropTypes.func,
  numericFilterSubmit: PropTypes.func,
  numericFiltersSelected: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  numericFilterDelete: PropTypes.func,
}.isRequired;

export default Filters;
