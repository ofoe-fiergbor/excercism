import axios from "axios";
import { BASE_URL } from "../../constants/keys";
import Response from "./Response";

const Request = (() => {
  const getHeaders = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return headers;
  };

  const request = (method, resource, body) => {
    const config = {
      baseURL:BASE_URL,
      url: resource,
      headers: getHeaders(),
      withCredentials: false,
      method: method.toLowerCase(),
    };
    if (method === "GET" && body) config.params = body;
    else if (body) config.data = body;
    return axios(Object.freeze(config));
  };

  return {
    BASE_URL,
    get: async (resource, params) => Response(request("GET", resource, params)),
  };
})();

export default Request;
