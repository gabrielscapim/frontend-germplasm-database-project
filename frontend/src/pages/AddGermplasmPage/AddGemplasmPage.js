import { useContext } from 'react';
import styles from './AddGermplasmPage.module.css';
import Select from '../../components/Common/Select';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import { tiposDeLinhagem, tiposDeMaterialGenetico } from '../../data/geneticMaterial';
import { GlobalContext } from '../../context/GlobalContext';

function AddGermplasmPage() {
  const global = useContext(GlobalContext);
  const { attributes } = global;

  const columnsToAdd = attributes.filter((attribute) => (
    attribute !== 'id' && attribute !== 'nome' && attribute !== 'tipoDeMaterialGenetico'
  ));
  const ROW_CLASS = 'add-germplasm-row';

  return (
    <section className={ styles['page-container'] }>
      <div className={ styles['add-germplasm-container'] }>
        <div className={ styles[ROW_CLASS] }>
          <Input
            id="new-germplasm-name"
            label="Nome do novo germoplasma"
            name="newGermplasmName"
            placeholder="Digite o nome do novo germoplasma"
          />
          <Select
            id="new-germplasm-genetic-material"
            label="Tipo de material génetico"
            options={ tiposDeMaterialGenetico }
            name="newGermplasmGeneticMaterial"
          />
          <Select
            id="new-germplasm-genetic-material-linhagem"
            label="Tipo de linhagem"
            options={ tiposDeLinhagem }
            name="newGermplasmGeneticMaterialLinhagem"
          />
        </div>
        <div className={ styles[ROW_CLASS] }>
          <Select
            id="new-germplasm-column-select"
            label="Coluna (atributo) a ser adicionada"
            options={ columnsToAdd }
            name="newGermplasmColumnSelect"
          />
          <Input
            type="number"
            id="new-germplasm-column-value-input"
            label="Valor da coluna (atributo) a ser adicionada"
            name="newGermplasmName"
            placeholder="Digite o valor da coluna a ser adicionada"
          />
        </div>
        <div className={ styles[ROW_CLASS] }>
          <Button
            id="button-filter"
            label="Continuar"
            disabled
            type="button"
            componentStyles={ {
              backgroundColor: '#684f92',
              border: '1px solid #684f92',
              height: '38px',
              marginBottom: '12px',
              marginTop: '12px',
            } }
          />
        </div>
      </div>
    </section>
  );
}

export default AddGermplasmPage;
