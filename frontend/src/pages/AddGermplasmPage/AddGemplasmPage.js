/* eslint-disable no-alert */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddGermplasmPage.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import GermplasmTable from '../../components/Common/GermplasmTable';
import notAttributesRequired from '../../helpers/notAttributesRequired';
import {
  newGermplasmInitialState,
  newGermplasmInputs } from '../../helpers/newGermplasmState';
import RequiredGermplasmsInputs from '../../components/Common/RequiredGermplasmsInputs';
import NoRequiredGermplasmsInputs
  from '../../components/Common/NoRequiredGermplasmsInputs';
import Header from '../../components/Header/Header';
import AddEditGermplasmButtons from '../../components/Common/AddEditGermplasmButtons';
import { apiRequest } from '../../services/apiRequest';

function AddGermplasmPage() {
  const global = useContext(GlobalContext);
  const { attributes } = global;
  const navigate = useNavigate();
  const CONSULT_GERMPLASM_URL = '/consult-germplasms';

  const columnsToAdd = notAttributesRequired(attributes);

  const [inputsState, setInputsState] = useState(newGermplasmInputs);
  const [newGermplasm, setNewGermplasm] = useState(newGermplasmInitialState);
  const [isFieldsCorrect, setIsFieldsCorrect] = useState(false);

  const {
    newGermplasmName,
    newGermplasmGeneticMaterial,
    newGermplasmGeneticGrainTexture,
    newGermplasmGeneticGeneticOrigin,
    newGermplasmGeneticTransgenicSelect,
    newGermplasmGeneticEventsDetails,
    newGermplasmColdChamberLocal,
    newGermplasmEntryDate,
    newGermplasmLastHarvertDate,
    newGermplasmColumnSelect,
    newGermplasmColumnValue,
  } = inputsState;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return setInputsState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddAttributeClick = () => {
    setNewGermplasm((prevState) => ([{
      ...prevState[0],
      [newGermplasmColumnSelect]: newGermplasmColumnValue,
    }]));
    setInputsState((prevState) => ({
      ...prevState,
      newGermplasmColumnValue: '',
    }));
  };

  useEffect(() => {
    setNewGermplasm((prevState) => ([{
      ...prevState[0],
      nome: newGermplasmName,
      tipoDeMaterialGenetico: newGermplasmGeneticMaterial,
      texturaDoGrao: newGermplasmGeneticGrainTexture,
      origem: newGermplasmGeneticGeneticOrigin,
      transgenico: newGermplasmGeneticTransgenicSelect === 'Sim',
      eventosTransgenicos: newGermplasmGeneticTransgenicSelect === 'Não'
        ? '' : newGermplasmGeneticEventsDetails,
      localNaCamaraFria: newGermplasmColdChamberLocal,
      dataDeEntrada: newGermplasmEntryDate,
      dataDaUltimaColheita: newGermplasmLastHarvertDate,
    }]));
  }, [inputsState]);

  const handleConfirmAddGermplasmClick = async () => {
    if (window.confirm('Deseja adicionar o germoplasma no banco de dados?')) {
      try {
        await apiRequest('POST', '/germplasm', newGermplasm[0]);
        window.alert('Germoplasma adicionado com sucesso!');
        navigate(CONSULT_GERMPLASM_URL);
        window.location.reload();
      } catch (error) {
        window.alert(
          `Erro: não foi possível adicionar 
           o germoplasma. Status: ${error.response.status}`,
        );
        console.log(error);
        navigate(CONSULT_GERMPLASM_URL);
        window.location.reload();
      }
    }
  };

  const handleCancelAddGermplasmClick = () => {
    if (window.confirm('Deseja cancelar a inclusão do germoplasma no banco de dados?')) {
      navigate(CONSULT_GERMPLASM_URL);
    }
  };

  return (
    <>
      <Header />
      <form className={ styles['page-container'] }>
        <div className={ styles['add-germplasm-container'] }>
          <RequiredGermplasmsInputs
            inputsState={ inputsState }
            handleChange={ handleChange }
            setIsFieldsCorrect={ setIsFieldsCorrect }
          />
          <NoRequiredGermplasmsInputs
            columnsToAdd={ columnsToAdd }
            handleChange={ handleChange }
            newGermplasmColumnSelect={ newGermplasmColumnSelect }
            newGermplasmColumnValue={ newGermplasmColumnValue }
            handleAddAttributeClick={ handleAddAttributeClick }
          />
        </div>
        <GermplasmTable
          attributes={
            Object.keys(newGermplasm[0] || [])
          }
          germplasms={ newGermplasm }
        />
        <AddEditGermplasmButtons
          handleCancelAddGermplasmClick={ handleCancelAddGermplasmClick }
          handleAddGermplasmClick={ handleConfirmAddGermplasmClick }
          isFieldsCorrect={ isFieldsCorrect }
        />
      </form>
    </>
  );
}

export default AddGermplasmPage;
