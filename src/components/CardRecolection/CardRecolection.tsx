import React from "react";

interface AtomCardRecolectionProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const AtomCardRecolection = ({
  children,
  disabled,
  onClick,
}: AtomCardRecolectionProps) => {
  const [check, setCheck] = React.useState(false);
  const CARD_CONTAINER = ` flex  flex-col rounded-lg shadow-md sm:w-48 ${
    !disabled ? "hover:cursor-pointer" : "cursor-default"
  } overflow-hidden px-6 py-4 focus:outline-none border border-transparent  text-left ${
    check && !disabled ? "border-blue" : "border-transparent"
  } `;

  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        !disabled && onClick && onClick();
        !disabled && setCheck(!check);
      }}
      className={CARD_CONTAINER}
    >
      {children}
    </button>
  );
};
