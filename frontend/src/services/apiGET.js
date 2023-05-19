const apiGET = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/germplasm');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default apiGET;
