/* eslint-disable max-lines */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './AddGermplasmPage.module.css';
import Select from '../../components/Common/Select';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import { GlobalContext } from '../../context/GlobalContext';
import GermplasmTable from '../../components/Common/GermplasmTable';
import notAttributesRequired from '../../helpers/notAttributesRequired';
import {
  newGermplasmInitialState,
  newGermplasmInputs } from '../../helpers/newGermplasmState';
import RequiredGermplasmsInputs from '../../components/Common/RequiredGermplasmsInputs';

function AddGermplasmPage() {
  const global = useContext(GlobalContext);
  const { attributes, germplasmsNames } = global;
  const navigate = useNavigate();

  const columnsToAdd = notAttributesRequired(attributes);
  const ROW_CLASS = 'add-germplasm-row';

  const [inputsState, setInputsState] = useState(newGermplasmInputs);
  const [newGermplasm, setNewGermplasm] = useState(newGermplasmInitialState);
  const [nameIsCorrect, setNameIsCorrect] = useState(false);

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

  const namesWithoutSpace = germplasmsNames.map((name) => name.replace(/\s/g, ''));
  const newGermplasmNameWithoutSpace = newGermplasmName.replace(/\s/g, '');
  const isGermplasmNameExist = namesWithoutSpace.includes(newGermplasmNameWithoutSpace);
  const isRequiredInputsCorrect = newGermplasmColdChamberLocal !== ''
    && newGermplasmEntryDate !== '' && newGermplasmLastHarvertDate !== ''
    && newGermplasmName !== '';

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return setInputsState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleContinueClick = () => {
    if (!isGermplasmNameExist && isRequiredInputsCorrect) {
      setNameIsCorrect(true);
      setNewGermplasm([{
        deletado: false,
        nome: newGermplasmName,
        tipoDeMaterialGenetico: newGermplasmGeneticMaterial,
        texturaDoGrao: newGermplasmGeneticGrainTexture,
        origem: newGermplasmGeneticGeneticOrigin,
        transgenico: newGermplasmGeneticTransgenicSelect === 'Sim',
        eventosTransgenicos: newGermplasmGeneticEventsDetails,
        localNaCamaraFria: newGermplasmColdChamberLocal,
        dataDeEntrada: newGermplasmEntryDate,
        dataDaUltimaColheita: newGermplasmLastHarvertDate,
      }]);
    }
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

  const handleAddGermplasmClick = async () => {
    if (window.confirm('Deseja adicionar o germoplasma no banco de dados?')) {
      try {
        await axios.post('http://localhost:8080/api/germplasm', newGermplasm[0]);
        window.alert('Germoplasma adicionado com sucesso!');
        navigate('/consult-germplasms');
        window.location.reload();
      } catch (error) {
        window.alert('Erro: não foi possível adicionar o germoplasmama,'
        + ' tente novamente mais tarde.');
        window.location.reload();
      }
    }
  };

  const handleCancelAddGermplasClick = () => {
    if (window.confirm('Deseja cancelar a inclusão do germoplasma no banco de dados?')) {
      setInputsState(newGermplasmInputs);
      setNewGermplasm(newGermplasmInitialState);
      setNameIsCorrect(false);
    }
  };

  return (
    <form className={ styles['page-container'] }>
      <div className={ styles['add-germplasm-container'] }>
        { !nameIsCorrect
        && (
          <>
            <RequiredGermplasmsInputs
              inputsState={ inputsState }
              handleChange={ handleChange }
            />
            <div className={ styles[ROW_CLASS] }>
              <Button
                id="button-continue-add-germplasm"
                label="Continuar"
                type="button"
                componentStyles={ {
                  backgroundColor: '#684f92',
                  border: '1px solid #684f92',
                  height: '38px',
                  marginBottom: '12px',
                  marginTop: '8px',
                } }
                onClick={ handleContinueClick }
                disabled={ !(!isGermplasmNameExist && isRequiredInputsCorrect) }
              />
            </div>
          </>

        )}
        { nameIsCorrect
        && (
          <>
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
          </>
        ) }
      </div>
      { nameIsCorrect && (
        <>
          <GermplasmTable
            attributes={ Object.keys(newGermplasm[0]) || [] }
            germplasms={ newGermplasm }
            tableContainerStyles={ { height: '200px' } }
          />
          <div className={ styles['add-germplasm-button-row'] }>
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
              onClick={ handleCancelAddGermplasClick }
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
          </div>
        </>
      )}
    </form>
  );
}

export default AddGermplasmPage;
