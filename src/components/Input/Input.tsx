import React from "react";
import { Icons } from "../Icons/Icons";

interface InputProperties {
  name?: string;
  type?: string;
  min?: string | number;
  max?: string | number;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  label?: string;
  readOnly?: boolean;
  helperText?: string;
  icon: string;
  iconName: string;
  iconPosition?: string;
  iconColor?: string;
  labelColor?: string;
  showLabel?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onClickIcon?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?(): React.FocusEventHandler<HTMLInputElement>;
  maxLength?: number;
  minLength?: number;
}

export const iconPosition = {
  left: "order-first",
  rigth: "order-last",
};

export const color = {
  blue: 'text-blue-500',
  black: 'text-black',
  red: 'text-red-600'
}

export const labelColor = {
  blue: 'text-blue-500',
  black: 'text-black',
  red: 'text-red-600'
}

export const Inputs: React.FC<InputProperties> = ({
  name,
  type,
  min,
  max,
  onInput,
  value,
  onChange,
  placeholder,
  error,
  required,
  readOnly,
  helperText,
  icon,
  iconPosition,
  iconColor,
  label,
  labelColor,
  showLabel,
  onFocus,
  onClickIcon,
  onBlur,
  minLength,
  maxLength,
  iconName,
}) => {
  /** style clases */
  const CONTAINER_INPUT = `flex flex-row w-96 border py-3.5 justify-center p-1 min-w-96 relative rounded ${
    error ? "border-red-600" : readOnly ? "border-gray-300" : "border-gray-500"
  }`;

  const INPUT = `h-full w-full border-0 text-lg focus:ring-transparent outline-none focus:outline-none resize-none ${
    readOnly ? "text-gray-400" : "text-black"
  }`;

  const TEXT_HELPER = `text-xs mt-1 ml-3 ${
    error ? "text-red" : "text-gray-500"
  } text-left self-start`;

  const CONTAINER_ICON = `flex justify-center justify-items-center w-8 h-8 p-1 rounded-full active:bg-gray-300 ${iconPosition}`;

  const TEXT_LABEL = `block bg-white text-xs absolute pl-1 pr-2  -top-1.5 left-2 ${
    error ? "text-red" : readOnly ? "text-gray-500" : ''
  } ${labelColor} w-auto `;

  return (
    <div className={CONTAINER_INPUT}>
      {showLabel && (
        <label className={TEXT_LABEL}>
          {` ${label}${required ? " *" : ""}`}{" "}
        </label>
      )}
      {icon !== "none" && (
        <button onClick={onClickIcon} className={CONTAINER_ICON}>
          <Icons
            name={iconName}
            size="h-7 w-7"
            color={readOnly ? "text-black" : iconColor}
          />
        </button>
      )}
      <input
        name={name}
        value={value}
        type={type}
        min={min}
        max={max}
        placeholder={placeholder}
        className={INPUT}
        readOnly={readOnly}
        maxLength={maxLength}
        minLength={minLength}
        onInput={onInput}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {helperText && <p className={TEXT_HELPER}>{helperText}</p>}
    </div>
  );
};
