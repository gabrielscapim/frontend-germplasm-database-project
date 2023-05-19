/* eslint-disable max-len */
import PropTypes from 'prop-types';
import styles from './GermplasmTable.module.css';

function GermplasmTable({
  germplasms,
  attributes,
  tableContainerStyles,
  deleteGermplasm,
  editGermplasm,
}) {
  const consultGermplasmsPage = window.location.href.includes('consult');
  const columns = consultGermplasmsPage ? ['', ...attributes] : attributes;
  return (
    <div
      className={ `text-nowrap ${styles['table-wrapper']}` }
      style={ tableContainerStyles }
    >
      <table className="table table-striped">
        <thead>
          <tr>
            { columns.map((attribute, index) => (
              <th scope="col" key={ `column-${index}` }>{ attribute }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { germplasms.map((apiResult, index) => {
            return (
              <tr key={ `row-result-${index}` }>
                {
                  consultGermplasmsPage
                  && (
                    <td style={ { display: 'flex', flexDirection: 'column' } }>
                      <button
                        style={ {
                          marginRight: '10%',
                          padding: '0px',
                          border: 'none',
                          background: 'none',
                          color: '#006400',
                          fontSize: '12px',
                        } }
                        onClick={ () => editGermplasm(apiResult.id) }
                      >
                        <i
                          className="bi bi-pencil-fill"
                          style={ { backgroundColor: 'inherit', marginRight: '4px' } }
                        />
                        Editar
                      </button>

                      <button
                        style={ {
                          marginRight: '10%',
                          padding: '0px',
                          border: 'none',
                          background: 'none',
                          color: '#DC3545',
                          fontSize: '12px',
                        } }
                        onClick={ () => deleteGermplasm(apiResult.id) }
                      >
                        <i
                          className="bi bi-trash3-fill"
                          style={ { backgroundColor: 'inherit', marginRight: '4px' } }
                        />
                        Excluir
                      </button>
                    </td>
                  )
                }
                {
                  Object.values(apiResult).map((result, apiResultIndex) => {
                    return typeof result === 'boolean'
                      ? (
                        <td
                          key={ `column-result-${result}-${index}-${apiResultIndex}` }
                          style={ { textAlign: 'center', verticalAlign: 'middle' } }
                        >
                          { result === false ? 'não' : 'sim' }
                        </td>
                      )
                      : (
                        <td
                          key={ `column-result-${result}-${index}-${apiResultIndex}` }
                          style={ { textAlign: 'center', verticalAlign: 'middle' } }
                        >
                          { result }
                        </td>
                      );
                  })
                }
              </tr>
            );
          }) }
        </tbody>
      </table>
    </div>
  );
}

GermplasmTable.propTypes = {
  germplasms: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  attributes: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  tableContainerStyles: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  deleteGermplasm: PropTypes.func,
  editGermplasm: PropTypes.func,
}.isRequired;

export default GermplasmTable;
