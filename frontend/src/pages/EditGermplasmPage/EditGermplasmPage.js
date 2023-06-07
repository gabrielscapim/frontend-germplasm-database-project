/* eslint-disable no-alert */
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
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

  const handleEditGermplasmClick = async () => {
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
    console.log('escreveu');
  }, [inputsState]);

  const handleConfirmClick = async () => {
    if (window.confirm('Deseja editar o germoplasma no banco de dados?')) {
      try {
        await axios.put('http://localhost:8080/api/germplasm', { ...newGermplasm, deletado: false });
        navigate('/consult-germplasms');
        window.alert('Germoplasma editado com sucesso!');
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
      // setNameIsCorrect(false);
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
          />
          <NoRequiredGermplasmsInputs
            columnsToAdd={ columns }
            handleChange={ handleChange }
            handleAddAttributeClick={ handleEditGermplasmClick }
            newGermplasmColumnSelect={ newGermplasmColumnSelect }
            newGermplasmColumnValue={ newGermplasmColumnValue }
          />
        </div>
        <GermplasmTable
          attributes={ Object.keys(germplasmToEdit) || [] }
          germplasms={ [{ ...newGermplasm }] }
          tableContainerStyles={ { height: '200px' } }
        />
        <AddEditGermplasmButtons
          handleCancelAddGermplasmClick={ handleCancelEditGermplasmClick }
          handleAddGermplasmClick={ handleConfirmClick }
        />
      </form>
    </>
  );
}

export default EditGermplasmPage;
