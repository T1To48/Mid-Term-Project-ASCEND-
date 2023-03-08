import axios from "axios";

const mQuotesApi = axios.create({
  baseURL: "https://6401af82ab6b7399d0a9f625.mockapi.io/mQuotes",
});

export default mQuotesApi;
