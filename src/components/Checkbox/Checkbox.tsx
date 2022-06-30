interface AtomCheckboxProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  type?: string;
}

export const type = {
  switch: "switch",
  radio: "radio",
  checkbox: "checkbox",
};

export const AtomCheckbox = ({
  disabled,
  label,
  onChange,
  checked,
  type,
}: AtomCheckboxProps) => {
  const CONTAINER_CHECKBOX = `flex items-center space-x-2.5 `;

  const INPUT_CHECKBOX = `w-5 h-5 cursor-pointer focus:ring-transparent`;

  const LABEL_CHECKBOX = `${disabled ? "text-gray-400" : ""}`;

  const CONTAINER = `border-2 w-10 h-4.5 rounded-full ${
    checked ? "bg-blue-500 duration-700" : "bg-gray-200 duration-700"
  }  py-0.5 flex aling-items-center ${disabled && "bg-gray-300"}`;

  const CIRCLE = ` w-3 h-3 px-1 bg-white rounded-full ${
    checked ? "translate-x-6 duration-700" : "duration-700"
  }`;

  const INPUT = `w-0 h-0`;

  const INPUT_RADIO = `w-5 h-5 relative border rounded-full flex justify-center items-center ${
    checked && "border-blue-500"
  }`;

  const CIRCLE_RADIO = `w-3 h-3 rounded-full absolute ${
    checked && "bg-blue-500"
  }`;

  return (
    <div className={CONTAINER_CHECKBOX}>
      {type === "switch" ? (
        <label className={CONTAINER}>
          <input
            type="checkbox"
            className={INPUT}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <span className={CIRCLE}></span>
        </label>
      ) : type === "checkbox" ? (
        <input
          type={"checkbox"}
          className={INPUT_CHECKBOX}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
        />
      ) : (
        <label className={INPUT_RADIO}>
          <input
            type="checkbox"
            className={INPUT}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <span className={CIRCLE_RADIO}></span>
        </label>
      )}
      <span className={LABEL_CHECKBOX}>{label}</span>
    </div>
  );
};
