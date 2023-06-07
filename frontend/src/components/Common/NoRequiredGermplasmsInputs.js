import PropTypes from 'prop-types';
import Select from './Select';
import Input from './Input';
import Button from './Button';
import styles from './NoRequiredGermplasmsInputs.module.css';

function NoRequiredGermplasmsInputs({
  columnsToAdd,
  handleChange,
  handleAddAttributeClick,
  newGermplasmColumnSelect,
  newGermplasmColumnValue,
}) {
  const ROW_CLASS = 'germplasm-row';

  return (
    <section className={ styles['inputs-container'] }>
      <div className={ styles[ROW_CLASS] }>
        <Select
          id="new-germplasm-column-select"
          label="Coluna (atributo) a ser adicionada ou editada"
          options={ columnsToAdd }
          name="newGermplasmColumnSelect"
          handleChange={ handleChange }
          inputValue={ newGermplasmColumnSelect }
        />
        <Input
          inputValue={ newGermplasmColumnValue }
          id="new-germplasm-column-value-input"
          label="Valor"
          name="newGermplasmColumnValue"
          placeholder="Digite o valor da coluna"
          handleChange={ handleChange }
        />
        <Button
          id="button-add-attribute"
          label="Adicionar"
          type="button"
          componentStyles={ {
            backgroundColor: '#684f92',
            border: '1px solid #684f92',
            height: '38px',
            marginLeft: '2%',
          } }
          onClick={ handleAddAttributeClick }
        />
      </div>
    </section>
  );
}

NoRequiredGermplasmsInputs.propTypes = {
  handleChange: PropTypes.func,
  handleAddAttributeClick: PropTypes.func,
  columnsToAdd: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
}.isRequired;

export default NoRequiredGermplasmsInputs;
