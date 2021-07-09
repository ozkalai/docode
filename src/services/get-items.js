import axios from "axios";

export const getItems = async (page) => {
  return axios.get(`/design/all-paged?page=${page}`);
};
