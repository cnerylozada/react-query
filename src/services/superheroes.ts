import axios from "axios";
import { ISuperHeroe } from "../models";

export const getSuperHeroes = async () => {
  const { data } = await axios.get("http://localhost:4000/superheroes");
  return data as ISuperHeroe[];
};
