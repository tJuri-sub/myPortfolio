const Name = () => {
  return (
    <div>
      <h1 className="text-portfolio-highlight xs:text-4xl lg:text-6xl font-bold text-center tracking-widest uppercase">
        Juri Turiano
      </h1>
    </div>
  );
};

const Subtitle = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-2xl xs:text-xl text-center font-medium tracking-wide lg:py-3 md:py-2 xs:py-1">
        Front-end Developer
      </h2>
    </div>
  );
};

const NameCard = () => {
  return (
    <div className="text-portfolio-secondary">
      <Name />
      <Subtitle />
    </div>
  );
};

export default NameCard;
