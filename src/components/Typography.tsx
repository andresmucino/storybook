import React from "react";

interface TypographyProps {
  title: string;
  backgroundColor?: string;
  size?: string;
  color?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  title,
  backgroundColor,
  size,
  color,
}) => {
  const CONTAINER_TYPOGRAPGY = `block ${size} ${color}`;

  return (
    <span className={CONTAINER_TYPOGRAPGY} style={{ backgroundColor }}>
      {title}
    </span>
  );
};
