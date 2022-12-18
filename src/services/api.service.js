import { ApiCore } from "./core";

const base = "";

export const apiLibrary = (url) =>
  new ApiCore({
    getSingle: true,
    url: base + url,
  });
