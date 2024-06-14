import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const searchUrl = "https://studies.cs.helsinki.fi/restcountries/api/name";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const get = (name) => {
  const request = axios.get(`${searchUrl}/${name}`);
  return request.then((response) => response.data);
};

export default { get, getAll };
