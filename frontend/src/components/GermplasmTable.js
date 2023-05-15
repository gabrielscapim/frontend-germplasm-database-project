import styles from './GermplasmTable.module.css';

function GermplasmTable() {
  return (
    <div className={ styles['table-wrapper'] }>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>MarsdfsdfsdfsddasdasdasdasdSDsfsdfsdfsdffdsk</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GermplasmTable;
