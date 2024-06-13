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
    <div className="bg-portfolio-secondary p-3 w-[30%] h-full rounded-md">
      <img className="rounded-md" src={imgSrc} alt={imgAlt} />
      <div className="my-3">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-md opacity-75 font-medium">{description}</p>
          <p className="text-md opacity-50 font-medium my-3">Tools: {tools}</p>
        </div>
        <div className="flex justify-center items-center gap-3 mt-4">
          <a
            className="bg-portfolio-accent border-2 border-portfolio-accent text-portfolio-secondary py-1 px-5 rounded-md"
            href={liveSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live site
          </a>
          <a
            className="text-portfolio-black border-2 border-portfolio-accent py-1 px-5 rounded-md"
            href={sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectPane = () => {
  return (
    <div className="my-20">
      <h1 className="text-portfolio-secondary text-2xl mb-3 font-semibold uppercase">
        Projects
      </h1>
      <div className="flex justify-between items-center">
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
