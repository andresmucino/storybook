interface AtomCarouselProps {
  data: Array<ImageProperties>;
}

interface ImageProperties {
  src: string;
  title: string;
}

export const AtomCarrusel = ({ data }: AtomCarouselProps) => {
  const SLIDER = " slider";

  const CONTAINER = `animate-slide`;

  const IMAGE_CONTAINER =
    "w-60 h-14 m-5 first:ml-0 last:mr-5 bg-gray-500 overflow-hidden";

  const IMAGE = "w-full h-full object-cover";

  const totalItems = data.length * 2;

  const newData = [...data, ...data];

  return (
    <div className={SLIDER}>
      <div
        className={CONTAINER}
        style={{
          width: `calc(240px * ${totalItems})`,
        }}
      >
        {newData.map((item, index) => (
          <div key={index} className={IMAGE_CONTAINER}>
            <img
              src={`${item.src}`}
              width={100}
              className={IMAGE}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
