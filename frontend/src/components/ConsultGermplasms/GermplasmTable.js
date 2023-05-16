import PropTypes from 'prop-types';
import styles from './GermplasmTable.module.css';

function GermplasmTable({ germplasms, attributes }) {
  return (
    <div className={ `text-nowrap ${styles['table-wrapper']}` }>
      <table className="table table-striped">
        <thead>
          <tr>
            { attributes.map((attribute, index) => (
              <th scope="col" key={ `column-${index}` }>{ attribute }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { germplasms.map((apiResult, index) => {
            return (
              <tr key={ `row-result-${index}` }>
                {
                  Object.values(apiResult).map((result, apiResultIndex) => {
                    const column = (
                      <td
                        key={ `column-result-${result}-${index}-${apiResultIndex}` }
                      >
                        { result }
                      </td>
                    );
                    return column;
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
}.isRequired;

export default GermplasmTable;
