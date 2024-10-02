import { Api } from "nocodb-sdk";

export type Sub = {
  link: string;
  title: string;
  artist: string;
  sts_link: string;
  cover: {
    signedPath: string;
  }[];
  usable: string;
  shown: boolean;
};

export const api = new Api({
  baseURL: "https://nocodb-ewkss0gkkockggc4g0wgko80.implant.cam",
  headers: {
    "xc-token": import.meta.env.XC_AUTH,
  },
});