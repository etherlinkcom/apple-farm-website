import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const customTheme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("lightBackground", "darkBackground")(props),
      },
    }),
  },
  colors: {
    lightBackground: "#f0e7db", // Light mode background color
    darkBackground: "#202023", // Dark mode background color
  },
});

export default customTheme;