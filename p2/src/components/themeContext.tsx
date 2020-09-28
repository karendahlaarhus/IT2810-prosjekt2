import React from "react";

/* style theme that is used to toggle between pink and lightblue background
on svgs */
export const themes = {
  dark: {
    backgroundColor: "pink",
  },
  light: {
    backgroundColor: "lightblue",
  },
};

/* style theme used to toggle between default color and gray-ish color */
export const details = {
  normal: {
    fill: "",
  },
  color: {
    fill: "#808080",
  },
};

/* style theme used to toggle between orange color and default color */
export const orangeColor = {
  on: {
    fill: "orange",
  },
  off: {
    fill: "",
  },
};

/*  create context for each "theme" */
export const ThemeContext = React.createContext(themes.dark);
export const DetailContext = React.createContext(details.color);
export const OrangeContext = React.createContext(orangeColor.on);
