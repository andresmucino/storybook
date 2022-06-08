interface AtomCardProps {
  details?: React.ReactNode;
  fab?: React.ReactNode;
  sortDescription?: string;
}

export const AtomCard = ({ details, fab, sortDescription }: AtomCardProps) => {
  return (
    <div className="rounded-lg shadow-md sm:w-80 overflow-hidden">
      <img
        src={
          "https://www.online-image-editor.com/styles/2019/images/power_girl.png"
        }
        alt="img"
      />
      <div className="relative px-6 py-8">
        {fab}
        <div className="pr-8">
          <span className={sortDescription ? "text-lg" : "text-4xl"}>
            {sortDescription}
          </span>
        </div>
        {details}
      </div>
    </div>
  );
};
