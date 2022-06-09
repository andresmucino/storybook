import React from 'react';

interface ComboBoxProperties {
  onChange: (value: string) => void;
  value: string;
  options: Array<OptionProperties>;
  error?: boolean;
  readOnly?: boolean;
  showLabel?: boolean;
  helperText?: string;
  placeholder: string;
}

interface OptionProperties {
  value: string;
}

const optionsDefault = [
  {
    value: 'envios',
  },
  {
    value: 'paquete 1',
  },
  {
    value: 'paquete 2',
  },
  {
    value: 'option 4',
  },
];

export const AtomComboBox: React.FC<ComboBoxProperties> = ({
  onChange,
  value,
  options,
  error,
  readOnly,
  showLabel,
  helperText,
  placeholder,
}: ComboBoxProperties) => {
  const [open, setOpen] = React.useState(false);
  const [filterOptions, setFilterOptions] = React.useState(options);
  const [selected, setSelected] = React.useState(false);

  /* styles */
  const CONTAINER =
    'flex flex-col w-80 bg-white relative items-center justify-center';

  const OPTION_CONTAINER = `w-80 max-h-40 overflow-y-auto ${
    open
      ? 'block transition-all ease-in-out duration-700 h-auto'
      : 'hidden max-h-0'
  } items-start justify-start absolute z-10 top-12 border rounded-lg border-gray-400 bg-white`;

  const OPTION =
    'flex flex-start text-left w-full h-10 hover:transition-opacity duration-500 hover:bg-gray-300 cursor-pointer px-5  items-center justify-start outline-none focus:outline-none';

  const onChangeInput = (value: string) => {
    onChange(value);
    if (value !== '' && !selected) {
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
    <div className={CONTAINER}>
      <input
        placeholder={placeholder}
        // icon={open && !readOnly ? 'TriangleDropUp' : 'TriangleDropDown'}
        // iconPosition={'right'}
        // label={placeholder}
        value={value}
        // showLabel={showLabel}
        // error={error}
        readOnly={readOnly}
        // helperText={helperText}
        onChange={() => onChangeInput(value)}
        // onClickIcon={() => {
        //   if (!readOnly) {
        //     setOpen(!open);
        //   }
        // }}
      />

      <div className={OPTION_CONTAINER}>
        {filterOptions?.map((item, index) => (
          <button
            className={OPTION}
            key={index}
            onClick={() => {
              onChange(item.value);
              setOpen(false);
              setSelected(true);
              setFilterOptions(options);
            }}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
};