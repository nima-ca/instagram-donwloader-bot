import { AxiosRequestConfig } from "axios";
import api from "./api";
import { apiResponse } from "./types";

export const downloaderFn = async (url: string) => {
  const requestOptions: AxiosRequestConfig = {
    params: { url },
    headers: {
      "X-RapidAPI-Key": process.env.API_SECRET_KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  const response = await api.get<apiResponse>("", requestOptions);
  return response.data;
};
