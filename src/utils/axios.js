import axios from "axios";

export const setAxiosBaseUrl = () => {
  axios.defaults.baseURL =
    "https://cors-anywhere.herokuapp.com/http://talent.docode.com.tr";
};
