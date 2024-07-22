import React from "react";

const PortfolioItem = ({ imageSrc, altText, title, description, link }) => {
  return (
    <div className="w-1/4 bg-portfolio-secondary p-3 rounded">
      <img
        className="w-full aspect-square rounded-md"
        src={imageSrc}
        alt={altText}
      />
      <div className="mt-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="font-light ">{description}</p>
        <div className=" mt-4 flex justify-center items-center">
          <a
            className=" bg-portfolio-accent text-portfolio-secondary py-[4px] px-6 rounded hover:bg-[#9d455a]"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Link
          </a>
        </div>
      </div>
    </div>
  );
};

const Blender = () => {
  const portfolioItems = [
    {
      imageSrc: "/car.png",
      altText: "Car Animation",
      title: "Car Animation",
      description: "An animation of a car bumping into another car.",
      link: "https://youtu.be/lTW8TVRRZsc?si=-ID-8aL70kE2sicg",
    },
    {
      imageSrc: "/part.png",
      altText: "SciFi Particles",
      title: "SciFi Particles",
      description: "My SciFi Name floating around in a particles form.",
      link: "https://youtu.be/8jJl7VybAi4?si=sbWFS4nuJTvfwCAR",
    },
    {
      imageSrc: "/magicc.png",
      altText: "Magic Cave",
      title: "Magic Cave",
      description: "A magical cave with a magical essence flying around.",
      link: "https://youtu.be/B-RhbL2qefc?si=C1xlIKhlW_22PXpM",
    },
    {
      imageSrc: "/daily.png",
      altText: "Daily life in School as an I.T. Student",
      title: "Daily life in School as an I.T. Student",
      description: "A group project.",
      link: "https://youtu.be/cdAEgVQ3DaI?si=7FOeisTPk7yc9HqQ",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-2xl uppercase mb-7 text-portfolio-secondary font-bold">
        3D Modeling & Animation
      </h1>
      <div className="scroll3d flex justify-start gap-4">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Blender;
