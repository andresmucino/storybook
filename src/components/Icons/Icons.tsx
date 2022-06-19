interface IconsProps {
  name: string;
  color?: string;
  size?: string;
}

export const color = {
  gray: 'text-gray-300',
  red: 'text-red-400',
  blue:'text-blue-400',
  black: 'text-neutral-900'
}

export const size = {
  small: 'h-5 w-5',
  default: 'h-7 w-7',
  large: 'h-9 w-9'
}

export const Icons: React.FC<IconsProps> = ({ name, color, size }) => {
  const CONTAINER_ICON = `inline-flex fill-current ${color} ${size}`;

  return (
    <svg
      className={CONTAINER_ICON}
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="30px"
      viewBox="0 0 29 29"
      width="30px"
      fill="#000000"
    >
      <path d={name} />
    </svg>
  );
};
