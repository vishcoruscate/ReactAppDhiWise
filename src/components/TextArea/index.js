import React from "react";

export const TextArea = React.forwardRef(
  ({ className, name, placeholder, children, ...restProps }, ref) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} common-textarea`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {children}
      </>
    );
  }
);
