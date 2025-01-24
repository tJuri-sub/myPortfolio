import Name from "./Landing/Name.jsx";
import Profile from "./Landing/Profile.jsx";
import Resume from "./Landing/Resume.jsx";

const Land = () => {
  return (
    <div className="h-dvh flex flex-row items-center justify-center">
      <div className="w-[100%] ">
        <Name />
        {/* <Resume /> */}
      </div>
      <div className="w-[80%] ">
        <Profile />
      </div>
    </div>
  );
};

export default Land;
