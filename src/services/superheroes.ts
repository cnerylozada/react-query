import axios from "axios";
import { ISuperHeroe } from "../models";

const apiUrl = "http://localhost:4000/superheroes";

export const getSuperHeroes = async () => {
  const { data } = await axios.get(apiUrl);
  return data as ISuperHeroe[];
};

export const getSuperHeroeById = async (id: string) => {
  const { data } = await axios.get(`${apiUrl}/${id}`);
  return data as ISuperHeroe;
};
