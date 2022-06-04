import React from "react";

interface TitleProps {
  child: string;
}

export const Title = ({ child }: TitleProps) => {
  return <span className="text-7xl text-red-800">{child}</span>;
};
