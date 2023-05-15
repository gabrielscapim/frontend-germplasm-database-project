// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useContext } from 'react';
import styles from './GermplasmTable.module.css';
import { GlobalContext } from '../context/GlobalContext';

function GermplasmTable() {
  // const [apiResults, setApiResults] = useState([]);
  // const fetchApi = async () => {
  //   const response = await fetch('http://localhost:8080/api/germplasm');
  //   const data = await response.json();
  //   return data;
  // };

  // useEffect(() => {
  //   fetchApi().then((response) => {
  //     setApiResults(Object.keys(response[0]));
  //   });
  // }, []);

  // console.log(apiResults);

  // axios.post('http://localhost:8080/api/employees', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone',
  // })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const global = useContext(GlobalContext);
  console.log(global);

  return (
    <div className={ styles['table-wrapper'] }>
      <table className="table">
        <thead>
          <tr>
            {/* { apiResults.map((result, index) => (
              <th scope="col" key={ index }>{ result }</th>
            )) } */}
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>linhagem1</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
            <td>9</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>linhagem2</td>
            <td>5</td>
            <td>2</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GermplasmTable;
