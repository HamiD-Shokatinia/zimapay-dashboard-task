import React from "react";

const variantClasses = {
  h1: "font-black sm:text-[45px] md:text-[51px] text-[59px]",
  h2: "font-extrabold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "text-[20px]",
  h5: "font-normal sm:text-[1px] text-[2px]",
  h6: "font-semibold text-[18px]",
  body1: "font-normal text-[17px]",
  body2: "text-[16px]",
  body3: "font-normal text-[15px]",
  body4: "text-[14px]",
  body5: "text-[12px]",
  body6: "font-bold text-[11px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
