import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.css';
import Input from '../Common/Input';
import Select from '../Common/Select';
import Button from '../Common/Button';
import Datalist from '../Common/Datalist';
import { GlobalContext } from '../../context/GlobalContext';

function Filters({ attributes, handleChangeFilters, filters }) {
  const ROW_CLASS = 'filters-row';
  const purpleButtonStyles = {
    backgroundColor: '#684f92',
    border: '1px solid #684f92',
    height: '36px',
    marginLeft: '2%',
  };
  const global = useContext(GlobalContext);
  const { germplasmsNames } = global;

  const { germplasmName } = filters;

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
          value={ germplasmName }
        />
      </div>
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="column-filter"
          label="Coluna a ser filtrada"
          options={ attributes }
          name="columnFilter"
          placeholder="Digite a coluna a ser filtrada"
        />
        <Select
          id="comparison-filter"
          label="Operador"
          options={ [
            'maior que',
            'menor que',
            'igual a',
          ] }
          name="comparisonFilter"
        />
        <Input
          id="value-filter"
          label="Valor"
          type="number"
          name="valueFilter"
          labelClassName="general-input-label"
          inputClassName="value-input"
        />
        <Button
          id="button-filter"
          label="Filtrar"
          type="button"
          disabled={ false }
          componentStyles={ purpleButtonStyles }
        />
      </div>
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="column-order"
          label="Coluna a ser ordenada"
          options={ attributes }
          name="columnOrderState"
          placeholder="Digite a coluna a ser ordenada"
        />
        <Select
          id="column-sort-input-asc"
          label="Operador"
          options={ [
            'Ascendente',
            'Descendente',
          ] }
          name="sortState"
        />
        <Button
          id="column-sort-button"
          label="Ordenar"
          type="button"
          disabled={ false }
          componentStyles={ purpleButtonStyles }
        />
      </div>
      <div className={ styles[ROW_CLASS] }>
        <Button
          id="button-filter"
          label="Remover filtros"
          type="button"
          disabled={ false }
          componentStyles={ {
            backgroundColor: '#dc3545',
            border: '1px solid #dc3545',
            height: '38px',
            marginBottom: '12px',
            marginTop: '12px',
          } }
        />
      </div>
    </div>
  );
}

Filters.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  handleChangeFilters: PropTypes.func,
}.isRequired;

export default Filters;
