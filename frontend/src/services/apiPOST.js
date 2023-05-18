import axios from 'axios';

const apiPOST = async (data) => {
  try {
    const response = await axios.post('http://localhost:8080/api/germplasm', data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default apiPOST;
