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

function RequiredGermplasmsInputs({ handleChange, inputsState, actualName }) {
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

  const namesWithoutSpace = germplasmsNames.map((name) => name.replace(/\s/g, ''));

  const newGermplasmNameWithoutSpace = newGermplasmName.replace(/\s/g, '');
  const isGermplasmNameExist = actualName === undefined
    ? namesWithoutSpace.includes(newGermplasmNameWithoutSpace)
    : namesWithoutSpace.filter((nameWithoutSpace) => nameWithoutSpace !== actualName.replace(/\s/g, ''))
      .includes(newGermplasmNameWithoutSpace);

  const isRequiredInputsCorrect = newGermplasmColdChamberLocal !== ''
    && newGermplasmEntryDate !== '' && newGermplasmLastHarvertDate !== ''
    && newGermplasmName !== '';

  return (
    <>
      <div className={ styles[ROW_CLASS] }>
        <Input
          id="new-germplasm-name"
          label="*Nome do germoplasma"
          name="newGermplasmName"
          placeholder="Digite o nome germoplasma"
          handleChange={ handleChange }
          inputValue={ newGermplasmName }
        />
      </div>
      <div className={ styles[ROW_CLASS] }>
        <Select
          id="new-germplasm-genetic-material"
          label="*Tipo de material génetico"
          options={ tiposDeMaterialGenetico }
          name="newGermplasmGeneticMaterial"
          handleChange={ handleChange }
          inputValue={ newGermplasmGeneticMaterial }
        />
        <Select
          id="new-germplasm-genetic-grain-texture"
          label="*Textura do grão"
          options={ texturaDoGrao }
          name="newGermplasmGeneticGrainTexture"
          handleChange={ handleChange }
          inputValue={ newGermplasmGeneticGrainTexture }
        />
      </div>
      <div className={ styles[ROW_CLASS] }>
        <Select
          id="new-germplasm-genetic-genetic-origin"
          label="*Origem"
          options={ origemMaterialGenetico }
          name="newGermplasmGeneticGeneticOrigin"
          handleChange={ handleChange }
          inputValue={ newGermplasmGeneticGeneticOrigin }
        />
        <Select
          id="new-germplasm-genetic-transgenic-select"
          label="*Transgênico"
          options={ ['Sim', 'Não'] }
          name="newGermplasmGeneticTransgenicSelect"
          handleChange={ handleChange }
          inputValue={ newGermplasmGeneticTransgenicSelect }
        />
      </div>
      { isGermplasmNameExist
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
      { (newGermplasmGeneticTransgenicSelect === 'Sim'
      || newGermplasmGeneticTransgenicSelect === true)
      && (
        <div className={ styles[ROW_CLASS] }>
          <Input
            id="new-germplasm-genetic-events-details"
            label="*Descreva os eventos transgênicos"
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
          label="*Local na câmara fria"
          name="newGermplasmColdChamberLocal"
          placeholder="Digite o local do germoplasma na câmara fria"
          handleChange={ handleChange }
          inputValue={ newGermplasmColdChamberLocal }
        />
        <Input
          type="date"
          id="new-germplasm-entry-date"
          label="*Data de entrada na câmara fria"
          name="newGermplasmEntryDate"
          handleChange={ handleChange }
          inputValue={ newGermplasmEntryDate }
        />
        <Input
          type="date"
          id="new-germplasm-last-harvert-date"
          label="*Data da última colheita"
          name="newGermplasmLastHarvertDate"
          handleChange={ handleChange }
          inputValue={ newGermplasmLastHarvertDate }
        />
      </div>
      { !isRequiredInputsCorrect
        && (
          <p
            style={ {
              fontSize: '14px',
              color: '#dc3545',
              marginBottom: '8px' } }
          >
            * Preencha os campos obrigatórios
          </p>
        )}
    </>
  );
}

RequiredGermplasmsInputs.propTypes = {
  handleChange: PropTypes.func,
  inputsState: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
}.isRequired;

export default RequiredGermplasmsInputs;
