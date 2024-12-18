import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext<any>(null);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({});

  const toggleMenu = (id: string) => {
    setOpenMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <MenuContext.Provider value={{ openMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
