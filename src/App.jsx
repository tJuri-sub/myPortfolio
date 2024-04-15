import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import Project from "./components/Project.jsx";
import Icons from "./components/Icons.jsx";
import Modeling from "./components/Modeling.jsx";
import Footer from "./components/Footers.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <>
      <div className="md:container md:mx-auto lg:px-40 md:px-20 xs:px-4">
        <Header />
        <Landing />
        <Project />
        <Modeling />
      </div>
      <div className="text-portfolio-secondary my-20 border-y border-portfolio-glass-stroke/50 bg-portfolio-black bg-opacity-40 w-full py-10">
        <div className="md:container mx-auto lg:px-40 md:px-20 xs:px-3">
          <Icons />
        </div>
      </div>
      <div className="md:container mx-auto lg:px-40  md:px-20 xs:px-0">
        <Experience />
      </div>
      <div className="text-portfolio-secondary mt-20 border-y border-portfolio-glass-stroke/50 bg-portfolio-black w-full">
        <div className="md:container mx-auto lg:px-40  md:px-20 xs:px-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
