export interface IService {
  title: string;
  description: string;
  media: string;
  video?: string;
}

export interface IUser {
  user: string;
  img: string;
}

export interface IAccount {
  email: string;
  pass: string;
  users?: IUser[];
}

export enum type {
  movie = 'movie/',
  tv = 'tv/',
}

export enum listedBy {
  popular = 'popular',
  top_rated = 'top_rated',
  latest = 'latest',
  upcoming = 'upcoming',
  now_playing = 'now_playing',
  on_the_air='on_the_air'
}
