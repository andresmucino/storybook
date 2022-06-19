import { useState } from "react";
import { MoleculeListItemButton } from "../ListItemButton/ListItemButton";

interface MoleculeDropdownProps {
  options: Array<OptionsArray>;
  onChange: (value: string) => void;
  value: string;
  title: string;
  subtitle: string;
}

interface OptionsArray {
  value: string;
}

export const MoleculeDropdown = ({
  title,
  subtitle,
  options,
  onChange,
  value,
}: MoleculeDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [filterOptions, setFilterOptions] =
    useState<Array<OptionsArray>>(options);

  const iconLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M12,6c1.93,0,3.5,1.57,3.5,3.5 c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5C8.5,7.57,10.07,6,12,6z M19,19H5v-0.23c0-0.62,0.28-1.2,0.76-1.58 C7.47,15.82,9.64,15,12,15s4.53,0.82,6.24,2.19c0.48,0.38,0.76,0.97,0.76,1.58V19z" />
      </g>
    </svg>
  );

  const iconOne = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>
  );

  const iconTwo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  );

  const check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18px"
      viewBox="0 0 24 24"
      width="18px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );

  const CONTAINER =
    "flex flex-col w-full bg-white relative h-32 w-32 justify-center";

  const OPTION_CONTAINER = `w-80 max-h-40 overflow-auto overflow-x-hidden ${
    open
      ? "block transition-all ease-in-out duration-150 h-auto"
      : "hidden max-h-0"
  } items-start justify-start absolute z-40 top-24 border rounded-lg border-gray-300 border-t-0 bg-white`;

  const OPTIONS =
    "flex flex-start text-left w-full h-10 hover:bg-gray-200 ml-0 hover:transition-opacity duration-500 cursor-pointer px-1 justify-start py-1 items-center";

  return (
    <div className={CONTAINER}>
      <MoleculeListItemButton
        title={title}
        subTitle={subtitle}
        onClick={() => {
          setOpen(true);
          onChange(value);
          if (!onclick) {
            setOpen(!open);
          }
        }}
        leftIcon={iconLeft}
        rightIcon={open ? iconOne : iconTwo}
      />
      <div className={OPTION_CONTAINER}>
        {filterOptions?.map((item, index) => (
          <button
            className={`
            ${OPTIONS} ${
              value === item.value && "bg-gray-100"
            }  outline-none focus:outline-none
            `}
            key={index}
            onClick={() => {
              onChange(item.value);
              setOpen(false);
              setFilterOptions(options);
            }}
          >
            {value === item.value && (
              <span className="flex items-center">{check}</span>
            )}
            <span className={`${value === item.value ? "pl-1" : "pl-5"}`}>
              {item.value}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
