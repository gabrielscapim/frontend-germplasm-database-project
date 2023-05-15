/* eslint-disable max-len */
import { useContext } from 'react';
import styles from './GermplasmTable.module.css';
import { GlobalContext } from '../context/GlobalContext';

function GermplasmTable() {
  const global = useContext(GlobalContext);
  const { apiResults, attributes } = global;

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
                    // const column = apiResultIndex === 0
                    //   ? <th scope="row">{ result }</th>
                    //   : <td key={ `column-result-${result}` }>{ result }</td>;
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

export default GermplasmTable;
