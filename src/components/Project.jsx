const ProjectPane = () => {
  return (
    <div className="text-portfolio-secondary flex items-center justifty-center my-20 gap-5">
      <div className="bg-portfolio-lightgray rounded-xl">
        <img className="rounded-t-xl" src="/espression.png" alt="Esspression" />
        <div className="p-5">
          <h2 className="text-3xl font-bold tracking-widest">Espression</h2>
          <p className="py-3">
            My first commission ever. It is a static website for coffee shop.
          </p>
          <div>
            <h4>tools:</h4>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <div className="flex justify-center items-center gap-4 mt-5">
            <a
              className="bg-[#3A3A3A] border-[#3A3A3A] border-2  py-1 px-4 rounded-[5px] hover:bg-[#525252]"
              href="https://vast-smoke.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              className="border-[#3A3A3A] border-2 py-1 px-4 rounded-[5px] hover:bg-[#525252]"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div className="bg-portfolio-lightgray rounded-xl">
        <img className="rounded-t-xl" src="/excelguide.png" alt="Excel Guide" />
        <div className="p-5">
          <h2 className="text-3xl font-bold tracking-widest">Excel Guide</h2>
          <p className="py-3">
            My first slightly big commission. A written guide for Microsoft
            Excel usage.
          </p>
          <div>
            <h4>tools:</h4>
            <p>HTML, CSS, JavaScript, PHP, MySQL</p>
          </div>
          <div className="flex justify-center items-center gap-4 mt-5">
            <a
              className="bg-[#3A3A3A] border-[#3A3A3A] border-2  py-1 px-4 rounded-[5px] hover:bg-[#525252]"
              href="https://excelguide.infinityfreeapp.com/?i=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              className="border-[#3A3A3A] border-2 py-1 px-4 rounded-[5px] hover:bg-[#525252]"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPane;
