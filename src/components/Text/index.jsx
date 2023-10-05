import React from "react";

const sizeClasses = {
  txtOpenSansRomanRegular15Bluegray500: "font-normal font-opensans",
  txtOpenSansRomanSemiBold22: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold20: "font-opensans font-semibold",
  txtOpenSansBold24: "font-bold font-opensans",
  txtOpenSansRomanRegular14Gray900: "font-normal font-opensans",
  txtRubikMedium165Indigo900: "font-medium font-rubik",
  txtRubikMedium145: "font-medium font-rubik",
  txtRubikLight165: "font-light font-rubik",
  txtOpenSansRomanBold36: "font-bold font-opensans",
  txtOpenSansRomanSemiBold12DeeporangeA700: "font-opensans font-semibold",
  txtRubikLight125: "font-light font-rubik",
  txtOpenSansRomanRegular14Bluegray90001: "font-normal font-opensans",
  txtOpenSansRomanRegular20: "font-normal font-opensans",
  txtOpenSansRomanBold18: "font-bold font-opensans",
  txtRubikMedium165: "font-medium font-rubik",
  txtOpenSansRomanSemiBold20Bluegray90001: "font-opensans font-semibold",
  txtRubikMedium14: "font-medium font-rubik",
  txtOpenSansRomanSemiBold185: "font-opensans font-semibold",
  txtOpenSansRomanRegular16Bluegray90001: "font-normal font-opensans",
  txtOpenSansRomanSemiBold18: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold17: "font-opensans font-semibold",
  txtOpenSansRomanRegular125: "font-normal font-opensans",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtOpenSansRomanRegular15: "font-normal font-opensans",
  txtOpenSansRomanBold36Indigo900: "font-bold font-opensans",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtOpenSansRomanRegular18: "font-normal font-opensans",
  txtOpenSansRomanRegular15Indigo900: "font-normal font-opensans",
  txtOpenSansRomanSemiBold14Bluegray500: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtOpenSansRomanRegular12: "font-normal font-opensans",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtOpenSansRomanRegular14Bluegray500: "font-normal font-opensans",
  txtOpenSansRomanRegular13: "font-normal font-opensans",
  txtRubikMedium155: "font-medium font-rubik",
  txtOpenSansRomanSemiBold155: "font-opensans font-semibold",
  txtOpenSansRomanBold165: "font-bold font-opensans",
  txtOpenSansRomanBold46: "font-bold font-opensans",
  txtOpenSansRomanBold66: "font-bold font-opensans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
