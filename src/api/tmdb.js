import axios from "axios";

const KEY = "5de7cfe50c166403acf5dd4f68334d90";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: KEY,
  },
});
