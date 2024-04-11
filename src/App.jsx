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
      <div className="container mx-auto px-44 ">
        <Header />
        <Landing />
        <Project />
        <Modeling />
      </div>
      <div className="text-portfolio-secondary my-20 border-y border-portfolio-glass-stroke/50 bg-portfolio-black bg-opacity-40 w-full py-10">
        <div className="container mx-auto px-44 ">
          <Icons />
        </div>
      </div>
      <div className="container mx-auto px-44 ">
        <Experience />
      </div>
      <div className="text-portfolio-secondary mt-20 border-y border-portfolio-glass-stroke/50 bg-portfolio-black w-full">
        <div className="container mx-auto px-44 ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
