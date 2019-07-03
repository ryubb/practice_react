import axios from "axios";

const client = axios.create({
  baseURL: "http://api.stg-labbase.site",
  timeout: 5000,
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: true,
  auth: {
    username: "labbase",
    password: "7e4930ecb9"
  },
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

export default client;
