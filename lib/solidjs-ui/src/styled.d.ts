// import original module declarations
import "solid-styled-components";

// and extend them!
declare module "solid-styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      background: string;
    };
    breakpoints: {
      mobile: string,
      tablet: string,
      desktop: sting,
    },
  }
}
