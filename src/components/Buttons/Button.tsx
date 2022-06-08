interface AtomButtonProps {
  title: string;
  color?: string;
  backgroundColor?: string;
  width?: string;
  onClick: () => void;
  rounded?: boolean;
}

export const size = {
  small: "w-24",
  medium: "w-32",
  large: "w-80",
  full: "w-full",
};

export const AtomButton = ({
  title,
  color,
  backgroundColor,
  width,
  onClick,
  rounded,
}: AtomButtonProps) => {
  const BUTTON_CONTAINER = `uppercase ${
    rounded ? "rounded-full" : "rounded"
  }  p-3 shadow-lg active:scale-90 border-2 ${width} `;

  return (
    <button
      onClick={onClick}
      className={BUTTON_CONTAINER}
      style={{ color, backgroundColor }}
    >
      {title}
    </button>
  );
};
