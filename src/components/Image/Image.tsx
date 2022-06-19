import React from "react";

interface ImagesProps {
  image: string;
  isProfile?: boolean;
  alt?: string;
}

export const Images: React.FC<ImagesProps> = ({ image, alt, isProfile }) => {
  const CONTAINER = "rounded-t-lg bg-gray-400 sm:w-80";
  const PROFILE = "rounded-full sm:w-20 sm:h-20 h-20  w-20 object-cover";

  return (
    <div>
      <img src={image} className={isProfile ? CONTAINER : PROFILE} alt={alt} />
    </div>
  );
};
