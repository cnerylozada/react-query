import axios from "axios";
import { IChannel, IUser } from "../models";

const apiUrl = "http://localhost:4000";

export const getUserByEmail = async (email: string) => {
  const { data } = await axios.get(`${apiUrl}/users/${email}`);
  return data as IUser;
};

export const getChannelById = async (id: string) => {
  const { data } = await axios.get(`${apiUrl}/channels/${id}`);
  return data as IChannel;
};
