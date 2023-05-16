import PropTypes from 'prop-types';
import styles from './Filters.module.css';
import Input from '../Common/Input';
import Select from '../Common/Select';
import Button from '../Common/Button';

function Filters({ attributes }) {
  return (
    <div className={ styles['filters-container'] }>
      <Input
        id="name-filter"
        label="Filtrar por nome"
        type="text"
        name="nameFilter"
      />
      <Select
        id="column-filter"
        label="Coluna"
        options={ attributes }
        name="columnFilter"
      />
      <Select
        id="comparison-filter"
        label="operador"
        options={ [
          'maior que',
          'menor que',
          'igual a',
        ] }
        name="comparisonFilter"
      />
      <Input
        id="value-filter"
        label="valor"
        type="number"
        name="valueFilter"
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
      <Select
        id="column-sort"
        label="Ordenar"
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
