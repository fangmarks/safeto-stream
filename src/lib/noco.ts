import { Api } from "nocodb-sdk";

export type Sub = {
  link: string;
  title: string;
  artist: string;
  sts_link: string;
  cover: {
    url: string;
    title: string;
    mimetype: string;
    size: number;
  }[];
  usable: string;
  shown: boolean;
};

export const api = new Api({
  baseURL: "https://noco.lio.systems",
  headers: {
    "xc-token": import.meta.env.XC_AUTH,
  },
});