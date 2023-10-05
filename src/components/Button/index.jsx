import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded" };
const variants = {
  fill: {
    purple_900_26: "bg-purple-900_26 shadow-bs1 text-indigo-900",
    white_A700_33: "bg-white-A700_33 text-blue_gray-900",
    indigo_900: "bg-indigo-900 shadow-bs text-white-A700",
    white_A700: "bg-white-A700 text-indigo-900",
    indigo_900_1e: "bg-indigo-900_1e",
    blue_gray_50: "bg-blue_gray-50 text-blue_gray-900_01",
    blue_gray_900_33_01: "bg-blue_gray-900_33_01",
  },
};
const sizes = { xs: "p-1.5", sm: "p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "blue_gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "purple_900_26",
    "white_A700_33",
    "indigo_900",
    "white_A700",
    "indigo_900_1e",
    "blue_gray_50",
    "blue_gray_900_33_01",
  ]),
};

export { Button };
