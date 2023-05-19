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
                    <td>
                      <button
                        style={ {
                          marginRight: '10%',
                          padding: '0px',
                          border: 'none',
                          background: 'none',
                        } }
                        onClick={ () => editGermplasm(apiResult.id) }
                      >
                        <i className="bi bi-pencil"> </i>
                      </button>

                      <button
                        style={ {
                          marginRight: '10%',
                          padding: '0px',
                          border: 'none',
                          background: 'none',
                        } }
                        onClick={ () => deleteGermplasm(apiResult.id) }
                      >
                        <i className="bi bi-trash"> </i>
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
  editGermplasm: PropTypes.func,
}.isRequired;

export default GermplasmTable;
