import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://freelance-hub-server-3wqcd4aly-monoare-hossains-projects.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
