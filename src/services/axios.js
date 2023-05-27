import axios from "axios";

const key = "Enter here your API key";
const url = "https://api-ssl.bitly.com/v4/shorten";

const headers = {
  Authorization: `Bearer ${key}`,
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: url,
  headers: headers,
});

export default api;
