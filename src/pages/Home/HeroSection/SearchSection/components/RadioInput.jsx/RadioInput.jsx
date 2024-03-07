import React from "react";

const RadioInput = ({
  checked,
  id,
  name,
  label,
  className,
  labelClass,
  onChange,
}) => {
  return (
    <div
      className={`w-fit flex gap-2 items-center cursor-pointer text-black  px-4 py-2 rounded-[100px] bg-green-100 ${className}`}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        className="scale-125 cursor-pointer"
        name={name}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`font-medium text-base cursor-pointer ${labelClass}`}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
