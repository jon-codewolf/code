import { JSX } from "solid-js/jsx-runtime";
import { css, styled } from "solid-styled-components";

export const Flex = ({
  children,
  gap,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement> & {
  gap: string;
}) => {
  return (
    <div
      {...props}
      class={css`
        display: flex;
        gap: ${gap};
        flex-wrap: wrap;
      `}
    >
      {children}
    </div>
  );
};
