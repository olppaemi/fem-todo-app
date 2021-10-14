import bgDesktopDark from "assets/bg-desktop-dark.jpg";
import bgMobileDark from "assets/bg-mobile-dark.jpg";
import bgDesktopLight from "assets/bg-desktop-light.jpg";
import bgMobileLight from "assets/bg-mobile-light.jpg";

export const lightTheme = {
  background: "hsl(236, 33%, 92%)",
  bgDesktop: `${bgDesktopLight}`,
  bgMobile: `${bgMobileLight}`,
  listBg: "hsl(0, 0%, 98%)",
  check: "hsl(233, 11%, 84%)",
  checkHover:
    "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  textHeader: "hsl(236, 33%, 92%)",
  textActive: "hsl(235, 19%, 35%)",
  textCompleted: "hsl(233, 11%, 84%)",
  textState: "hsl(236, 9%, 61%)",
  textStateHover: "hsl(235, 19%, 35%)",
  textCurrentState: "hsl(220, 98%, 61%)",
  border: "hsl(233, 11%, 84%)",
};

export const darkTheme = {
  background: "hsl(235, 21%, 11%)",
  bgDesktop: `${bgDesktopDark}`,
  bgMobile: `${bgMobileDark}`,
  listBg: "hsl(235, 24%, 19%)",
  check: "hsl(237, 14%, 26%)",
  checkHover:
    "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  textHeader: "hsl(236, 33%, 92%)",
  textActive: "hsl(234, 39%, 85%)",
  textCompleted: "hsl(233, 14%, 35%)",
  textState: "hsl(234, 11%, 52%)",
  textStateHover: "hsl(236, 33%, 92%)",
  textCurrentState: "hsl(220, 98%, 61%)",
  border: "hsl(233, 14%, 35%)",
};
