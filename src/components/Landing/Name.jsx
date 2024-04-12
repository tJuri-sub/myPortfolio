const Name = () => {
  return (
    <div>
      <h1 className="text-portfolio-highlight md:text-6xl font-bold text-center tracking-widest uppercase">
        Juri Turiano
      </h1>
    </div>
  );
};

const Subtitle = () => {
  return (
    <div>
      <h2 className="md:text-3xl text-center font-medium tracking-wide py-3">
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
