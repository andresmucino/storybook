import React from "react";

interface ButtonProperties {
  size?: string;
  color?: string;
  outLined?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  onClik: () => void;
}

export const size = {
  small: "w-10 h-10",
  medium: "w-14 h-14",
  large: "w-16 h-16",
};

export const color = {
  blue: "border-blue-400 text-blue-400 active:bg-gray-200",
  red: "border-red-400 text-red-400 active:bg-gray-200",
};

export const backgroundColor = {
  blue: "bg-blue-400 text-white active:opacity-75",
  red: "bg-red-400 text-white active:opacity-75",
};

export const FloatButton: React.FC<ButtonProperties> = ({
  size,
  color,
  outLined,
  disabled,
  backgroundColor,
  onClik,
}: ButtonProperties) => {
  const BASE_BUTTON = `rounded-full absolute  ${size}`;

  const CONTAINED_BUTTON = `${BASE_BUTTON} ${
    disabled ? "bg-gray-600 opacity-50" : backgroundColor
  }`;

  const OUTLINE_BUTTON = `${BASE_BUTTON} border ${
    disabled ? "border-gray-600 disabled:opacity-50 text-gray-400" : color
  }`;

  return (
      <button
        className={outLined ? CONTAINED_BUTTON : OUTLINE_BUTTON}
        disabled={disabled}
        onClick={onClik}
      >
        <svg
          className={`${color}} ${outLined && "text-white"}`}
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 0 24 24"
          width="30px"
          stroke="currentColor"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
  );
};
