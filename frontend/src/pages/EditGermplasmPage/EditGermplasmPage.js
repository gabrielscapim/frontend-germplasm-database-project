/* eslint-disable no-alert */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditGermplasmPage.module.css';
import GermplasmTable from '../../components/Common/GermplasmTable';
import { GlobalContext } from '../../context/GlobalContext';
import notAttributesRequired from '../../helpers/notAttributesRequired';
import RequiredGermplasmsInputs from '../../components/Common/RequiredGermplasmsInputs';
import NoRequiredGermplasmsInputs
  from '../../components/Common/NoRequiredGermplasmsInputs';
import Header from '../../components/Header/Header';
import AddEditGermplasmButtons from '../../components/Common/AddEditGermplasmButtons';
import {
  newGermplasmInitialState,
  newGermplasmInputs } from '../../helpers/newGermplasmState';
import { apiRequest } from '../../services/apiRequest';

function EditGermplasmPage() {
  const global = useContext(GlobalContext);
  const { attributes, apiResults } = global;
  const navigate = useNavigate();

  const columns = notAttributesRequired(attributes);
  const germplasmIdToEdit = window.location.href.split('id/')[1];
  const germplasmToEdit = apiResults.find((apiResult) => (
    apiResult.id === Number(germplasmIdToEdit)));

  const {
    nome,
    tipoDeMaterialGenetico,
    texturaDoGrao,
    origem,
    transgenico,
    eventosTransgenicos,
    localNaCamaraFria,
    dataDeEntrada,
    dataDaUltimaColheita,
  } = germplasmToEdit;

  const [inputsState, setInputsState] = useState({
    newGermplasmName: nome,
    newGermplasmGeneticMaterial: tipoDeMaterialGenetico,
    newGermplasmGeneticGrainTexture: texturaDoGrao,
    newGermplasmColumnSelect: 'primeiraFolhaPigmentacaoAntocianinicaDaBainha',
    newGermplasmColumnValue: '',
    newGermplasmGeneticGeneticOrigin: origem,
    newGermplasmGeneticTransgenicSelect: transgenico ? 'Sim' : 'Não',
    newGermplasmGeneticEventsDetails: eventosTransgenicos,
    newGermplasmColdChamberLocal: localNaCamaraFria,
    newGermplasmEntryDate: dataDeEntrada,
    newGermplasmLastHarvertDate: dataDaUltimaColheita,
  });
  const [newGermplasm, setNewGermplasm] = useState({
    ...germplasmToEdit,
  });
  const [isFieldsCorrect, setIsFieldsCorrect] = useState(true);

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

  const handleEditGermplasmColumnClick = () => {
    setNewGermplasm((prevState) => ({
      ...prevState,
      [newGermplasmColumnSelect]: newGermplasmColumnValue,
    }));
    setInputsState((prevState) => ({
      ...prevState,
      newGermplasmColumnValue: '',
    }));
  };

  useEffect(() => {
    setNewGermplasm((prevState) => ({
      ...prevState,
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
    }));
  }, [inputsState]);

  const handleConfirmEditGermplasmClick = async () => {
    if (window.confirm('Deseja editar o germoplasma no banco de dados?')) {
      try {
        const germplasmEdited = { deletado: false, ...newGermplasm };
        await apiRequest('PUT', '/germplasm', germplasmEdited);
        window.alert('Germoplasma editado com sucesso!');
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

  const handleCancelEditGermplasmClick = () => {
    if (window.confirm('Deseja cancelar as alterações realizadas no germoplasma?')) {
      setInputsState(newGermplasmInputs);
      setNewGermplasm(newGermplasmInitialState);
    }
  };

  return (
    <>
      <Header />
      <form className={ styles['page-container'] }>
        <div className={ styles['edit-germplasm-container'] }>
          <RequiredGermplasmsInputs
            inputsState={ inputsState }
            handleChange={ handleChange }
            actualName={ nome }
            setIsFieldsCorrect={ setIsFieldsCorrect }
          />
          <NoRequiredGermplasmsInputs
            columnsToAdd={ columns }
            handleChange={ handleChange }
            handleAddAttributeClick={ handleEditGermplasmColumnClick }
            newGermplasmColumnSelect={ newGermplasmColumnSelect }
            newGermplasmColumnValue={ newGermplasmColumnValue }
          />
        </div>
        <GermplasmTable
          attributes={ Object.keys(germplasmToEdit) || [] }
          germplasms={ [{ ...newGermplasm }] }
        />
        <AddEditGermplasmButtons
          handleCancelAddGermplasmClick={ handleCancelEditGermplasmClick }
          handleAddGermplasmClick={ handleConfirmEditGermplasmClick }
          isFieldsCorrect={ isFieldsCorrect }
        />
      </form>
    </>
  );
}

export default EditGermplasmPage;
