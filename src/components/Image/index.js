import React from "react";

export const Image = ({ className, src, alt = "testImg", ...restProps }) => {
  return (
    <img
      className={`${className} common-image`}
      src={require(`./../../assets/images/${src}`).default}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
