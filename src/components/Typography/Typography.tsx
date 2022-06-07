interface AtomTypographyProps {
  title: string;
  backgroundColor?: string;
  size?: string;
  color?: string;
  underline?: boolean;
  bold?: string;
}

export const size = {
  h1: "text-base",
  h2: "text-lg",
  h3: "text-xl",
  h4: "text-2xl",
  h5: "text-3xl",
  h6: "text-4xl",
};

export const bolds = {
  light: "font-light",
  normal: "font-normal",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const AtomTypography = ({
  title,
  backgroundColor,
  size,
  color,
  underline,
  bold,
}: AtomTypographyProps) => {
  const CONTAINER_TYPOGRAPGY = `block ${size} ${
    underline ? "underline underline-offset-1" : ""
  } ${bold}`;

  return (
    <span className={CONTAINER_TYPOGRAPGY} style={{ backgroundColor, color }}>
      {title}
    </span>
  );
};
