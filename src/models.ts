export interface ISuperHero {
  id: number;
  name: string;
  alterEgo: string;
}

export interface IUser {
  id: string;
  channelId: string;
}

export interface IChannel {
  id: string;
  courses: string[];
}
