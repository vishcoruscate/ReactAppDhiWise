import React from "react";

export const CheckBox = React.forwardRef(
  (
    { className, name, checked = false, children, label = "", ...restProps },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };
    return (
      <>
        <div className={`${className} common-checkbox`}>
          <input
            ref={ref}
            type="checkbox"
            name={name}
            value={name}
            checked={value}
            onChange={handleChange}
            {...restProps}
          />
          {label}
        </div>
        {children}
      </>
    );
  }
);
