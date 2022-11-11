import React, { createContext, useState } from "react";
import { getRepositories } from "../services/RepositoriesService";

interface UserContextData {
  userName: string;
  handleUserName: (name: string) => void;
  userRepos: Array<{}>;
  handleAddFavorite: (favoriteId: string) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

type UserProviderProps = {
  children?: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>("");
  const [userRepos, setUserRepos] = useState<Array<{ id?: string }>>([]);

  async function handleUserName(name: string) {
    setUserName(name);

    const response = await getRepositories(name);

    setUserRepos(response);
  }

  function handleAddFavorite(favoriteId: string) {
    const data = userRepos.filter((repo) => repo.id !== favoriteId);

    setUserRepos(data);
  }
  return (
    <UserContext.Provider
      value={{ userName, handleUserName, userRepos, handleAddFavorite }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
