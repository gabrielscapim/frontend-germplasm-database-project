import PropTypes from 'prop-types';
import styles from './Filters.module.css';
import Input from '../Common/Input';
import Select from '../Common/Select';
import Button from '../Common/Button';
import Datalist from '../Common/Datalist';

function Filters({ attributes }) {
  const ROW_CLASS = 'filters-row';
  const purpleButtonStyles = {
    backgroundColor: '#684f92',
    border: '1px solid #684f92',
    height: '36px',
    marginLeft: '2%',
  };

  return (
    <div className={ styles['filters-container'] }>
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="name-filter"
          label="Filtrar por nome"
          options={ attributes }
          name="nameFilter"
          containerStyles={ { width: '100%' } }
        />
      </div>
      <div className={ styles[ROW_CLASS] }>
        <Datalist
          id="column-filter"
          label="Coluna a ser filtrada"
          options={ attributes }
          name="columnFilter"
          containerStyles={ { width: '60%', marginRight: '2%' } }
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
          containerStyles={ { width: '30%', marginRight: '2%' } }
        />
        <Input
          id="value-filter"
          label="Valor"
          type="number"
          name="valueFilter"
          labelClassName="general-input-label"
          inputClassName="value-input"
          containerStyles={ { width: '10%' } }
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
          id="column-filter"
          label="Coluna a ser ordenada"
          options={ attributes }
          name="columnOrderState"
          containerStyles={ { width: '60%', marginRight: '2%' } }
        />
        <div className={ styles['filters-radios-container'] }>
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
            containerStyles={ { marginBottom: '0px', marginLeft: '5%' } }
          />
        </div>
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
}.isRequired;

export default Filters;
