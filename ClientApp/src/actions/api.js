import axios from "axios";

const baseUrl = "https://localhost:7219/api/";

export default {
  recipes(url = baseUrl + "recipes") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url.newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
};
