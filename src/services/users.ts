import axios from "axios";
import { IChannel, IUser } from "../models";
import { apiURL } from "./config";

export const getUserByEmail = async (email: string) => {
  const { data } = await axios.get(`${apiURL}/users/${email}`);
  return data as IUser;
};

export const getChannelById = async (id: string) => {
  const { data } = await axios.get(`${apiURL}/channels/${id}`);
  return data as IChannel;
};
