import React from "react";
import { ButtonChip } from "../Chip/Chip";
// import { ButtonChip } from 'src/components/Chip';
// import { Icon } from 'src/components/Icons';
// import { Text } from 'src/components/Text';

interface ExpensesCardProperties {
  amount?: string;
  description?: string;
  onClick: () => void;
}

export const ExpensesCard: React.FC<ExpensesCardProperties> = ({
  amount,
  description,
  onClick,
}: ExpensesCardProperties) => {
  const CONTAINER_EXPENSES =
    "w-80 h-72 text-center justify-center space-y-7 shadow-md rounded py-6 px-14";
  const CONTAINER_ICON =
    "inline-block rounded-full pt-4 pl-0.5 shadow-lg w-16 h-16";
  return (
    <div className={CONTAINER_EXPENSES}>
      <div className={CONTAINER_ICON}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </div>
      <span>{amount}</span>
      <span>{description}</span>
      <ButtonChip
        label="Ver mis pedidos"
        // variant="outlined"
        onClick={() => onClick()}
      />
    </div>
  );
};
