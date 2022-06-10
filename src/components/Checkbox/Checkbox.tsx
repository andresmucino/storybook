interface AtomCheckboxProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  // color: string;
}

export const AtomCheckbox = ({
  disabled,
  label,
  onChange,
  checked,
}: AtomCheckboxProps) => {
  const CONTAINER_CHECKBOX = `flex items-center space-x-2.5`;
  const INPUT_CHECKBOX = `w-5 h-5`;
  const LABEL_CHECKBOX = `${disabled === true ? "text-gray-400" : ""}`;

  return (
    <div className={CONTAINER_CHECKBOX}>
      <input
        type="checkbox"
        className={INPUT_CHECKBOX}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <label className={LABEL_CHECKBOX}>{label}</label>
    </div>
  );
};
