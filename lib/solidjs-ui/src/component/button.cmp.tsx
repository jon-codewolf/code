import { JSX } from "solid-js";
import { styled } from "solid-styled-components";

const StyledButton = styled("button")`
  background-color: ${(props) => props.theme?.colors.background};
  color: ${(props) => props.theme?.colors.text};
`;

export const Button = ({ children }: JSX.HTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton>{children}</StyledButton>;
};
