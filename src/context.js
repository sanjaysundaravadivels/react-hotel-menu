import React, { useState, useContext, createContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,

        openSidebar,
        closeSidebar,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};
export const useGlobalCOntext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
