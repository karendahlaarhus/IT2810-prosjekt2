import React from "react";

export const themes = {
  dark: {
    backgroundColor: "pink"
  },
  light: {
    backgroundColor: "lightblue"
  }
};

export const details = {
  normal: {
    fill: "" //endre til "" etterpå
  },
  color: {
    fill: "#808080"
  }
};

export const orangeColor = {
  on: {
    fill: "orange"
  },
  off: {
    fill: ""
  }
};

export const ThemeContext = React.createContext(themes.dark);
export const DetailContext = React.createContext(details.color);
export const OrangeContext = React.createContext(orangeColor.on);
