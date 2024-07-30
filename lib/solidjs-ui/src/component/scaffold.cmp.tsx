import { styled } from "solid-styled-components";
import { JSX } from "solid-js/jsx-runtime";

const StyledDiv = styled("nav")`
  position: absolute;
  font-family: "Poppins";
  font-size: .9rem;
  inset: 0;
  overflow-y: scroll;
  background-color: ${(props) => props.theme?.colors.background!};
  color: ${(props) => props.theme?.colors.text!};
`;

interface ScaffoldProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const Scaffold = ({ children }: ScaffoldProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};
