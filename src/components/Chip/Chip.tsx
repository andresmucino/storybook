import React from "react";

interface ChipProperties {
  label: string;
  variant: string;
  onClick?(): void;
  disabled?: boolean;
  iconPrimary?: React.ReactNode;
  iconSecondary?: React.ReactNode;
  onClickIcon?(): void;
}

export const ButtonChip: React.FC<ChipProperties> = ({
  label,
  variant,
  onClick,
  disabled,
  iconPrimary,
  iconSecondary,
  onClickIcon,
}: ChipProperties) => {
  const BASE_CHIP = `inline-flex rounded outline-none shadow px-1 py-1 text-base leading-6 border border-2 bg-blue
    ${iconPrimary} ${iconSecondary} focus:outline-none
    `;
  const CONTAINED_BUTTON = `${BASE_CHIP}
    ${
      disabled
        ? "bg-gray-600 opacity-50 text-black"
        : "bg-purple  text-white active:bg-purple-dark"
    }`;
  const OUTLINED_BUTTON = `${BASE_CHIP}
    ${
      disabled
        ? "border border-gray-600 opacity-50 text-black"
        : "border border-purple text-purple active:bg-purple active:bg-opacity-20"
    }`;
  const ICON_PRIMARY = " pr-1.5";
  const ICON_SECONDARY =
    " pl-1.5 focus:outline-none opacity-50 hover:opacity-100 outline-none focus:outline-none";

  const variants = {
    contained: `${CONTAINED_BUTTON}`,
    outlined: `${OUTLINED_BUTTON}`,
  };

  return (
    <button
      onClick={onClick}
      className={variants[variant as keyof typeof variants]}
      disabled={disabled}
    >
      <div className={ICON_PRIMARY}>{iconPrimary}</div>
      <p className={"pt-0.5"}>{label}</p>
      <button
        className={ICON_SECONDARY}
        onClick={(event) => {
          event.stopPropagation();
          onClickIcon && onClickIcon();
        }}
      >
        {iconSecondary}
      </button>
    </button>
  );
};
