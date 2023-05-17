/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import styles from './AddGermplasmPage.module.css';
import Select from '../../components/Common/Select';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import {
  origemMaterialGenetico,
  tiposDeLinhagem, tiposDeMaterialGenetico,
} from '../../data/geneticMaterial';
import { GlobalContext } from '../../context/GlobalContext';
import GermplasmTable from '../../components/Common/GermplasmTable';
import notAttributesRequired from '../../helpers/notAttributesRequired';

function AddGermplasmPage() {
  const global = useContext(GlobalContext);
  const { attributes, germplasmsNames } = global;

  const columnsToAdd = notAttributesRequired(attributes);
  const ROW_CLASS = 'add-germplasm-row';

  const [inputsState, setInputsState] = useState({
    newGermplasmName: '',
    newGermplasmGeneticMaterial: 'linhagem',
    newGermplasmGeneticGrainTexture: 'milho comum',
    newGermplasmColumnSelect: 'primeiraFolhaPigmentacaoAntocianinicaDaBainha',
    newGermplasmGeneticGeneticOrigin: 'temperado',
    newGermplasmGeneticTransgenicSelect: 'Não',
    newGermplasmGeneticEventsDetails: '',
  });
  const [newGermplasm, setNewGermplasm] = useState({});
  const [nameIsCorrect, setNameIsCorrect] = useState(false);

  const {
    newGermplasmName,
    newGermplasmGeneticMaterial,
    newGermplasmGeneticGrainTexture,
    newGermplasmGeneticGeneticOrigin,
    newGermplasmGeneticTransgenicSelect,
    newGermplasmGeneticEventsDetails,
    newGermplasmColumnValue,
    newGermplasmColumnSelect,
  } = inputsState;

  const namesWithoutSpace = germplasmsNames.map((name) => name.replace(/\s/g, ''));
  const newGermplasmNameWithoutSpace = newGermplasmName.replace(/\s/g, '');
  const verifyGermplasmName = !namesWithoutSpace
    .includes(newGermplasmNameWithoutSpace) && newGermplasmName !== '';

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return setInputsState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleContinueClick = () => {
    if (verifyGermplasmName) {
      setNameIsCorrect(true);
      setNewGermplasm({
        nome: newGermplasmName,
        tipoDeMaterialGenetico: newGermplasmGeneticMaterial,
        texturaDoGrao: newGermplasmGeneticGrainTexture,
        origem: newGermplasmGeneticGeneticOrigin,
        transgenico: newGermplasmGeneticTransgenicSelect === 'Sim',
        eventosTransgenicos: newGermplasmGeneticEventsDetails,
        localNaCamaraFria: 'c13',
        dataDeEntrada: '03-12-2022',
        dataDaUltimaColheita: '04-02-22',
      });
    }
  };

  const handleAddAttributeClick = () => {
    console.log('adicionou atributo');
  };

  const handleAddGermplasmClick = () => {
    console.log('adicionou germoplasma');
  };

  return (
    <section className={ styles['page-container'] }>
      <div className={ styles['add-germplasm-container'] }>
        { !nameIsCorrect
        && (
          <>
            <div className={ styles[ROW_CLASS] }>
              <Input
                id="new-germplasm-name"
                label="Nome do novo germoplasma"
                name="newGermplasmName"
                placeholder="Digite o nome"
                handleChange={ handleChange }
              />
              <Select
                id="new-germplasm-genetic-material"
                label="Tipo de material génetico"
                options={ tiposDeMaterialGenetico }
                name="newGermplasmGeneticMaterial"
                handleChange={ handleChange }
                inputValue={ newGermplasmGeneticMaterial }
              />
              <Select
                id="new-germplasm-genetic-grain-texture"
                label="Textura do grão"
                options={ tiposDeLinhagem }
                name="newGermplasmGeneticGrainTexture"
                handleChange={ handleChange }
                inputValue={ newGermplasmGeneticGrainTexture }
              />
              <Select
                id="new-germplasm-genetic-genetic-origin"
                label="Origem"
                options={ origemMaterialGenetico }
                name="newGermplasmGeneticGeneticOrigin"
                handleChange={ handleChange }
                inputValue={ newGermplasmGeneticGeneticOrigin }
              />
              <Select
                id="new-germplasm-genetic-transgenic-select"
                label="Transgênico"
                options={ ['Sim', 'Não'] }
                name="newGermplasmGeneticTransgenicSelect"
                handleChange={ handleChange }
                inputValue={ newGermplasmGeneticTransgenicSelect }
              />
            </div>
            { !verifyGermplasmName
                && (
                  <p
                    style={ {
                      fontSize: '14px',
                      color: '#dc3545',
                      marginBottom: '8px' } }
                  >
                    Digite o nome de um germoplasma não existente
                  </p>
                )}
            { newGermplasmGeneticTransgenicSelect === 'Sim' && (
              <div className={ styles[ROW_CLASS] }>
                <Input
                  id="new-germplasm-genetic-events-details"
                  label="Descreva os eventos transgênicos"
                  name="newGermplasmGeneticEventsDetails"
                  placeholder="Digite os eventos transgênicos"
                  handleChange={ handleChange }
                />
              </div>
            ) }
            <div className={ styles[ROW_CLASS] }>
              <Button
                id="button-filter"
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
                disabled={ !verifyGermplasmName }
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
                label="Coluna (atributo) a ser adicionada"
                options={ columnsToAdd }
                name="newGermplasmColumnSelect"
                handleChange={ handleChange }
                inputValue={ newGermplasmColumnSelect }
              />
              <Input
                type="number"
                id="new-germplasm-column-value-input"
                label="Valor da coluna (atributo) a ser adicionada"
                name="newGermplasmColumnValue"
                placeholder="Digite o valor da coluna a ser adicionada"
                minInput={ 1 }
                handleChange={ handleChange }
              />
            </div>
            <div className={ styles['buttons-row'] }>
              <Button
                id="button-filter"
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
              <Button
                id="button-filter"
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
        ) }
      </div>
      <GermplasmTable
        attributes={ attributes.filter((attribute) => attribute !== 'id') }
        germplasms={ [] }
        tableContainerStyles={ { height: '200px' } }
      />
    </section>
  );
}

export default AddGermplasmPage;
