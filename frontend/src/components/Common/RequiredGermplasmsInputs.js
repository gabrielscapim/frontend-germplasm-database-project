import PropTypes from 'prop-types';
import { useContext } from 'react';
import Input from './Input';
import Select from './Select';
import styles from './RequiredGermplasmsInputs.module.css';
import {
  origemMaterialGenetico,
  texturaDoGrao, tiposDeMaterialGenetico,
} from '../../data/geneticMaterial';
import { GlobalContext } from '../../context/GlobalContext';

function RequiredGermplasmsInputs({
  handleChange,
  inputsState,
  actualName,
}) {
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
  } = inputsState;

  const global = useContext(GlobalContext);
  const { germplasmsNames } = global;

  const ROW_CLASS = 'add-germplasm-row';
  const wrongInputStyle = { border: '1px solid red' };

  const namesWithoutSpace = germplasmsNames.map((name) => name.replace(/\s/g, ''));

  const newGermplasmNameWithoutSpace = newGermplasmName.replace(/\s/g, '');
  const isGermplasmNameExist = actualName === undefined
    ? namesWithoutSpace.includes(newGermplasmNameWithoutSpace)
    : namesWithoutSpace.filter((nameWithoutSpace) => nameWithoutSpace !== actualName.replace(/\s/g, ''))
      .includes(newGermplasmNameWithoutSpace);

  const isRequiredInputsCorrect = newGermplasmColdChamberLocal.trim() !== ''
    && newGermplasmEntryDate !== '' && newGermplasmLastHarvertDate !== ''
    && newGermplasmName.trim() !== '';

  return (
    <section>
      <div className={ styles[ROW_CLASS] }>
        <Input
          id="new-germplasm-name"
          label="Nome do germoplasma"
          name="newGermplasmName"
          placeholder="Digite o nome germoplasma"
          handleChange={ handleChange }
          inputValue={ newGermplasmName }
          maxInputLength={ 64 }
          inputStyle={
            (isGermplasmNameExist || newGermplasmName.trim() === '')
            && wrongInputStyle
          }
        />
      </div>
      { isGermplasmNameExist
        && (
          <p className={ styles['warning-text'] }>
            Digite o nome de um germoplasma não existente
          </p>
        )}
      <div className={ styles[ROW_CLASS] }>
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
          options={ texturaDoGrao }
          name="newGermplasmGeneticGrainTexture"
          handleChange={ handleChange }
          inputValue={ newGermplasmGeneticGrainTexture }
        />
      </div>
      <div className={ styles[ROW_CLASS] }>
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
      { (newGermplasmGeneticTransgenicSelect === 'Sim'
      || newGermplasmGeneticTransgenicSelect === true)
      && (
        <div className={ styles[ROW_CLASS] }>
          <Input
            id="new-germplasm-genetic-events-details"
            label="Descreva os eventos transgênicos"
            name="newGermplasmGeneticEventsDetails"
            placeholder="Digite os eventos transgênicos"
            handleChange={ handleChange }
            inputValue={ newGermplasmGeneticEventsDetails }
          />
        </div>
      ) }
      <div className={ styles[ROW_CLASS] }>
        <Input
          id="new-germplasm-cold-chamber-local"
          label="Local na câmara fria"
          name="newGermplasmColdChamberLocal"
          placeholder="Digite o local do germoplasma na câmara fria"
          handleChange={ handleChange }
          inputValue={ newGermplasmColdChamberLocal }
          maxInputLength={ 64 }
          inputStyle={
            (newGermplasmColdChamberLocal.trim() === '')
            && wrongInputStyle
          }
        />
        <Input
          type="date"
          id="new-germplasm-entry-date"
          label="Data de entrada na câmara fria"
          name="newGermplasmEntryDate"
          handleChange={ handleChange }
          inputValue={ newGermplasmEntryDate }
          inputStyle={
            (newGermplasmEntryDate.trim() === '')
            && wrongInputStyle
          }
        />
        <Input
          type="date"
          id="new-germplasm-last-harvert-date"
          label="Data da última colheita"
          name="newGermplasmLastHarvertDate"
          handleChange={ handleChange }
          inputValue={ newGermplasmLastHarvertDate }
          inputStyle={
            (newGermplasmLastHarvertDate.trim() === '')
            && wrongInputStyle
          }
        />
      </div>
      { !isRequiredInputsCorrect
        && (
          <p className={ styles['warning-text'] }>
            Preencha os campos obrigatórios
          </p>
        )}
    </section>
  );
}

RequiredGermplasmsInputs.propTypes = {
  handleChange: PropTypes.func,
  inputsState: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
}.isRequired;

export default RequiredGermplasmsInputs;
