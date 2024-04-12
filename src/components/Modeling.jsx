const Blender = () => {
  return (
    <div>
      <h1 className="text-center text-2xl uppercase mb-7 text-portfolio-secondary font-bold">
        3D Modeling & Animation
      </h1>
      <div className="flex items-center gap-4">
        <div className="bg-portfolio-gray w-1/3 rounded-xl aspect-square">
          <img className="rounded-t-xl" src="/car.png" alt="Car Animation" />
          <div className="p-3">
            <h1 className="text-[20px] font-bold">Car Animation</h1>
            <p className="text-[14px] mb-3">
              An animation of a car bumping to another car.
            </p>
            <a
              className="text-portfolio-secondary bg-[#3A3A3A] border-[#3A3A3A] border-2  py-1 px-4 rounded-[5px] hover:bg-[#525252]"
              href="https://youtu.be/lTW8TVRRZsc?si=-ID-8aL70kE2sicg"
              target="_blank"
            >
              YouTube Link
            </a>
          </div>
        </div>
        <div className="bg-portfolio-gray w-1/3 rounded-xl aspect-square">
          <img
            className="rounded-t-xl"
            src="/part.png"
            alt="SciFi name Particles"
          />
          <div className="p-3">
            <h1 className="text-[20px] font-bold">SciFi Particles</h1>
            <p className="text-[14px] mb-3">
              My SciFi Name floating around in a particles form.
            </p>
            <a
              className="text-portfolio-secondary bg-[#3A3A3A] border-[#3A3A3A] border-2  py-1 px-4 rounded-[5px] hover:bg-[#525252]"
              href="https://youtu.be/8jJl7VybAi4?si=sbWFS4nuJTvfwCAR"
              target="_blank"
            >
              YouTube Link
            </a>
          </div>
        </div>
        <div className="bg-portfolio-gray w-1/3 rounded-xl aspect-square">
          <img className="rounded-t-xl" src="/magicc.png" alt="Magic Cave" />
          <div className="p-3">
            <h1 className="text-[20px] font-bold">Magic Cave</h1>
            <p className="text-[14px] mb-3">
              A magical cave that has a magical esssence flying around the cave.
            </p>
            <a
              className="text-portfolio-secondary bg-[#3A3A3A] border-[#3A3A3A] border-2  py-1 px-4 rounded-[5px] hover:bg-[#525252]"
              href="https://youtu.be/B-RhbL2qefc?si=C1xlIKhlW_22PXpM"
              target="_blank"
            >
              YouTube Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blender;
