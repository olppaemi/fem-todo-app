import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    bgDesktop: string;
    bgMobile: string;
    listBg: string;
    check: string;
    checkHover: string;
    textHeader: string;
    textActive: string;
    textCompleted: string;
    textState: string;
    textStateHover: string;
    textCurrentState: string;
    border: string;
  }
}
