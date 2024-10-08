import { StyleSheet } from "react-native";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
};



const envoirment = process.env.EXPO_PUBLIC_ENVOIRMENT;

const theme = envoirment === "dev" ? "main" : process.env.EXPO_PUBLIC_THEME;

export const themeShadow = StyleSheet.create({
  shadow: {
    shadowColor: theme === "main" ? "#F229BD" : "#8097A6",
    shadowOffset: {
      width: -10,
      height: 16,
    },
    shadowOpacity: 1.25,
    shadowRadius: 18.46,
    elevation: 10,
  },
});

export const mainTheme = {
  tokens: {
    primary: "#008172",
    secondary: "#5CC6BA",
    error: "#FF0000",
    success: "#00FF00",
    info: "#0000FF",
  },
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#F0F0F0",
  },
  images: {
    login: "",
    background: "",
  },
  shadows: themeShadow.shadow,
};
export const blueTheme = {
  tokens: {
    primary: "#008172",
    secondary: "#5CC6BA",
    error: "#FF0000",
    success: "#00FF00",
    info: "#0000FF",
  },
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#F0F0F0",
  },
  images: {
    login: "",
    background: "",
  },
  shadows: themeShadow.shadow,
};

export type themeProps = typeof mainTheme;
export type themeType = "main" | "blue" | "remote";

export const handleTheme = (theme: themeType) => {
  return theme === "main" ? mainTheme : blueTheme;
};
export const getTheme = () => {
  return handleTheme(theme as themeType);
};
