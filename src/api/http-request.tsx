import axios, {AxiosRequestConfig} from "axios";
// import { store } from "src/store";


const baseURL = 'https://prayer.herokuapp.com/';

const config: AxiosRequestConfig = {
  baseURL: baseURL
};

export const api = axios.create(config);

api.interceptors.request.use((config) => {
  // const token = store.getState().user.token;
  
  // if (token) {
  //   config.headers!.Authorization = `Bearer ${token}`;
  // }

  return config;
});