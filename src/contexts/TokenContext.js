import React, { useState } from "react";

export const TokenContext = React.createContext();

export const TokenProvider = (props) => {
  const [token, setToken] = useState(null);
  const iniciarSesion = (token) => {
    console.log("Token: ", token)
    setToken(token);
  };
  const cerrarSesion = () => {
    setToken(null);
  };
  return (
    <TokenContext.Provider
      value={{ token, setToken, iniciarSesion, cerrarSesion }}
    >
      {props.children}
    </TokenContext.Provider>
  );
}