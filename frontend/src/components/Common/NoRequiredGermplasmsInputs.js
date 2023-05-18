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
    <section>
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
          type="number"
          inputValue={ newGermplasmColumnValue }
          id="new-germplasm-column-value-input"
          label="Valor da coluna (atributo) a ser adicionada ou editada"
          name="newGermplasmColumnValue"
          placeholder="Digite o valor da coluna a ser adicionada ou editada"
          minInput={ 1 }
          handleChange={ handleChange }
          maxInput={ 100 }
          maxInputLength={ 3 }
        />
      </div>
      <div className={ styles[ROW_CLASS] }>
        <Button
          id="butto-add-attribute"
          label="Adicionar atributo"
          type="button"
          componentStyles={ {
            backgroundColor: '#684f92',
            border: '1px solid #684f92',
            height: '38px',
            marginBottom: '12px',
            marginTop: '8px',
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
