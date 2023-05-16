const fetchApi = async () => {
  const response = await fetch('http://localhost:8080/api/germplasm');
  const data = await response.json();
  return data;
};

export default fetchApi;
