import PropTypes from 'prop-types';
import Button from './Button';
import styles from './AddEditGermplasmButton.module.css';

function AddEditGermplasmButtons(
  {
    handleCancelAddGermplasmClick,
    handleAddGermplasmClick,
  },
) {
  return (
    <div className={ styles['buttons-container'] }>
      <Button
        id="button-cancel-add-germplasm"
        label="Cancelar"
        type="button"
        componentStyles={ {
          backgroundColor: '#dc3545',
          border: '1px solid #dc3545',
          height: '38px',
          marginBottom: '12px',
          marginTop: '8px',
        } }
        onClick={ handleCancelAddGermplasmClick }
      />
      <Button
        id="button-add-germplasm"
        label="Adicionar germoplasma"
        type="button"
        componentStyles={ {
          backgroundColor: '#006400',
          border: '1px solid #006400',
          height: '38px',
          marginBottom: '12px',
          marginTop: '8px',
        } }
        onClick={ handleAddGermplasmClick }
      />
      {/* <Button
        id="button-add-germplasm"
        label="Finalizar"
        type="button"
        componentStyles={ {
          backgroundColor: '#006400',
          border: '1px solid #006400',
          height: '38px',
          marginBottom: '12px',
          marginTop: '8px',
        } }
        onClick={ handleConfirmClick }
        disabled={ newGermplasm.nome === '' }
      /> */}
    </div>
  );
}

AddEditGermplasmButtons.propTypes = {
  handleCancelAddGermplasmClick: PropTypes.func.isRequired,
  handleAddGermplasmClick: PropTypes.func.isRequired,
};

export default AddEditGermplasmButtons;
