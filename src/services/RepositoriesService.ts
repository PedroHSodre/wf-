import client from "./client";

export const getRepositories = (userName: string) => {
  return client({
    url: `/${userName}/repos`,
    method: "GET",
  });
};
