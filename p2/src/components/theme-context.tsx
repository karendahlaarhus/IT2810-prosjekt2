import { isWhiteSpaceLike } from "typescript";

import React from "react";

export const themes = {
  dark: {
    /*color: "white",*/
    backgroundColor: "black",
  },
  light: {
    /*color: "black",*/
    backgroundColor: "",
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
