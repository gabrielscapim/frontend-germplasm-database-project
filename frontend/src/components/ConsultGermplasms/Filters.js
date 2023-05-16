import PropTypes from 'prop-types';
import styles from './Filters.module.css';
import Input from '../Common/Input';
import Select from '../Common/Select';
import Button from '../Common/Button';
import Datalist from '../Common/Datalist';

function Filters({ attributes }) {
  return (
    <div className={ styles['filters-container'] }>
      <Input
        id="name-filter"
        label="Filtrar por nome"
        type="text"
        name="nameFilter"
        placeholder="Digite o nome de um germoplasma"
      />
      <Datalist
        id="column-filter"
        label="Colsdfdsuna"
        options={ attributes }
        name="columnFilter"
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
        placeholder="Digite o valor em que deseja filtrar"
      />
      <Button
        id="button-filter"
        label="Filtrar"
        type="button"
        disabled={ false }
      />
      <Input
        id="column-sort-input-asc"
        label="Ascendente"
        type="radio"
        inputValue="ASC"
        name="sortState"
      />
      <Input
        id="column-sort-input-desc"
        label="Descendente"
        type="radio"
        inputValue="DESC"
        name="sortState"
      />
      <Datalist
        id="column-filter"
        label="Colsdfdsuna"
        options={ attributes }
        name="columnOrderState"
      />
      <Button
        id="column-sort-button"
        label="Ordenar"
        type="button"
        disabled={ false }
      />
    </div>
  );
}

Filters.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
}.isRequired;

export default Filters;
