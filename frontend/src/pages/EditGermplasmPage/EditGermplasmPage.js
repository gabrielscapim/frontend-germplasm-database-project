/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from '../../components/Common/Select';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import styles from './EditGermplasmPage.module.css';
import GermplasmTable from '../../components/Common/GermplasmTable';
import { GlobalContext } from '../../context/GlobalContext';
import notAttributesRequired from '../../helpers/notAttributesRequired';

function EditGermplasmPage() {
  const ROW_CLASS = 'edit-germplasm-row';
  const global = useContext(GlobalContext);
  const { attributes, apiResults } = global;

  const navigate = useNavigate();
  const columns = notAttributesRequired(attributes);
  const germplasmIdToEdit = window.location.href.split('id/')[1];
  const germplasmToEdit = apiResults.find((apiResult) => (
    apiResult.id === Number(germplasmIdToEdit)));

  const [inputsState, setInputsState] = useState({
    editGermplasmColumnSelect: columns[0],
    editGermplasmColumnValue: '',
  });
  const [newGermplasm, setNewGermplasm] = useState({
    ...germplasmToEdit,
  });

  const { editGermplasmColumnSelect, editGermplasmColumnValue } = inputsState;

  const handleChangeInputs = ({ target }) => {
    const { name, value } = target;
    return setInputsState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditGermplasmClick = async () => {
    setNewGermplasm((prevState) => ({
      ...prevState,
      [editGermplasmColumnSelect]: editGermplasmColumnValue,
    }));
    setInputsState((prevState) => ({
      ...prevState,
      editGermplasmColumnValue: '',
    }));
  };

  const handleConfirmClick = async () => {
    if (window.confirm('Deseja editar o germoplasma no banco de dados?')) {
      try {
        await axios.put('http://localhost:8080/api/germplasm', { ...newGermplasm, deletado: false });
        navigate('/consult-germplasms');
        window.location.reload();
      } catch (error) {
        window.alert('Erro: não foi possível editar o germoplasmama,'
        + ' tente novamente mais tarde.');
        navigate('/consult-germplasms');
        window.location.reload();
      }
    }
  };

  return (
    <form className={ styles['page-container'] }>
      <div className={ styles['edit-germplasm-container'] }>
        <div className={ styles[ROW_CLASS] }>
          <Select
            id="edit-germplasm-column-select"
            label="Coluna (atributo) a ser editada"
            options={ columns }
            name="editGermplasmColumnSelect"
            handleChange={ handleChangeInputs }
            inputValue={ editGermplasmColumnSelect }
          />
          <Input
            id="edit-germplasm-column-value-input"
            label="Valor da coluna (atributo) a ser editada"
            name="editGermplasmColumnValue"
            placeholder="Digite o valor da coluna a ser editada"
            minInput={ 1 }
            handleChange={ handleChangeInputs }
            inputValue={ editGermplasmColumnValue }
          />
        </div>
        <div className={ styles[ROW_CLASS] }>
          <Button
            id="button-filter"
            label="Editar atributo"
            type="button"
            componentStyles={ {
              backgroundColor: '#684f92',
              border: '1px solid #684f92',
              height: '38px',
              marginBottom: '12px',
              marginTop: '8px',
            } }
            onClick={ handleEditGermplasmClick }
          />
        </div>
      </div>
      <GermplasmTable
        attributes={ Object.keys(germplasmToEdit) || [] }
        germplasms={ [{ ...newGermplasm }] }
        tableContainerStyles={ { height: '200px' } }
      />
      <Button
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
      />
    </form>
  );
}

export default EditGermplasmPage;
