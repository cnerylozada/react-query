import axios from "axios";
import { ISuperHero } from "../models";
import { apiURL } from "./config";

export const getSuperHeroes = async () => {
  const { data } = await axios.get(`${apiURL}/superheroes`);
  return data as ISuperHero[];
};

export const getSuperHeroeById = async (id: string) => {
  const { data } = await axios.get(`${apiURL}/superheroes/${id}`);
  return data as ISuperHero;
};
