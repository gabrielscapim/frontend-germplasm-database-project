/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styles from './GermplasmTable.module.css';

function GermplasmTable({
  germplasms,
  attributes,
  tableContainerStyles,
  deleteGermplasm,
}) {
  const columns = ['', ...attributes];
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
                <td>
                  <button
                    style={ {
                      marginRight: '1%',
                      padding: '0px',
                      border: 'none',
                      background: 'none',
                    } }
                    onClick={ () => deleteGermplasm(apiResult.id) }
                  >
                    <i className="bi bi-trash"> </i>
                  </button>
                </td>
                {
                  Object.values(apiResult).map((result, apiResultIndex) => {
                    return typeof result === 'boolean'
                      ? (
                        <td
                          key={ `column-result-${result}-${index}-${apiResultIndex}` }
                        >
                          { result === false ? 'não' : 'sim' }
                        </td>
                      )
                      : (
                        <td
                          key={ `column-result-${result}-${index}-${apiResultIndex}` }
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
}.isRequired;

export default GermplasmTable;
