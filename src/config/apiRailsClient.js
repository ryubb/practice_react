import axios from "axios";

const railsClient = axios.create({
  baseURL: "https://rails-api-ryubb.herokuapp.com",
  timeout: 5000,
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

export default railsClient;
