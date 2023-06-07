import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.css';
import Input from '../Common/Input';
import Select from '../Common/Select';
import Button from '../Common/Button';
import Datalist from '../Common/Datalist';
import { GlobalContext } from '../../context/GlobalContext';
import numericColumns from '../../helpers/numericColumns';

function Filters(
  { columnFiltersAvaible,
    attributes,
    handleChangeFilters,
    filters,
    columnFilterSubmit,
    columnFiltersSelected,
    columnFilterDelete,
    columnFilterDeleteAll,
  },
) {
  const ROW_CLASS = 'filters-row';
  const WARNING_TEXT_CLASS = 'warning-text';
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
    columnFilterColumn,
    columnFilterOperator,
    columnFilterValue,
    sortFilterColumn,
    sortFilterOperator,
  } = filters;

  const isNameFilterCorrect = germplasmsNames.includes(germplasmNameFilter);
  const iscolumnFilterColumnCorrect = columnFiltersAvaible
    .includes(columnFilterColumn);
  const isSortFilterColumnCorrect = attributes.includes(sortFilterColumn);

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
      { !isNameFilterCorrect
        && germplasmNameFilter !== ''
          && (
            <p className={ styles[WARNING_TEXT_CLASS] }>
              Digite um nome existente
            </p>
          )}
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="column-order"
          label="Coluna (atributo) a ser ordenada"
          options={ numericColumns }
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
      { !isSortFilterColumnCorrect
          && sortFilterColumn !== ''
          && (
            <p className={ styles[WARNING_TEXT_CLASS] }>
              Digite uma coluna existente
            </p>
          )}
      { isSortFilterColumnCorrect
          && sortFilterColumn !== ''
          && (
            <p className={ styles['order-filter-advice'] }>
              {`Filtro de ordenação aplicado: ${sortFilterColumn} ${sortFilterOperator}`}
            </p>
          )}
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="column-filter"
          label="Coluna (atributo) a ser filtrada"
          options={ columnFiltersAvaible }
          name="columnFilterColumn"
          placeholder="Digite a coluna a ser filtrada"
          handleChange={ handleChangeFilters }
          value={ columnFilterColumn }
        />
        <Select
          id="comparison-filter"
          label="Operador"
          options={ [
            'igual a',
            'maior que',
            'menor que',
          ] }
          name="columnFilterOperator"
          handleChange={ handleChangeFilters }
          inputValue={ columnFilterOperator }
        />
        <Input
          id="value-filter"
          label="Valor"
          type="text"
          name="columnFilterValue"
          labelClassName="general-input-label"
          inputClassName="value-input"
          handleChange={ handleChangeFilters }
          inputValue={ columnFilterValue }
        />
        <Button
          id="button-filter"
          label="Filtrar"
          type="button"
          disabled={ !iscolumnFilterColumnCorrect
            || columnFilterColumn === '' }
          componentStyles={ purpleButtonStyles }
          onClick={ columnFilterSubmit }
        />
      </div>
      { !iscolumnFilterColumnCorrect
          && columnFilterColumn !== ''
          && (
            <p className={ styles[WARNING_TEXT_CLASS] }>
              Digite uma coluna existente
            </p>
          )}
      { columnFiltersSelected.length > 0 && (
        <>
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
              onClick={ columnFilterDeleteAll }
            />
          </div>
          <h6>Filtros aplicados:</h6>
        </>
      )}
      { columnFiltersSelected.map((filter) => (
        <div
          key={ `${filter.columnFilterColumn}-applied` }
          className={ styles['delete-filter-container'] }
        >
          <button
            style={ {
              marginRight: '1%',
              padding: '0px',
              border: 'none',
              background: 'none',
            } }
            onClick={ () => columnFilterDelete(filter.columnFilterColumn) }
          >
            <i className="bi bi-trash"> </i>
          </button>
          <p>
            {
              `${filter.columnFilterColumn} 
              ${filter.columnFilterOperator} 
              ${filter.columnFilterValue}`
            }
          </p>
        </div>
      )) }
    </div>
  );
}

Filters.propTypes = {
  columnFiltersAvaible: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  attributes: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  handleChangeFilters: PropTypes.func,
  columnFilterSubmit: PropTypes.func,
  columnFiltersSelected: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  columnFilterDelete: PropTypes.func,
}.isRequired;

export default Filters;
