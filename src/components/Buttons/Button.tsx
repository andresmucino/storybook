interface AtomButtonProps {
  title: string;
  color?: string;
  backgroundColor?: string;
  width?: string;
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
}: AtomButtonProps) => {
  const BUTTON_CONTAINER = `uppercase rounded rounded-full p-3 ${width} `;

  return (
    <button className={BUTTON_CONTAINER} style={{ color, backgroundColor }}>
      {title}
    </button>
  );
};
