import React from "react";
import Select from "react-select";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

export const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className,
      options = selectOptions,
      isSearchable = true,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} common-select`}
          placeholder={placeholder}
          isSearchable={isSearchable}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={{
            control: (provided, state) => ({
              ...provided,
              boxShadow: "none",
              border: "none",
            }),
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }
);
