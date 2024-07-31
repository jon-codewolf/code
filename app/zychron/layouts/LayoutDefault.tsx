import { JSX } from "solid-js/jsx-runtime";
import {
  Scaffold,
  theme as defaultTheme,
  ThemeProvider,
  Theme,
  AppNavBasic,
} from "@jon-codewolf/solidjs-ui";
import "./style.css";

const theme: Theme = {
  ...defaultTheme,
  colors: {
    background: "#202024",
    primary: "#1b6f9c",
    text: "#c9c9c9",
  },
};

import { Link } from "../components/Link";

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <ThemeProvider theme={theme}>
      <AppNavBasic
        logo={
          <div
            style={{
              "font-size": "2rem",
            }}
          >
            🍅
          </div>
        }
        menu={
          <>
            <Link href="/#" disabled>Dashboard</Link>
            <Link href="/">Time tracker</Link>
            <Link href="/#" disabled>Projects</Link>
          </>
        }
        background="primary"
        alpha={0.9}
      ></AppNavBasic>
      <Scaffold>{props.children}</Scaffold>
    </ThemeProvider>
  );
}
