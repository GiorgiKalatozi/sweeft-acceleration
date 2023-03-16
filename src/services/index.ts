import axios from "axios";

export const api = axios.create({
  baseURL: "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com",
});

export const getUsersPage = async (page = 1, options = {}) => {
  const response = await api.get(`/user?page=${page}&size=20`, options);
  return response.data;
};

export const BASE_URL =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";
