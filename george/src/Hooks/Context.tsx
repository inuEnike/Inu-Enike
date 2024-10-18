import React, { createContext, ReactNode, useContext } from "react";

interface IContext {
  open: boolean;
  setOpen: (value: boolean) => void;
  handleNav: () => void;
  handleCloseNav: () => void;
}

export const AppContext = createContext<IContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  const handleCloseNav = () => {
    setOpen(false);
  };

  return (
    <AppContext.Provider value={{ handleNav, open, setOpen, handleCloseNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
