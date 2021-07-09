import axios from "axios";

export const getItems = async (page) => {
  return axios.get(`/user?page=${page}`);
};
