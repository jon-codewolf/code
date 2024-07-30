import { JSX } from "solid-js/jsx-runtime";
import { css, styled, useTheme } from "solid-styled-components";

const Container = ({
  children,
  gap = "inherit",
  ...props
}: JSX.HTMLAttributes<HTMLDivElement> & {
  gap?: string;
}) => {
  return (
    <div
      {...props}
      class={css`
        display: grid;
        gap: ${gap};
        grid-template-columns: repeat(12, 1fr);
      `}
    >
      {children}
    </div>
  );
};

const Cell = ({
  children,
  span = [12, 6],
  ...props
}: JSX.HTMLAttributes<HTMLDivElement> & {
  span?: string | number[];
}) => {
  const theme = useTheme();
  const mobile = span[0]?.toString();
  const tablet = span[1]?.toString() ?? mobile;
  const desktop = span[2]?.toString() ?? tablet;
  const wide = span[3]?.toString() ?? desktop;

  return (
    <div
      {...props}
      class={css`
        grid-column: span ${mobile};

        @media (min-width: ${theme.breakpoints.mobile}) {
          grid-column: span ${tablet};
        }
        @media (min-width: ${theme.breakpoints.tablet}) {
          grid-column: span ${desktop};
        }
        @media (min-width: ${theme.breakpoints.desktop}) {
          grid-column: span ${wide};
        }
      `}
    >
      {children}
    </div>
  );
};

export const Grid = {
  Container,
  Cell,
};

// @media (min-width: ${theme.breakpoints.mobile}) {
//   grid-column: span ${mobile};
// }
// @media (min-width: ${theme.breakpoints.tablet}) {
//   grid-column: span ${tablet};
// }
// @media (min-width: ${theme.breakpoints.desktop}) {
//   grid-column: span ${desktop};
// }
