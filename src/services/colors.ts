import axios from "axios";
import { apiURL } from "./config";

export interface IColor {
  id: number;
  label: string;
}

export const getAllColors = async () => {
  const { data } = await axios.get(`${apiURL}/colors`);
  return data as IColor[];
};

export const getColorById = async (id: number) => {
  const { data } = await axios.get(`${apiURL}/colors/${id}`);
  return data as IColor;
};
