import PropTypes from 'prop-types';
import styles from './GermplasmTable.module.css';

function GermplasmTable({ apiResults, attributes }) {
  return (
    <div className={ `text-nowrap ${styles['table-wrapper']}` }>
      <table className="table table-striped">
        <thead>
          <tr>
            { attributes.map((attribute) => (
              <th scope="col" key={ `column-${attribute}` }>{ attribute }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { apiResults.map((apiResult, index) => {
            return (
              <tr key={ `row-result-${index}` }>
                {
                  Object.values(apiResult).map((result) => {
                    const column = (
                      <td key={ `column-result-${result}` }>{ result }</td>
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
  apiResults: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  attributes: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
}.isRequired;

export default GermplasmTable;
