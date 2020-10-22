import '../styles/globals.css'
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  color: {
    ...theme.color,
    purple: "#682ba8"
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
