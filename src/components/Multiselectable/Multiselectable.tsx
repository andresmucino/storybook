import React, { useState } from "react";
import { Icons } from "../Icons/Icons";
import { paths } from "../Icons/Paths";

interface MultiselectProps {
  onChange: (value: string) => void;
  options: Array<OptionsProps>;
  value: string;
}

interface OptionsProps {
  value: string;
}

export const MultiSelect: React.FC<MultiselectProps> = ({
  onChange,
  options,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [filterOptions, setFilterOptions] =
    useState<Array<OptionsProps>>(options);
  const [selected, setSelected] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Array<OptionsProps>>(
    []
  );

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

  const selectedInputOptions = (value: string) => {
    setSelectedOptions([...selectedOptions, { value: value }]);
  };

  const OPTION_CONTAINER = `w-80 max-h-40 overflow-auto overflow-x-hidden ${
    open
      ? "block transition-all ease-in-out duration-150 h-auto"
      : "hidden max-h-0"
  } items-start justify-start absolute z-auto top-10 border rounded-lg border-gray-300 bg-white hover:z-50`;

  const OPTIONS =
    "flex flex-start text-left w-96 hover:bg-gray-200 ml-0 hover:transition-opacity duration-500 cursor-pointer px-1 justify-start py-1 items-center";

  React.useEffect(() => {
    if (!open) return;

    setSelected(false);
  }, [open]);

  const onCleanOptions = (value: OptionsProps) => {
    const result = selectedOptions.filter((item) => item.value !== value.value);

    setSelectedOptions(result);
  };

  return (
    <div className="flex relative border rounded">
      <div className="flex flex-wrap w-72 rounded px-1 items-center container mx-auto">
        <div className="flex flex-wrap w-full">
          {selectedOptions.length > 0 && (
            <div className="flex flex-wrap">
              {selectedOptions.map((item, index) => (
                <div
                  key={index}
                  className="text-end border flex items-center rounded m-1 pl-0.5"
                >
                  <span className="pr-0.5 text-sm" key={index}>
                    {item.value}
                  </span>
                  <button className="pt-1" onClick={() => onCleanOptions(item)}>
                    <Icons name={paths.Clear} size="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <input
            type="text"
            className={"flex-auto"}
            onChange={(e) => onChangeInput(e.target.value)}
            value={value}
          />
        </div>
      </div>
      {selectedOptions.length > 0 && (
        <button onClick={() => setSelectedOptions([])}>
          <Icons name={paths.Cancel} color="text-gray-400" size="h-6 w-6" />
        </button>
      )}
      <button onClick={() => setOpen(!open)} className=''>
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
              selectedInputOptions(item.value);
              onChangeInput("");
            }}
          >
            <span>{item.value}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
