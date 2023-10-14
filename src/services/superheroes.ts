import axios from "axios";
import { ISuperHero } from "../models";

const apiUrl = "http://localhost:4000/superheroes";

export const getSuperHeroes = async () => {
  const { data } = await axios.get(apiUrl);
  return data as ISuperHero[];
};

export const getSuperHeroeById = async (id: string) => {
  const { data } = await axios.get(`${apiUrl}/${id}`);
  return data as ISuperHero;
};
