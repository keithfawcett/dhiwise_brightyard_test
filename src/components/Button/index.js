import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder25: "rounded-radius25",
  CircleBorder20: "rounded-radius20",
  RoundedBorder8: "rounded-radius8",
  icbCircleBorder25: "rounded-radius25",
  icbCircleBorder40: "rounded-radius40",
  icbRoundedBorder4: "rounded-radius4",
  icbRoundedBorder10: "rounded-radius10",
  icbCircleBorder16: "rounded-radius16",
  icbCircleBorder20: "rounded-radius20",
};
const variants = {
  FillIndigoA400: "bg-indigo_A400 text-white_A700",
  OutlineBluegray50: "bg-white_A700 border border-bluegray_50 border-solid",
  FillDeeppurple50: "bg-deep_purple_50 text-indigo_A400",
  FillWhiteA700: "bg-white_A700 text-indigo_A400",
  OutlineBluegray50_1:
    "bg-gray_50 border border-bluegray_50 border-solid text-bluegray_400",
  OutlineBluegray50_2:
    "bg-gray_100 border border-bluegray_50 border-solid text-bluegray_400",
  icbOutlineBluegray50: "bg-white_A700 border border-bluegray_50 border-solid",
  icbGradientTeal3007fWhiteA70000: "bg-gradient2 ",
  icbGradientRedA1007fWhiteA70000: "bg-gradient ",
  icbFillIndigoA400: "bg-indigo_A400",
  icbFillBluegray900: "bg-bluegray_900",
  icbGradientOrange3003fOrange30000: "bg-gradient1 ",
};
const sizes = {
  sm: "md:p-[10px] p-[14px] sm:p-[7px]",
  md: "md:p-[13px] p-[18px] sm:px-[15px] sm:py-[10px]",
  smIcn: "p-[3px]",
  mdIcn: "sm:p-[3px] md:p-[4px] p-[6px]",
  lgIcn: "p-[11px] sm:p-[6px] md:p-[7px]",
  xlIcn: "md:p-[10px] p-[15px] sm:p-[8px]",
  "2xlIcn": "md:p-[13px] p-[18px] sm:px-[15px] sm:py-[10px]",
  "3xlIcn": "md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf([
    "CircleBorder25",
    "CircleBorder20",
    "RoundedBorder8",
    "icbCircleBorder25",
    "icbCircleBorder40",
    "icbRoundedBorder4",
    "icbRoundedBorder10",
    "icbCircleBorder16",
    "icbCircleBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillIndigoA400",
    "OutlineBluegray50",
    "FillDeeppurple50",
    "FillWhiteA700",
    "OutlineBluegray50_1",
    "OutlineBluegray50_2",
    "icbOutlineBluegray50",
    "icbGradientTeal3007fWhiteA70000",
    "icbGradientRedA1007fWhiteA70000",
    "icbFillIndigoA400",
    "icbFillBluegray900",
    "icbGradientOrange3003fOrange30000",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "xlIcn" };

export { Button };
