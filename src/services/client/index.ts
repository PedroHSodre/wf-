import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../config/constants";

const instance = axios.create({
  baseURL: BASE_URL,
});

const client = async (options: {
  url: string;
  method: string;
  data?: Object;
}) => {
  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = (error: AxiosResponse) => {
    return { error: true };
  };

  return instance(options).then(onSuccess).catch(onError);
};

export default client;
