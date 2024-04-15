import {
  ReactIcon,
  TailwindIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  CssIcon,
  JavasIcon,
  BlenderIcon,
} from "./Icon/index.jsx";

const Skills = () => {
  return (
    <div>
      <h1 className="bg-gradient-to-r from-portfolio-accent to-portfolio-highlight bg-clip-text text-transparent text-4xl  xs:text-3xl font-bold tracking-wider my-2">
        Skills
      </h1>
      <p className=" lg:text-xl xs:text-lg tracking-wide">
        I am quite comfortable working with this technologies:
      </p>
      <div className="skills-grid grid w-full gap-4 mx-auto mt-10 max-xs:gap-2 md:mt-12 lg:text-lg">
        <div className="flex gap-3">
          <HtmlIcon />
          <p className="text-lg">HTML</p>
        </div>
        <div className="flex gap-3">
          <CssIcon />
          <p className="text-lg">CSS</p>
        </div>
        <div className="flex gap-3">
          <JavasIcon />
          <p className="text-lg">JavaScript</p>
        </div>
        <div className="flex gap-3">
          <ReactIcon />
          <p className="text-lg">React</p>
        </div>
        <div className="flex gap-3">
          <TailwindIcon />
          <p className="text-lg">Tailwind</p>
        </div>
        <div className="flex gap-3">
          <FigmaIcon />
          <p className="text-lg">Figma</p>
        </div>
        <div className="flex gap-3">
          <GitIcon />
          <p className="text-lg">Git</p>
        </div>
        <div className="flex gap-3">
          <BlenderIcon />
          <p className="text-lg">Blender</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
