import axios from "axios";
import { handleResponse } from "../../utils";

const baseURL = process.env.REACT_APP_API;

let instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});

const getSingle = async (resource, id) => {
  return instance
    .get(`${baseURL + resource}${id}`)
    .then((res) => handleResponse(res, resource));
};

export const apiProvider = {
  getSingle,
};
