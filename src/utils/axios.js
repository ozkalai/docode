import axios from "axios";

export const setAxiosBaseUrl = () => {
  axios.defaults.baseURL = "http://talent.docode.com.tr";
};
