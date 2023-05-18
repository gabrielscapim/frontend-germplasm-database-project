import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Common/Button';
import styles from './EditGermplasmPage.module.css';
import GermplasmTable from '../../components/Common/GermplasmTable';
import { GlobalContext } from '../../context/GlobalContext';
import notAttributesRequired from '../../helpers/notAttributesRequired';
import RequiredGermplasmsInputs from '../../components/Common/RequiredGermplasmsInputs';
import NoRequiredGermplasmsInputs
  from '../../components/Common/NoRequiredGermplasmsInputs';

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
      nome: newGermplasmName,
      tipoDeMaterialGenetico: newGermplasmGeneticMaterial,
      texturaDoGrao: newGermplasmGeneticGrainTexture,
      origem: newGermplasmGeneticGeneticOrigin,
      transgenico: newGermplasmGeneticTransgenicSelect === 'Sim',
      eventosTransgenicos: newGermplasmGeneticEventsDetails,
      localNaCamaraFria: newGermplasmColdChamberLocal,
      dataDeEntrada: newGermplasmEntryDate,
      dataDaUltimaColheita: newGermplasmLastHarvertDate,
    }));
    setInputsState((prevState) => ({
      ...prevState,
      newGermplasmColumnValue: '',
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

  console.log(newGermplasmName);
  console.log(nome);

  return (
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
      <div className={ styles['button-container'] }>
        { newGermplasm.nome === ''
        && (
          <p
            style={ {
              fontSize: '14px',
              color: '#dc3545',
              marginBottom: '8px' } }
          >
            Preencha o nome do germoplasma
          </p>
        )}
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
          disabled={ newGermplasm.nome === '' }
        />
      </div>
    </form>
  );
}

export default EditGermplasmPage;
