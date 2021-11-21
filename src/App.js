import React, { useState, useEffect } from "react";
import HomeScreen from "./Components/HomeScreen";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

const GlobalStyled = createGlobalStyle`
body{
  background-color: ${({ theme }) =>
    theme.myTheme === "dark" ? "#212429" : "white"};
  color: ${({ theme }) => (theme.myTheme === "dark" ? "#edfafe" : "#091e42")};
}
`;

const App = () => {
  const storeThemeChoice = () => {
    const saveTheme = storage.getItem("toggle");
    return saveTheme ? JSON.parse(saveTheme) : { myTheme: "light" };
  };

  const [toggle, setToggle] = useState(storeThemeChoice);
  useEffect(() => {
    storage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  return (
    <ThemeProvider theme={toggle}>
      <GlobalStyled />
      <HomeScreen
        bclr={() => {
          setToggle(
            toggle.myTheme === "dark" ? { myTheme: "y" } : { myTheme: "dark" }
          );
        }}
      />
    </ThemeProvider>
  );
};

export default App;
