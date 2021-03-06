import React from "react";

export const Text = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-text`} {...restProps}>
      {children}
    </div>
  );
};
