import axios from "axios";

const usersDataApi = axios.create({
  baseURL: "https://6401af82ab6b7399d0a9f625.mockapi.io/users",
});

export default usersDataApi;
