import React, { createContext, useState } from "react";
import { getRepositories } from "../services/RepositoriesService";

interface PageContextData {
  pageActive: string;
  handlePageActive: (page: string) => void;
}

const PageContext = createContext<PageContextData>({} as PageContextData);

type PageProviderProps = {
  children?: React.ReactNode;
};

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [pageActive, setPageActive] = useState<string>("");

  function handlePageActive(page: string) {
    setPageActive(page);
  }

  return (
    <PageContext.Provider value={{ pageActive, handlePageActive }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
