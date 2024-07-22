import { useTypewriter } from "react-simple-typewriter";

const Name = () => {
  return (
    <div>
      <h1 className="text-portfolio-highlight text-7xl font-bold tracking-widest uppercase mb-2">
        Juri Turiano
      </h1>
    </div>
  );
};

const Subtitle = () => {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Developer", "3D Modeler"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div>
      <h2 className="text-3xl  font-light tracking-wide ">
        I am a <span className="text-portfolio-accent">{typeEffect}</span>
        <span className="text-portfolio-accent animate-blinking">|</span>
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
