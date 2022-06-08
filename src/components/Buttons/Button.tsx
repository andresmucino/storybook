interface AtomButtonProps {
  title: string;
  color?: string;
  backgroundColor?: string;
  width?: string;
  onClick: () => void;
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
}: AtomButtonProps) => {
  const BUTTON_CONTAINER = `uppercase rounded rounded-full p-3 shadow-lg transition ease-in-out delay-150 hover:scale-110 active:scale-100 ${width} `;

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
