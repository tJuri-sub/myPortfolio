import PropTypes from "prop-types";

const cardData = [
  {
    title: "Shoe Box",
    description: "Final group project for, Platform Technologies.",
    imgSrc: "/shoebox.png",
    imgAlt: "shoebox",
    tools: "HTML, CSS, Bootstrap, Javascript, Jquery, PHP, MySQL",
    liveSiteUrl: "https://shoebox.infinityfreeapp.com/?i=1",
    sourceCodeUrl: "https://github.com/tJuri-sub/shoebox",
  },
  {
    title: "Espression",
    description: "First commission that I created",
    imgSrc: "/espression.jpeg",
    imgAlt: "another project",
    tools: "HTML, CSS, Javascript",
    liveSiteUrl: "https://vast-smoke.surge.sh/",
    sourceCodeUrl: "https://github.com/tJuri-sub/Espression",
  },
  // Add more objects for additional cards
];

const Card = ({
  title,
  description,
  imgSrc,
  imgAlt,
  tools,
  liveSiteUrl,
  sourceCodeUrl,
}) => {
  return (
    <div className=" p-6 w-full border-y-[1px] border-portfolio-glass-stroke">
      <div className="flex flex-row-reverse justify-between items-center h-full">
        <img
          className="rounded-xl w-[40%] border-portfolio-glass-stroke border-4"
          src={imgSrc}
          alt={imgAlt}
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl text-portfolio-secondary font-bold">
              {title}
            </h1>
            <p className="text-md text-portfolio-secondary opacity-75 font-medium">
              {description}
            </p>
            <p className="text-md text-portfolio-secondary opacity-50 font-medium my-3">
              Tools: {tools}
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <a
              className="bg-portfolio-accent border-2 w-60 text-center border-portfolio-accent text-portfolio-secondary py-1 px-5 rounded-md hover:bg-[#df8da1] transition duration-300"
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live site
            </a>
            <a
              className="text-portfolio-secondary border-2 w-60 text-center border-portfolio-accent py-1 px-5 rounded-md hover:bg-portfolio-accent hover:text-white transition duration-300"
              href={sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectPane = () => {
  return (
    <div className="my-20">
      <h1 className="text-portfolio-secondary text-3xl mb-10 text-center font-semibold uppercase">
        Projects
      </h1>
      <div className="flex flex-col gap-3 justify-between items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
            tools={card.tools}
            liveSiteUrl={card.liveSiteUrl}
            sourceCodeUrl={card.sourceCodeUrl}
          />
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  liveSiteUrl: PropTypes.string.isRequired,
  sourceCodeUrl: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  description: "",
  imgSrc: "",
  imgAlt: "",
  tools: "",
  liveSiteUrl: "#",
  sourceCodeUrl: "#",
};

export default ProjectPane;
