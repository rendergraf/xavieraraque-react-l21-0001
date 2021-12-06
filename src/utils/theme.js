import { extendTheme } from "@chakra-ui/react";
import "../sass/fonts.scss";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  },
  magenta: {
    50: '#ffe4f0',
    100: '#fdb7d0',
    200: '#f68aae',
    300: '#f05b8e',
    400: '#eb2e6e',
    500: '#d11455',
    600: '#ff005a', // '#a40d42'
    700: '#76062f',
    800: '#49021c',
    900: '#1e000a',
  },

};
const fonts = {
  heading: 'Gotham-Medium',
  body: 'Gotham-Light',
}
 
const customTheme = extendTheme({ colors, fonts });

export default customTheme;