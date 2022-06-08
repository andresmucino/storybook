interface AtomAvatarProps {
  img: string;
  words?: string;
  backgroundColor?: string;
  color?: string;
}

export const AtomAvatar = ({
  img,
  words,
  backgroundColor,
  color,
}: AtomAvatarProps) => {
  const CONTAINER_IMG =
    "rounded-r-full rounded-b-full rounded-t-full h-24 w-24 border-solid border-2 object-cover grid content-center";

  const CONTAINER_WORDS = `border-solid border-2 rounded-full h-24 w-24 text-center grid content-center`;

  return (
    <div>
      {img && words !== "" ? (
        <img className={CONTAINER_IMG} src={img} alt="img" />
      ) : (
        <div className={CONTAINER_WORDS} style={{ backgroundColor, color }}>
          {words}
        </div>
      )}
    </div>
  );
};
