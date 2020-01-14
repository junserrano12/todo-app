import React, { createContext, useContext, useState, useMemo } from 'react';

export default function createStore() {
  const context = createContext();

  const Provider = ({ intialValue = {}, children }) => {
    const [state, setState] = useState({ ...intialValue });
    const contextValue = useMemo(() => [state, setState], [state]);
    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };

  const useStore = () => useContext(context);

  return { Provider, useStore };
}
