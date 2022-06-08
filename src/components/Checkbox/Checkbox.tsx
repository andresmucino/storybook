interface AtomCheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  color: string;
}

export const AtomCheckbox = ({
  checked,
  color,
  disabled,
  onChange,
}: AtomCheckboxProps) => {
  const CHECKBOX = `form-checkbok h-4 w-4  cursor-pointer rounded focus:ring-transparent  ${
    disabled ? "text-gray-600 text-opacity-50" : `text-${color}`
  }`;

  return (
    <input
      type="checkbox"
      className={CHECKBOX}
      aria-hidden="true"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
