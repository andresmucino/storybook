import React from "react";
import { Icons } from "../Icons/Icons";
import { paths } from "../Icons/Paths";

interface MoleculeComboBoxProps {
  onChange: (value: string) => void;
  options: Array<OptionsProps>;
  value: string;
}

interface OptionsProps {
  value: string;
}

export const MoleculeComboBox: React.FC<MoleculeComboBoxProps> = ({
  onChange,
  options,
  value,
}) => {
  const [open, setOpen] = React.useState(false);
  const [filterOptions, setFilterOptions] =
    React.useState<Array<OptionsProps>>(options);
  const [selected, setSelected] = React.useState(false);

  const CONTAINED_COMBOBOX = `border w-96 h-8 p-1 flex relative`;

  const INPUT_COMBOBOX = `resize-none outline-none w-full h-full focus:ring-transparent text-base `;

  const OPTION_CONTAINER = `w-96 max-h-40 overflow-auto overflow-x-hidden ${
    open
      ? "block transition-all ease-in-out duration-150 h-auto"
      : "hidden max-h-0"
  } items-start justify-start absolute z-40 top-10 border rounded-lg border-gray-300 bg-white`;

  const OPTIONS =
    "flex flex-start text-left w-full h-10 hover:bg-gray-200 ml-0 hover:transition-opacity duration-500 cursor-pointer px-1 justify-start py-1 items-center";

  const onChangeInput = (value: string) => {
    onChange(value);
    if (value !== "" && !selected) {
      const result = options.filter((object) => {
        const autoCompleteResult = object.value.toLowerCase();
        const keyword = value.toLowerCase();

        return autoCompleteResult.includes(keyword);
      });
      setOpen(true);
      setFilterOptions(result);
    } else {
      setOpen(false);
      setSelected(false);
      setFilterOptions(options);
    }
  };

  React.useEffect(() => {
    if (!open) return;

    setSelected(false);
  }, [open]);

  return (
    <div className={CONTAINED_COMBOBOX}>
      <input
        type="text"
        className={INPUT_COMBOBOX}
        onChange={(e) => onChangeInput(e.target.value)}
        value={value}
      />
      <button onClick={() => setOpen(!open)}>
        <Icons name={open ? paths.ExpandMore : paths.ExpandLess} />
      </button>

      <div className={OPTION_CONTAINER}>
        {filterOptions.map((item, index) => (
          <button
          key={index}
            className={OPTIONS}
            onClick={() => {
              onChange(item.value);
              setOpen(false);
              setFilterOptions(options);
            }}
          >
            <span>{item.value}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
