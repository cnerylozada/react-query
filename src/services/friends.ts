import axios from "axios";
import { apiURL } from "./config";

export interface IFriend {
  id: number;
  name: string;
}

export const getFriendById = async (id: number) => {
  const { data } = await axios.get(`${apiURL}/friends/${id}`);
  return data as IFriend;
};
