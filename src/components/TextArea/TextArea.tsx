import React from "react";

interface AtomTextAreaProps {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange(value: string): string | void;
  label?: string;
  helperText?: string;
  showLabel?: boolean;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  error?: boolean;
  showHelperText?: boolean;
}

export const AtomTextArea: React.FC<AtomTextAreaProps> = ({
  placeholder,
  name,
  value,
  onChange,
  showLabel,
  label,
  required,
  readOnly,
  disabled,
  error,
  helperText,
  showHelperText,
}) => {
  const CONTAINED_TEXTAREA = `border w-80 h-44 relative ${
    error && "border-red-500"
  }`;

  const TEXTAREA = `focus:ring-transparent outline-none resize-none w-full h-full`;

  const CONTAINED_LABEL = `absolute inset-x-0 -top-2 left-2 bg-white w-14 justify-center text-center items-center`;

  const LABEL_TEXT = `text-xs ${error && "text-red-400"} ${
    disabled && "text-gray-300"
  }`;

  const HELPER_TEXT = `text-xs pl-1 ${error && "text-red-400"} ${
    disabled && "text-gray-300"
  }`;

  return (
    <>
      <div className={CONTAINED_TEXTAREA}>
        {showLabel && (
          <label className={CONTAINED_LABEL}>
            <p className={LABEL_TEXT}>{`${label} ${required ? "*" : ""}`}</p>
          </label>
        )}
        <textarea
          className={TEXTAREA}
          name={name}
          contentEditable={false}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ): void => {
            onChange(event.target.value);
          }}
        ></textarea>
      </div>
      {showHelperText && <p className={HELPER_TEXT}>{helperText}</p>}
    </>
  );
};
