import React from "react";

interface LinkProps {
  href: string;
  label: string;
  color: string;
}

export const color = {
  blue: "text-blue-400",
  black: "text-black",
  red: "text-red-500",
};

export const AtomLink: React.FC<LinkProps> = ({ href, label, color }) => {
  const CONTAINED_LINK = `underline underline-offset-4 ${color}`;

  return (
    <a href={href} className={CONTAINED_LINK}>
      {label}
    </a>
  );
};
