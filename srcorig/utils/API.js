import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function(query) {
    return axios.get("https://dog.ceo/api/"+query);
  }
};