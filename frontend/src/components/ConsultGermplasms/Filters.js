import PropTypes from 'prop-types';
import styles from './Filters.module.css';
import Input from '../Common/Input';
import Select from '../Common/Select';
import Button from '../Common/Button';
import Datalist from '../Common/Datalist';

function Filters({ attributes }) {
  const MAX_SCREEN_SIZE = 1260;
  const purpleButtonStyles = {
    backgroundColor: '#684f92',
    border: '1px solid #684f92',
    marginRight: '2%',
  };

  return (
    <div className={ styles['filters-container'] }>
      <div className={ styles['filters-container-first-line'] }>
        <Input
          id="name-filter"
          label="Filtrar por nome"
          type="text"
          name="nameFilter"
          placeholder="Digite o nome de um germoplasma"
          labelClassName="general-input-label"
        />
      </div>
      { window.innerWidth > MAX_SCREEN_SIZE && (
        <div className={ styles['filters-container-second-line'] }>
          <Datalist
            id="column-filter"
            label="Coluna"
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
            labelClassName="general-input-label"
            inputClassName="value-input"
            componentStyles={ {
              marginRight: '2%',
            } }
          />
          <Button
            id="button-filter"
            label="Filtrar"
            type="button"
            disabled={ false }
            componentStyles={ purpleButtonStyles }
          />
          <Datalist
            id="column-filter"
            label="Coluna"
            options={ attributes }
            name="columnOrderState"
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
              containerClassName="radio-container"
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
      ) }
      { window.innerWidth < MAX_SCREEN_SIZE && (
        <div className={ styles['filters-container-third-line'] }>
          <Datalist
            id="column-filter"
            label="Coluna"
            options={ attributes }
            name="columnOrderState"
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
              containerClassName="radio-container"
            />
          </div>
          <Button
            id="column-sort-button"
            label="Ordenar"
            type="button"
            disabled={ false }
            componentStyles={ {
              backgroundColor: '#684f92',
              border: '1px solid #684f92',
              marginRight: '1%',
            } }
          />
        </div>
      ) }
      <Button
        id="button-filter"
        label="Remover filtros"
        type="button"
        disabled={ false }
        componentStyles={ {
          backgroundColor: '#dc3545',
          border: '1px solid #dc3545',
          height: '35px',
          marginLeft: '1%',
          marginBottom: '12px',
        } }
      />
    </div>
  );
}

Filters.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
}.isRequired;

export default Filters;
