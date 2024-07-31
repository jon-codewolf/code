import {
  css,
  type DefaultTheme,
  styled,
  useTheme,
} from "solid-styled-components";
import { rgba, readableColor } from "polished";
import { type Theme } from "../../theme";
import { JSX } from "solid-js/jsx-runtime";

type StypeProps = {
  background?: keyof Theme["colors"];
  alpha?: number;
};

interface AppNavBasicProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    StypeProps {
  logo: JSX.Element;
  menu: JSX.Element;
}

export const AppNavBasic = ({
  logo,
  background,
  menu,
  alpha,
  children,
}: AppNavBasicProps) => {
  const theme: Theme = useTheme();
  const computedBackground = rgba(
    theme.colors?.[background ?? "background"],
    alpha
  );

  return (
    <div
      class={css`
        display: flex;
        align-items: center;
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: ${computedBackground};
        padding: 0.2rem;
        .menu {
          margin: 0 auto;
          display: flex;
          gap: 1rem;
          color: ${rgba(readableColor(computedBackground), 0.8)};
        .disabled {
          color: ${rgba(readableColor(computedBackground), 0.5)};
        }
        .active {
          color: ${rgba(readableColor(computedBackground), 1)};
        }
        }
      `}
    >
      {logo ?? <div />}
      <div class="menu">{menu}</div>
      {children}
    </div>
  );
};
