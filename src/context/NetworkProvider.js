import React, { createContext, useEffect, useState } from "react";

export const NetworkContext = createContext();
const NetworkProvider = ({ children }) => {
  const [networks, setNetworks] = useState([]);
  const [selectedNet, setSelectedNet] = useState(' Ethereum Kovan');
  useEffect(() => {
    fetch("../network.json")
      .then((res) => res.json())
      .then((data) => {
        setNetworks(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(selectedNet);
  const networkInfo = { networks, selectedNet, setSelectedNet };
  return (
    <NetworkContext.Provider value={networkInfo}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;
